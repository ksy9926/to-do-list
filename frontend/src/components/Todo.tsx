import React, { useEffect, useState } from 'react';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import axios from 'axios';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';
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

import { TodoType } from 'types/types';

const Todo = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
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
    try {
      const res = await axios.post('http://localhost:8080/todos', {
        content: todoValue,
        completed: false,
      });

      setTodos([...todos, res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteData = async () => {
    for (let i = 1; i <= 5; i++) {
      const res = await axios.delete(`http://localhost:8080/todos/todoid/${i}`);
    }
  };

  const getTodoById = async () => {
    const res = await axios.get('http://localhost:8080/todos/todoid/1');
    console.log('todoid 1: ', res);
  };

  const addTodoHandler = () => {};

  const onCompleteHandler = async (item: TodoType, i: number) => {
    const res = await axios.put(`http://localhost:8080/todos/todoid/${item.todoid}`, {
      completed: !item.completed,
    });

    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  const todoList = todos.map((item: TodoType, i: number) => {
    return (
      <TodoDiv key={i}>
        {item.completed ? (
          <CheckCircleIcon onClick={() => onCompleteHandler(item, i)} />
        ) : (
          <EmptyCircleIcon onClick={() => onCompleteHandler(item, i)} />
        )}
        <TodoInfo>
          <div style={{ padding: '2px 0' }}>{item.content}</div>
          <div style={{ padding: '2px 0' }}>
            <span>작업</span>
            <span style={{ marginLeft: '15px' }}>{item.createdAt.slice(0, 10)}</span>
          </div>
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
              <span style={{ cursor: 'pointer', marginLeft: '15px' }} onClick={postData}>
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
      <div>{todoList}</div>
      {/* <button onClick={onDeleteData}>삭제</button> */}
    </Main>
  );
};

export default Todo;
