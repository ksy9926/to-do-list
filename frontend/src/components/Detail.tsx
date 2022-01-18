import { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { deleteTodosAsync, putTodosAsync } from 'redux/actions/todosAction';
import { setSelected } from 'redux/actions/selectedAction';

const Aside = styled.aside`
  min-width: 300px;
  border-left: 1px solid ${COLOR_PALETTE.GRAY100};
  background: ${COLOR_PALETTE.GRAY50};
`;

const DetailDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 15px;
  border: 1px solid ${COLOR_PALETTE.GRAY100};
  background: #fff;

  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
`;

const DetailTextArea = styled.textarea`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
  font-size: 0.95rem;
  padding: 15px;
  resize: none;
  overflow: hidden;

  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
  &:focus {
    outline: none;
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
`;

const Deadline = styled.div`
  margin-left: 15px;
`;

const Delete = styled.div`
  margin-left: 15px;
`;

const Detail = () => {
  const dispatch = useDispatch();
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { id } = useSelector((state: RootState) => state.selected);
  const [detailValue, setDetailValue] = useState('');

  useEffect(() => {
    setDetailValue(id !== undefined ? todos[id].description : '');
  }, [id]);

  const putData = (todoid: number, index: number) => {
    const todo = { ...todos[index] };

    todo.description = detailValue;

    dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
  };

  const deleteData = (todoid: number) => {
    dispatch(setSelected(undefined));
    dispatch(deleteTodosAsync.request(todoid));
  };

  console.log('id: ', id);

  return (
    <>
      {id !== undefined ? (
        <Aside>
          <DetailDiv>
            {todos[id].completed ? (
              <CheckCircleIcon style={{ marginRight: '10px' }} />
            ) : (
              <EmptyCircleIcon style={{ marginRight: '10px' }} />
            )}
            {todos[id].content}
            {/* <FullStarIcon /> */}
          </DetailDiv>
          <DetailDiv>생성날짜: {todos[id].createdAt.slice(0, 10)}</DetailDiv>
          <DetailDiv>완료날짜: {todos[id].completedAt.slice(0, 10)}</DetailDiv>
          {/* {todos[id].description ? (
            <DetailDiv>{todos[id].description}</DetailDiv>
          ) : ( */}
          <DetailDiv style={{ padding: 0, height: '150px', alignItems: 'start' }}>
            <DetailTextArea
              value={detailValue}
              onChange={(e) => setDetailValue(e.target.value)}
              onBlur={() => putData(todos[id].todoid, id)}
            ></DetailTextArea>
          </DetailDiv>
          {/* )} */}
          <DetailDiv
            style={{ cursor: 'pointer' }}
            onClick={() => {
              deleteData(todos[id].todoid);
            }}
          >
            <DeleteIcon />
            <Delete>삭제하기</Delete>
          </DetailDiv>
        </Aside>
      ) : (
        <></>
      )}
    </>
  );
};

export default Detail;
