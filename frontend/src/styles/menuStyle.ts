import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

export const MenuWrap = styled.div`
  min-width: 300px;
  border-right: 1px solid ${COLOR_PALETTE.GRAY100};
  background: ${COLOR_PALETTE.GRAY50};
`;

export const HamburgerDiv = styled.div`
  display: flex;
  align-items: center;

  height: 90px;
  padding: 15px;
`;

export const Nav = styled.nav``;

export const NavItemDiv = styled.div<{ menu: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  background: ${props => props.menu && COLOR_PALETTE.BG_OFF_WHITE};

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