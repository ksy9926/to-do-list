import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

export const Main = styled.main`
  flex: auto;
`;

export const TitleWrap = styled.div`
  padding: 30px 30px 10px;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.4rem;
`;

export const Today = styled.div``;

export const AddDiv = styled.div<{ flag: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.flag ? 'column' : 'row')};
  align-items: center;

  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  margin: 0 10px;

  background: ${COLOR_PALETTE.GRAY50};
`;

export const AddInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-bottom: 1px solid ${COLOR_PALETTE.PINK500};
`;

export const TextDiv = styled.div`
  margin-left: 15px;
  line-height: 30px;
`;

export const TodoDiv = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${COLOR_PALETTE.GRAY500};
  margin: 0 15px;
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;

  box-sizing: border-box;
  height: 100%;
  margin-left: 15px;
`;