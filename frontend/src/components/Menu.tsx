import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
import { ReactComponent as LightIcon } from 'assets/icons/light.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';
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

const Menu = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.menu);

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
        <NavItemDiv>
          <LightIcon />
          <NavTitleSpan>오늘 할 일</NavTitleSpan>
          <NavCountSpan>2</NavCountSpan>
        </NavItemDiv>
        <NavItemDiv>
          <EmptyStarIcon />
          <NavTitleSpan>중요</NavTitleSpan>
          <NavCountSpan>2</NavCountSpan>
        </NavItemDiv>
        <NavItemDiv>
          <CalendarIcon />
          <NavTitleSpan>계획된 일정</NavTitleSpan>
          <NavCountSpan>2</NavCountSpan>
        </NavItemDiv>
      </Nav>
    </MenuWrap>
  );
};

export default Menu;
