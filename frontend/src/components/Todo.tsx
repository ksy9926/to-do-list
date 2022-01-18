import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import axios from 'axios';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
import { DAY_INFO } from 'constants/date';
import { Main, TitleWrap, Title, Today, AddDiv, AddInput, TextDiv } from 'styles/todoStyle';
import { TodoType } from 'types/types';
import { getTodosAsync, postTodosAsync } from 'redux/actions/todosAction';
import { TodoList } from './TodoList';
import { toggleMenu } from 'redux/actions/menuAction';
import { message } from 'antd';

const Todo = () => {
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState('');
  const date = new Date();
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { open } = useSelector((state: RootState) => state.menu);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    dispatch(getTodosAsync.request());
  }, []);

  const postData = () => {
    if (todoValue.trim() !== '') {
      dispatch(postTodosAsync.request(todoValue));
      message.success('할 일이 등록되었습니다.');
      setIsAdd(false);
    } else {
      message.error('할 일을 입력해주세요.');
    }
  };

  const getTodoById = async () => {
    const res = await axios.get('http://localhost:8080/todos/todoid/1');
    console.log('todoid 1: ', res);
  };

  const onCompleteHandler = async (item: TodoType, i: number) => {
    // const res = await axios.put(`http://localhost:8080/todos/todoid/${item.todoid}`, {
    //   completed: !item.completed,
    // });

    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    console.log(newTodos);
    // setTodos(newTodos);
  };

  return (
    <Main>
      <TitleWrap>
        <Title>
          {open ? (
            <></>
          ) : (
            <HamburgerIcon onClick={() => dispatch(toggleMenu())} style={{ marginRight: '10px' }} />
          )}
          오늘 할 일
        </Title>
        <Today>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일,{' '}
          {DAY_INFO[date.getDay()]}요일
        </Today>
      </TitleWrap>
      {isAdd ? (
        <AddDiv flag={isAdd}>
          <AddInput
            placeholder="작업 추가"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '10px',
              fontSize: '0.8rem',
            }}
          >
            <CalendarIcon />
            <div>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsAdd(!isAdd);
                }}
              >
                취소
              </span>
              <span
                style={{ cursor: 'pointer', marginLeft: '15px' }}
                onClick={() => {
                  postData();
                  setTodoValue('');
                }}
              >
                완료
              </span>
            </div>
          </div>
        </AddDiv>
      ) : (
        <AddDiv flag={isAdd} onClick={() => setIsAdd(true)}>
          <PlusIcon />
          <TextDiv>작업 추가</TextDiv>
        </AddDiv>
      )}
      <TodoList completed={false} />
      <TitleWrap>
        <Title>완료됨</Title>
      </TitleWrap>
      <TodoList completed={true} />
    </Main>
  );
};

export default Todo;
