import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

export const Main = styled.main`
  flex: auto;
  min-width: 0;
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
  border: 1px solid ${COLOR_PALETTE.GRAY100};
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

interface SelectedType {
  selected: Boolean
}

export const TodoDiv = styled.div<SelectedType>`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${COLOR_PALETTE.GRAY500};
  padding: 0 10px;
  margin: 0 15px;
  background: ${(props) => props.selected ? COLOR_PALETTE.PINK100 : ''};

  &:hover {
    background: ${(props) => props.selected ? COLOR_PALETTE.PINK100 : COLOR_PALETTE.BG_OFF_WHITE};
    cursor: pointer;
  }
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;

  box-sizing: border-box;
  height: 100%;
  margin-left: 15px;

  overflow: hidden;
`;

export const TodoContent = styled.div`
  padding: '2px 0';
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
`