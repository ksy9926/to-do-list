import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { deleteTodosAsync, putTodosAsync } from 'redux/actions/todosAction';
import { setSelected } from 'redux/actions/selectedAction';
import { message } from 'antd';
import { Aside, DetailDiv, DetailTextArea, Delete } from 'styles/detailStyle';

const Detail = () => {
  const dispatch = useDispatch();
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { id } = useSelector((state: RootState) => state.selected);
  const [detailValue, setDetailValue] = useState('');

  useEffect(() => {
    setDetailValue(id !== undefined ? todos[id].description : '');
  }, [id]);

  const putData = (todoid: number, index: number) => {
    if (detailValue.trim() !== '') {
      const todo = { ...todos[index] };

      todo.description = detailValue;

      dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
      message.success('세부 내용이 수정되었습니다.');
    } else {
      message.error('세부 내용을 입력해주세요.');
    }
  };

  const deleteData = (todoid: number) => {
    dispatch(setSelected(undefined));
    dispatch(deleteTodosAsync.request(todoid));
    message.success('할 일이 삭제되었습니다.');
  };

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
          <DetailDiv style={{ padding: 0, height: '150px', alignItems: 'start' }}>
            <DetailTextArea
              value={detailValue}
              onChange={(e) => setDetailValue(e.target.value)}
              onBlur={() => {
                putData(todos[id].todoid, id);
              }}
            />
          </DetailDiv>
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
