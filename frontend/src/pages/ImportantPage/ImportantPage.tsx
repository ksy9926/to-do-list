import Header from 'components/Header';
import Menu from 'components/Menu';
import Todo from 'components/Todo';
import Detail from 'components/Detail';
import { MainWrap } from 'styles/mainStyle';

const ImportantPage = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <Menu menu="important" />
        <Todo menu="important" />
        <Detail />
      </MainWrap>
    </>
  );
};

export default ImportantPage;
