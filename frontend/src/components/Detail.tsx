import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { deleteTodosAsync, putTodosAsync } from 'redux/actions/todosAction';
import { setSelected } from 'redux/actions/selectedAction';
import { message } from 'antd';
import {
  Aside,
  DetailTitleDiv,
  DetailDiv,
  DetailTitleInput,
  DetailTextArea,
  Delete,
} from 'styles/detailStyle';

const Detail = () => {
  const dispatch = useDispatch();
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { id } = useSelector((state: RootState) => state.selected);
  const [detailValue, setDetailValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  useEffect(() => {
    setDetailValue(id !== undefined ? todos[id].description : '');
    setTitleValue(id !== undefined ? todos[id].content : '');
  }, [id]);

  if (id === undefined) return <></>;

  const putData = (todoid: number, index: number) => {
    if (titleValue.trim() === '') {
      message.error('내용이 비어있습니다.');
    } else if (detailValue.trim() === todos[id].description && titleValue === todos[id].content) {
      message.warn('수정된 내용이 없습니다.');
    } else {
      const todo = { ...todos[index] };

      todo.description = detailValue;
      todo.content = titleValue;

      dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
      message.success('할 일이 수정되었습니다.');
    }
  };

  const deleteData = (todoid: number) => {
    dispatch(setSelected(undefined));
    dispatch(deleteTodosAsync.request(todoid));
    message.success('할 일이 삭제되었습니다.');
  };

  return (
    <Aside>
      <DetailTitleDiv>
        {todos[id].completed ? (
          <CheckCircleIcon style={{ marginRight: '10px' }} />
        ) : (
          <EmptyCircleIcon style={{ marginRight: '10px' }} />
        )}
        <DetailTitleInput
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          onBlur={() => {
            putData(todos[id].todoid, id);
          }}
        />
      </DetailTitleDiv>
      <DetailDiv>작성일: {todos[id].createdAt.slice(0, 10)}</DetailDiv>
      <DetailDiv>종료일: {todos[id].completedAt.slice(0, 10)}</DetailDiv>
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
  );
};

export default Detail;
