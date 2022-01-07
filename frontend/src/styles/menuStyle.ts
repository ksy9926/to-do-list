import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

export const MenuWrap = styled.div`
  min-width: 300px;

  background: ${COLOR_PALETTE.GRAY50};
`;

export const HamburgerDiv = styled.div`
  display: flex;
  align-items: center;

  height: 90px;
  padding: 15px;
`;

export const Nav = styled.nav``;

export const NavItemDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE}
  }
`;

export const NavTitleSpan = styled.span`
  flex: 5;
  margin-left: 15px;
`;

export const NavCountSpan = styled.span`
  flex: 1;
  text-align: right;
`;