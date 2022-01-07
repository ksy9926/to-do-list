import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

const Aside = styled.aside`
  min-width: 300px;
  background: ${COLOR_PALETTE.GRAY50};
`;

const DetailDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 15px;
  background: #fff;
`;

const Deadline = styled.div`
  margin-left: 15px;
`;

const Delete = styled.div`
  margin-left: 15px;
`;

const Detail = () => {
  return (
    <Aside>
      <DetailDiv>
        <CheckCircleIcon style={{ marginRight: '10px' }} />
        타입스크립트 공부하기
        <FullStarIcon />
      </DetailDiv>
      <DetailDiv>생성날짜: 1월 3일 월</DetailDiv>
      <DetailDiv>
        <CalendarIcon />
        <Deadline>1월 20일, 목까지</Deadline>
      </DetailDiv>
      <DetailDiv>
        <ul>
          <li>타입스크립트 복습</li>
          <li>타입스크립트 활용</li>
          <li>타입스크립트 프로젝트</li>
        </ul>
      </DetailDiv>
      <DetailDiv>
        <DeleteIcon />
        <Delete>삭제하기</Delete>
      </DetailDiv>
    </Aside>
  );
};

export default Detail;
