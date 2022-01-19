import COLOR_PALETTE from 'styles/colors';
import styled from 'styled-components';

export const Aside = styled.aside`
  min-width: 300px;
  border-left: 1px solid ${COLOR_PALETTE.GRAY100};
  background: ${COLOR_PALETTE.GRAY50};
`;

export const DetailTitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 15px;
  border: 1px solid ${COLOR_PALETTE.GRAY100};
  background: #fff;
`;

export const DetailDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 15px;
  border: 1px solid ${COLOR_PALETTE.GRAY100};
  background: #fff;

  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
`;

export const DetailTitleInput = styled.input`
  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE}
  }
`

export const DetailTextArea = styled.textarea`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
  font-size: 0.95rem;
  padding: 15px;
  resize: none;
  overflow: hidden;

  &:hover {
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
  &:focus {
    outline: none;
    background: ${COLOR_PALETTE.BG_OFF_WHITE};
  }
`;

export const Deadline = styled.div`
  margin-left: 15px;
`;

export const Delete = styled.div`
  margin-left: 15px;
`;