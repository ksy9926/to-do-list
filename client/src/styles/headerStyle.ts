import COLOR_PALETTE from 'styles/colors';
import styled from 'styled-components';
import { CSSProperties } from 'react';

export const searchIconStyle: CSSProperties = {
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '20px',
  cursor: 'pointer',
};

// 아래처럼 CSSProperties 설정도 가능
// export const searchIconStyle = {
//   position: 'absolute',
//   ...
// } as React.CSSProperties;

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background: ${COLOR_PALETTE.PINK500};
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  margin: 10px;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 30px;
  width: 300px;
  padding-left: 50px;
  border: none;
  border-radius: 3px;
  background: ${COLOR_PALETTE.PINK200};

  &:hover {
    background: #fff;
  }
  &:focus {
    outline: none;
  }
`;
export const ProfileDiv = styled.div`
  font-weight: bold;
  color: #fff;
  margin: 10px;
  cursor: pointer;
`;