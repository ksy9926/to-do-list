import Header from 'components/Header';
import Menu from 'components/Menu';
import Todo from 'components/Todo';
import Detail from 'components/Detail';
import { MainWrap } from 'styles/mainStyle';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <Menu menu="today" />
        <Todo menu="today" />
        <Detail />
      </MainWrap>
    </>
  );
};

export default MainPage;
