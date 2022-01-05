import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import COLOR_PALETTE from 'styles/colors';
import axios from 'axios';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { DAY_INFO } from 'constants/date';

const Main = styled.main`
  flex: auto;
`;

const TitleWrap = styled.div`
  padding: 30px 30px 10px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.4rem;
`;

const Today = styled.div``;

const AddDiv = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  padding: 15px;
  margin: 0 10px;

  background: ${COLOR_PALETTE.GRAY50};
`;

const TextDiv = styled.div`
  margin-left: 15px;
  line-height: 30px;
`;

const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${COLOR_PALETTE.GRAY500};
  margin: 0 15px;
`;

const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;

  box-sizing: border-box;
  height: 100%;
  margin-left: 15px;
`;

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const date = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080');
      setTodos(res.data.todo);
    };

    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const todoList = todos.map((item: string, i: number) => {
    return (
      <TodoDiv key={i}>
        <EmptyCircleIcon />
        <TodoInfo>
          <div style={{ padding: '2px 0' }}>{item}</div>
          <div style={{ padding: '2px 0' }}>작업</div>
        </TodoInfo>
        <EmptyStarIcon />
      </TodoDiv>
    );
  });

  const postData = async () => {
    const res = await axios.post('http://localhost:8080/todos', {
      todoid: 1,
      content: '타입스크립트 공부',
      completed: false,
    });
  };

  return (
    <Main>
      <TitleWrap>
        <Title>오늘 할 일</Title>
        <Today>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일,{' '}
          {DAY_INFO[date.getDay()]}요일
        </Today>
      </TitleWrap>
      <AddDiv>
        <PlusIcon />
        <TextDiv>작업 추가</TextDiv>
      </AddDiv>
      <div>{todoList}</div>
      <button onClick={postData}>투두 추가</button>
    </Main>
  );
};

export default Todo;
