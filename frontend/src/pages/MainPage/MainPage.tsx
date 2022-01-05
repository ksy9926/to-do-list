import React from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Todo from 'components/Todo';
import Detail from 'components/Detail';
import styled from 'styled-components';

const MainWrap = styled.div`
  display: flex;

  height: calc(100vh - 50px);
`

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainWrap>
        <Menu />
        <Todo />
        <Detail />
      </MainWrap>
    </div>
  );
};

export default MainPage;