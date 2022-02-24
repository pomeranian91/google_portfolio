import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../../src/image/img-profile.jpg';

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
  font-size: 42px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
  text-shadow: 2px 2px 3px ${(props) => props.theme.color.googleYellow};
  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
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
  color: ${(props) => props.theme.color.googleRed};
  font-size: 24px;
  font-weight: 600;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
  text-shadow: 2px 2px 3px ${(props) => props.theme.color.googleGray};
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
  font-family: Arial, 'Malgun Gothic', Gulim, sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
interface Text {
  title: string;
  content: string;
}
const AboutContainer: React.FC = () => {
  const [text, setText] = useState<Text[]>([
    {
      title: '💻게임하듯 개발을 즐깁니다!',
      content:
        '컴퓨터 앞에 앉아 하루를 보내고 웹개발을 하는 것이 게임을 하는 것 처럼 즐겁습니다. 새로운 스킬들을 배우고 활용하여 스스로 세운 목표를 완수하고 스스로의 발전이 느껴지는 것이 재밌고 보람찹니다. 더 많은 기술들을 배우고 기초를 탄탄히하여 이후 다양한 목표를 세우고 해결하기 위해 공부 중 입니다.',
    },
    {
      title: '🤼‍♂️커뮤니케이션 능력이 뛰어납니다!',
      content:
        '웹 개발은 혼자하는 것이 아닌 다양한 분야의 많은 사람들이 모여 완성됩니다. 그러기에 사람들간의 소통은 정말 중요합니다. 저의 생각을 말하는 것과 다른 사람의 말을 듣는 것, 수용하는 것 평소의 성격과 이전 사회생활을 통해 잘 할 수 있습니다.',
    },
    {
      title: '🏰회사 비즈니스에 도움이 되기 위해 고민 합니다!',
      content:
        ' 웹 개발에서 중요한 것중 하나는 사용자의 편의성이라 생각합니다. 그리고 사용자의 편의성이 높을수록 회사 비즈니스에 도움이 될 수 있을 것이라 생각하며 이를 위해 클린하며 재사용에 용이한, 반응이 빠른 코드를 짜기 위해 노력합니다.',
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
