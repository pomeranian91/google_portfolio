import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../../src/image/img-profile.jpg';

interface Text {
  title: string;
  content: string;
}
const AboutContainer: React.FC = () => {
  const [text, setText] = useState<Text[]>([
    {
      title: '✏ 꾸준히하며 엉덩이가 무거운 개발자',
      content:
        '저는 배움과 도전을 멈추지 않습니다. 제가 부족한 부분과 자신 있는 부분을 명확히 나눌 줄 알고 부족한 것을 학습하기 위해 해야 할 일을 알고 있습니다.학습한 내용들은 항상 블로그에 정리하여 기억하도록 행동하며 모르는 것을 제 기술로 만드는 그때까지 의자에서 엉덩이를 떼지 않는 엉덩이가 무거운 개발자입니다.',
    },
    {
      title: '📢 팀원과의 소통을 중요시 여기는 개발자',
      content:
        '2개월간 팀 프로젝트를 통해서 팀원들과 소통을 어떻게 해야 하는지 배웠습니다.팀원들과 좋은 분위기 속에서 프로젝트를 진행하려 노력하고 좋은 소통을 바탕으로 업무를 진행하면 좋은 결과가 나온다는 것을 깨달았습니다. 소통은 업무적으로도 중요한 요소이며 이에 대해 다양한 경험으로 좋은 커뮤니케이션을 이룰 수 있습니다.',
    },
    {
      title: '🏰회사에 돈을 벌어 줄 수 있는 개발자',
      content:
        ' 개발에서 중요한 것 중 하나는 사용자의 편의성이라 생각합니다. 사용자의 편의성이 높을 수록 회사 비즈니스에 도움이 될 것이라 생각하며 이런 편의성을 높이는 방법으로는 웹의 반응속도가 중요하다 생각합니다. 반응속도 개선을 위해 아직 정확히 어떤 코드를 어떤식으로 구성할지는 사실 알지 못합니다. 이런 반응성 개선을 위해 실제로 업무를 접하고 체험하며 발전시키고 싶습니다. 또한 검색엔진 최적화(SEO)의 향상을 위해서도 HTML Semantic Elements를 준수하거나 img태그의 alt를 적절히 입력하는 등의 노력을 하겠습니다.',
    },
  ]);
  return (
    <Container>
      <TextContainer>
        <HeadLineText>안녕하세요! 저는</HeadLineText>
        {text.map((text) => {
          return (
            <TextBox>
              <TextTitle>{text.title}</TextTitle>
              <TextContent>{text.content}</TextContent>
            </TextBox>
          );
        })}
      </TextContainer>
      <ImgContainer>
        <img src={profile} />
      </ImgContainer>
    </Container>
  );
};
export default AboutContainer;

const Container = styled.div`
  ${(props) => props.theme.flexMinin('row', 'space-between', '')}
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
const HeadLineText = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.color.googleGreen};
  font-size: 46px;
  font-weight: 700;

  font-family: 'Nanum Pen Script', cursive;

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
const TextContainer = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')}
  max-width:1200px;
  margin-right: 80px;
  @media screen and (max-width: 1204px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;
const TextBox = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 15px;
  border-bottom: 2px solid gray;
  border-right: 2px solid gray;
  box-shadow: -2px -2px 5px #fff, 4px 4px 8px #babecc;
`;
const ImgContainer = styled.div`
  display: block;
  max-width: 400px;
  @media screen and (max-width: 1204px) {
    display: none;
  }
`;
const TextTitle = styled.div`
  margin-bottom: 15px;
  color: ${(props) => props.theme.color.googleBlue};
  font-size: 24px;
  font-weight: 600;
  font-family: 'Black Han Sans', sans-serif;
  font-family: 'Nanum Gothic Coding', monospace;
  font-family: 'Nanum Pen Script', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const TextContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  font-family: 'Noto Sans KR', sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
