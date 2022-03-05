import React, { useState } from 'react';
import styled from 'styled-components';
import javascript from '../../src/image/icon-js.png';
import typescript from '../../src/image/icon-ts.png';
import css from '../../src/image/icon-css.png';
import html from '../../src/image/icon-html.png';
import react from '../../src/image/icon-react.png';
import redux from '../../src/image/icon-redux.png';

interface Skills {
  id: number;
  img: string;
  text: string;
  detail1: string;
  detail2: string;
  detail3: string;
}

const SkillsContainer: React.FC = () => {
  const [skillsContent, setSkillsContent] = useState<Skills[]>([
    {
      id: 0,
      img: html,
      text: 'HTML',
      detail1: '✔ div와 p, span태그의 차이점을 알고 알맞게 사용합니다',
      detail2: '✔ 검색 최적화를 위해 시멘틱 마크업을 준수합니다.',
      detail3: '',
    },
    {
      id: 1,
      img: css,
      text: 'CSS',
      detail1: '✔ Scss와 Styled-component를 상황에 맞게 사용 할 줄 압니다. ',
      detail2: '✔ 미디어 쿼리를 이용한 반응형 디자인을 할 수 있습니다.',
      detail3: '✔ BEM에 대해 알고 있으며 사용 할 수 있습니다.',
    },
    {
      id: 2,
      img: javascript,
      text: 'Javascript',
      detail1: '✔ vanilla Javascript와 jQuery를 다룰 줄 압니다. ',
      detail2: '✔ this, arrow function 등 ES6 신문법을 사용 할 수 있습니다.',
      detail3: '',
    },
    {
      id: 3,
      img: typescript,
      text: 'Typescript',
      detail1: '✔ typescript의 필요성을 알고 있습니다.',
      detail2: '✔ 6개의 프로젝트에서 타입스크립트를 사용한 경험이 있습니다.',
      detail3: '',
    },
    {
      id: 4,
      img: react,
      text: 'React',
      detail1: '✔ React 라이프사이클에 대한 이해로 조건부 렌더링을 통해 오류를 해결 할 수 있습니다.',
      detail2: '✔ 함수 형 컴포넌트를 주로 사용합니다.',
      detail3: '✔ Redux, Router 의 사용이 가능합니다.',
    },
    {
      id: 5,
      img: redux,
      text: 'Redux',
      detail1: '✔ Redux를 이용하여 전역상태관리를 할 수 있습니다.',
      detail2: '',
      detail3: '',
    },
  ]);
  const [clickNumber, setClickNumber] = useState<number>(0);
  const [currentSkills, setCurrentSkills] = useState<boolean>(false);

  return (
    <Container>
      <HeadLineText>클릭해주세요🔻</HeadLineText>
      <CardContainer>
        {skillsContent.map((skills: Skills) => {
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
        {skillsContent.map((skills: Skills) => {
          return (
            <div>
              {currentSkills ? (
                <div>
                  {skills.id == clickNumber ? (
                    <SkillsPop>
                      <img src={skills.img} style={{ width: '200px' }} />
                      <SkillsDeatil>{skills.detail1}</SkillsDeatil>
                      <SkillsDeatil>{skills.detail2}</SkillsDeatil>
                      <SkillsDeatil>{skills.detail3}</SkillsDeatil>
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

const Container = styled.div`
  ${(props) => props.theme.flexMinin('column', 'space-between', '')}
  width: 100%;
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
  flex-wrap: wrap;
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
  font-family: 'Noto Sans KR', sans-serif;
`;
const SkillsDeatil = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
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
  font-family: 'Noto Sans KR', sans-serif;
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
