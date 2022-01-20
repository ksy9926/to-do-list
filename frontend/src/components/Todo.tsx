import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
import { DAY_INFO } from 'constants/date';
import {
  Main,
  TitleWrap,
  Title,
  Today,
  AddDiv,
  AddInput,
  TextDiv,
  AddText,
} from 'styles/todoStyle';
import { getTodosAsync, postTodosAsync } from 'redux/actions/todosAction';
import { TodoList } from './TodoList';
import { toggleMenu } from 'redux/actions/menuAction';
import { message } from 'antd';
import { getFormatDate } from 'utils/date';

const Todo = ({ menu }: { menu: string }) => {
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState('');
  const date = new Date();
  const { open } = useSelector((state: RootState) => state.menu);

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
      {menu !== 'important' &&
        (isAdd ? (
          <AddDiv flag={isAdd}>
            <AddInput
              placeholder="작업 추가"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <AddText>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CalendarIcon style={{ marginRight: '10px' }} /> {getFormatDate().slice(0, 10)}
              </div>
              <div>
                <span style={{ cursor: 'pointer' }} onClick={() => setIsAdd(!isAdd)}>
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
            </AddText>
          </AddDiv>
        ) : (
          <AddDiv flag={isAdd} onClick={() => setIsAdd(true)}>
            <PlusIcon />
            <TextDiv>작업 추가</TextDiv>
          </AddDiv>
        ))}
      <TodoList completed={false} menu={menu} />
      <TitleWrap>
        <Title>완료됨</Title>
      </TitleWrap>
      <TodoList completed={true} menu={menu} />
    </Main>
  );
};

export default Todo;
