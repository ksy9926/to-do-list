import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import COLOR_PALETTE from 'styles/colors';

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

const Todo = () => {
  return (
    <Main>
      <TitleWrap>
        <Title>오늘 할 일</Title>
        <Today>2022년 1월 3일, 월요일</Today>
      </TitleWrap>
      <AddDiv>
        <PlusIcon />
        <TextDiv>작업 추가</TextDiv>
      </AddDiv>
    </Main>
  );
};

export default Todo;
