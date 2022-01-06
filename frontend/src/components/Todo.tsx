import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import axios from 'axios';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { DAY_INFO } from 'constants/date';
import {
  Main,
  TodoDiv,
  TodoInfo,
  TitleWrap,
  Title,
  Today,
  AddDiv,
  AddInput,
  TextDiv,
} from 'styles/todoStylel';

import { TodosType } from 'types/types';

const Todo = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [todoValue, setTodoValue] = useState('');
  const date = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/todos');
      console.log(res.data.todos);
      setTodos(res.data.todos);
    };

    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const postData = async () => {
    const res = await axios.post('http://localhost:8080/todos', {
      todoid: 3,
      content: todoValue,
      completed: false,
    });
    console.log('res: ', res);
  };

  const getTodoById = async () => {
    const res = await axios.get('http://localhost:8080/todos/todoid/1');
    console.log('todoid 1: ', res);
  };

  const addTodoHandler = () => {};

  const todoList = todos.map((item: TodosType, i: number) => {
    return (
      <TodoDiv key={i}>
        <EmptyCircleIcon />
        <TodoInfo>
          <div style={{ padding: '2px 0' }}>{item.content}</div>
          <div style={{ padding: '2px 0' }}>작업</div>
        </TodoInfo>
        <EmptyStarIcon />
      </TodoDiv>
    );
  });

  return (
    <Main>
      <TitleWrap>
        <Title>오늘 할 일</Title>
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
          <div style={{ display: 'flex' }}>
            <button
              onClick={() => {
                setIsAdd(!isAdd);
              }}
            >
              취소
            </button>
            <button onClick={postData}>완료</button>
          </div>
        </AddDiv>
      ) : (
        <AddDiv flag={isAdd} onClick={() => setIsAdd(true)}>
          <PlusIcon />
          <TextDiv>작업 추가</TextDiv>
        </AddDiv>
      )}
      <div>{todoList}</div>
    </Main>
  );
};

export default Todo;
