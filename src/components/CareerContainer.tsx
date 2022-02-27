import React, { useState } from 'react';
import styled from 'styled-components';

interface CareerContent {
  date: string;
  title: string;
  content1: string;
  content2: string;
  content3: string;
}
const CareerContainer = () => {
  const [careerContent, setCareerContent] = useState<CareerContent[]>([
    {
      date: '2021년 9월 27일 ~ 현재',
      title: '📕 인터넷 강의 & 독학',
      content1: '✅ 노마드코더라는 학습 사이트를 통해 처음 코딩에 입문했습니다.',
      content2: '✅ 21년 12월 본업 계약기간 만료 후 본격적으로 공부를 시작했습니다.',
      content3: '',
    },
    {
      date: '22년 1월 24일~22년 3월 3일',
      title: '📔 원티드 X 위코드 프리온보딩 코스',
      content1: '✅ React 사전과제 통과 후 참여한 코스 입니다.',
      content2: '✅ React, Typescript, Next.js 등을 배웠습니다.',
      content3: '✅ 협업을 체험하고 매주 2개의 작업물을 만들었습니다.',
    },
  ]);
  return (
    <Container>
      {careerContent.map((text: CareerContent) => {
        return (
          <CareerLayout>
            <CareerTitle>{text.title}</CareerTitle>
            <CareerDate>{text.date}</CareerDate>
            <CareerContent>{text.content1}</CareerContent>
            <CareerContent>{text.content2}</CareerContent>
            <CareerContent>{text.content3}</CareerContent>
          </CareerLayout>
        );
      })}
    </Container>
  );
};
export default CareerContainer;

const Container = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')}
  margin:30px 50px;
  padding: 30px 50px;
  @media screen and (max-width: 1024px) {
    margin: 30px 30px;
    padding: 30px 30px;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 10px;
    padding: 20px 10px;
  }
`;

const CareerLayout = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')}
  margin-bottom: 25px;
  border-bottom: 2px solid #f7f7f7;
`;
const CareerDate = styled.div`
  padding-bottom: 10px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Nanum Gothic Coding', monospace;
`;
const CareerTitle = styled.div`
  padding-bottom: 10px;
  color: ${(props) => props.theme.color.googleBlue};
  border-bottom: 2px solid #f7f7f7;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Black Han Sans', sans-serif;
`;
const CareerContent = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 2;
`;
