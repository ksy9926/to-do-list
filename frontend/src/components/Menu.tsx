import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
import { ReactComponent as LightIcon } from 'assets/icons/light.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import {
  MenuWrap,
  HamburgerDiv,
  Nav,
  NavItemDiv,
  NavTitleSpan,
  NavCountSpan,
} from 'styles/menuStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { toggleMenu } from 'redux/actions/menuAction';
import { useNavigate } from 'react-router-dom';

const Menu = ({ menu }: { menu: string }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.menu);
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);

  if (!open) return <></>;

  return (
    <MenuWrap>
      <HamburgerDiv>
        <HamburgerIcon
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
      </HamburgerDiv>
      <Nav>
        <NavItemDiv
          menu={menu === 'today'}
          onClick={() => {
            navigate('/');
          }}
        >
          <LightIcon />
          <NavTitleSpan>오늘 할 일</NavTitleSpan>
          <NavCountSpan>{todos.filter((item) => !item.completed).length}</NavCountSpan>
        </NavItemDiv>
        <NavItemDiv
          menu={menu === 'important'}
          onClick={() => {
            navigate('/important');
          }}
        >
          <EmptyStarIcon />
          <NavTitleSpan>중요</NavTitleSpan>
          <NavCountSpan>
            {todos.filter((item) => item.important && !item.completed).length}
          </NavCountSpan>
        </NavItemDiv>
      </Nav>
    </MenuWrap>
  );
};

export default Menu;
