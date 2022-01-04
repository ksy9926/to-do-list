import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';

const Aside = styled.aside`
  width: 300px;
  background: ${COLOR_PALETTE.GRAY50};
`;

const DetailDiv = styled.div`
  margin: 15px;
  padding: 15px;
  background: #fff;
`;

const Detail = () => {
  return (
    <Aside>
      <DetailDiv>타입스크립트 공부하기</DetailDiv>
      <DetailDiv>생성날짜: 1월 3일 월</DetailDiv>
      <DetailDiv>1월 20일, 목까지</DetailDiv>
      <DetailDiv>
        <ul>
          <li>타입스크립트 복습</li>
          <li>타입스크립트 활용</li>
          <li>타입스크립트 프로젝트</li>
        </ul>
      </DetailDiv>
      <DetailDiv></DetailDiv>
    </Aside>
  );
};

export default Detail;
