import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

export const MenuWrap = styled.div`
  width: 300px;

  background: ${COLOR_PALETTE.GRAY50};
`;

export const HamburgerDiv = styled.div`
  display: flex;
  align-items: center;

  height: 60px;
  padding: 15px;
`;

export const Nav = styled.nav``;

export const NavItemDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
`;

export const NavTitleSpan = styled.span`
  flex: 5;
  margin-left: 15px;
`;

export const NavCountSpan = styled.span`
  flex: 1;
  text-align: right;
`;