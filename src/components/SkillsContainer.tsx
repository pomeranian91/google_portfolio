import React, { useState } from 'react';
import styled from 'styled-components';
import javascript from '../../src/image/icon-js.png';
import typescript from '../../src/image/icon-ts.png';
import css from '../../src/image/icon-css.png';
import html from '../../src/image/icon-html.png';
import react from '../../src/image/icon-react.png';

const Container = styled.div`
  ${(props) => props.theme.flexMinin('column', 'space-between', '')}
  width:100%;
  height: 100%;
`;
const HeadLineText = styled.div`
  margin: 5px 30px;
  color: ${(props) => props.theme.color.googleGray};
  font-size: 18px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const CardContainer = styled.div`
  ${(props) => props.theme.flexMinin('row', '', '')}
  margin: 5px 30px;
  max-width: 1200px;
`;

const SkillsPop = styled.div`
  ${(props) => props.theme.flexMinin('column', '', 'center')}
  padding: 20px;
`;
const SkillsText = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const SkillsDeatil = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const SkillsPopContainer = styled.div`
  margin: 15px auto;
  background-color: ${(props) => props.theme.color.googleGray};
  width: 50%;
  height: 100%;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  font-family: Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const SkillsCard = styled.div`
  ${(props) => props.theme.flexMinin('column', 'center', 'center')};
  height: 200px;
  margin: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    transform: scale(1.2);
  }
`;

interface Skills {
  id: number;
  img: string;
  text: string;
  detail: string;
}

const SkillsContainer: React.FC = () => {
  const [skillsContent, setSkillsContent] = useState<Skills[]>([
    { id: 0, img: html, text: 'HTML', detail: 'Semantic Markup을 알고 중요시 합니다.' },
    {
      id: 1,
      img: css,
      text: 'CSS',
      detail: 'Scss와 Styled-component를 사용 할 줄 압니다. 다양한 애니메이션을 좋아합니다.',
    },
    {
      id: 2,
      img: javascript,
      text: 'Javascript',
      detail: 'vanilla Javascript와 jQuery를 다룰 줄 압니다. ES6 신문법을 활용 할 줄 압니다.',
    },
    {
      id: 3,
      img: typescript,
      text: 'Typescript',
      detail: '기존 javascript의 문제점을 알고 typescript의 필요성을 알고 있습니다.',
    },
    {
      id: 4,
      img: react,
      text: 'React',
      detail: '가장 많이 사용하는 라이브러리 입니다. 최적화와 컴포넌트 재사용을 고려합니다.',
    },
  ]);
  const [clickNumber, setClickNumber] = useState<number>(-1);
  const [currentSkills, setCurrentSkills] = useState<boolean>(false);
  console.log(clickNumber);

  return (
    <Container>
      <HeadLineText>클릭해주세요🔻</HeadLineText>
      <CardContainer>
        {skillsContent.map((skills: any) => {
          return (
            <SkillsCard
              onClick={() => {
                setClickNumber(skills.id);
                if (skills.id == clickNumber) {
                  setCurrentSkills(!currentSkills);
                } else {
                  setCurrentSkills(true);
                }
              }}
            >
              <img src={skills.img} style={{ width: '120px' }} />
              <SkillsText>{skills.text}</SkillsText>
            </SkillsCard>
          );
        })}
      </CardContainer>

      <SkillsPopContainer>
        {skillsContent.map((skills: any) => {
          return (
            <div>
              {currentSkills ? (
                <div>
                  {skills.id == clickNumber ? (
                    <SkillsPop>
                      <img src={skills.img} style={{ width: '300px' }} />
                      <SkillsDeatil>{skills.detail}</SkillsDeatil>
                    </SkillsPop>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </SkillsPopContainer>
    </Container>
  );
};
export default SkillsContainer;
