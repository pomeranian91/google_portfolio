import React, { useState } from 'react';
import styled from 'styled-components';
import projectportfolio from '../../src/image/img-portfolio.png';
import projectdnc from '../../src/image/img-dnc.png';
import projectwanted from '../../src/image/img-wanted.png';

interface Projects {
  id: number;
  img: string;
  title: string;
  site: string;
  git: string;
  skills1: string;
  skills2: string;
  skills3: string;
  skills4: string;
  skills5: string;
  detail1: string;
  detail2: string;
}
const ProjectsContainer = () => {
  const [projectsContent, setProjectsContent] = useState<Projects[]>([
    {
      id: 0,
      img: projectportfolio,
      title: 'React를 이용한 포트폴리오 사이트 입니다.',
      site: 'https://condescending-ritchie-dfc6dc.netlify.app',
      git: 'https://github.com/pomeranian91/google_portfolio',
      skills1: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      skills2:
        'https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white',
      skills3:
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      skills4:
        'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
      skills5: '',
      detail1:
        '✅ 컴포넌트의 재사용을 고려하여 컴포넌트를 작은 단위로 나눈 후 template과 page에 붙여넣는 방식으로 제작했습니다.',
      detail2: '✅ 내용 변경 및 수정에 용이하도록 내용은 state값에 저장한 후 map 메서드로 나열했습니다.',
    },
    {
      id: 1,
      img: projectdnc,
      title: 'Next.js를 이용한 기프티콘 스토어',
      site: 'https://github.com/pomeranian91/15_06th_doubleNC',
      git: 'https://github.com/pomeranian91/15_06th_doubleNC',
      skills1: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      skills2: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
      skills3:
        'https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white',
      skills4:
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      skills5: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
      detail1:
        '✅ 홈화면과 브랜드페이지, 상품리스트, 상품상세, 왼쪽 메뉴를 눌러 나타나는 고객 센터 페이지를 구성했습니다.',
      detail2: '✅ FAQ 부분에선 질문 클릭 시 상황에 맞는 데이터를 호출 하도록 했습니다.',
    },
    {
      id: 2,
      img: projectwanted,
      title: 'React 를 이용한 원티드 클론 코딩',
      site: 'https://pomeranian91.github.io/wanted_pre_onboarding/',
      git: 'https://github.com/pomeranian91/wanted_pre_onboarding',
      skills1: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      skills2:
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      skills3: '',
      skills4: '',
      skills5: '',
      detail1: '✅ 원티드 채용사이트의 일부를 클론 코딩한 프로젝트 입니다.',
      detail2: '',
    },
  ]);

  return (
    <Container>
      {projectsContent.map((project: Projects) => {
        return (
          <ProjectsLayout>
            <ProjectsImg>
              <img
                onClick={() => {
                  window.open(`${project.git}`);
                }}
                src={project.img}
                style={{ width: '360px', height: '200px' }}
              />
            </ProjectsImg>
            <ProjectsText>
              <ProjectsTitle>{project.title}</ProjectsTitle>
              <ProjectsSkills>
                <ProjectsSkillsbox>
                  <img src={project.skills1} />
                </ProjectsSkillsbox>
                <ProjectsSkillsbox>
                  <img src={project.skills2} />
                </ProjectsSkillsbox>
                <ProjectsSkillsbox>
                  <img src={project.skills3} />
                </ProjectsSkillsbox>
                <ProjectsSkillsbox>
                  <img src={project.skills4} />
                </ProjectsSkillsbox>
                <ProjectsSkillsbox>
                  <img src={project.skills5} />
                </ProjectsSkillsbox>
              </ProjectsSkills>
              <ProjectsDetail>{project.detail1}</ProjectsDetail>
              <ProjectsDetail>{project.detail2}</ProjectsDetail>
              <ButtonBox>
                <ButtonGit
                  onClick={() => {
                    window.open(`${project.site}`);
                  }}
                >
                  배포 사이트 보기
                </ButtonGit>
                <ButtonGit
                  onClick={() => {
                    window.open(`${project.git}`);
                  }}
                >
                  깃허브 리드미에서 상세내용 보기
                </ButtonGit>
              </ButtonBox>
            </ProjectsText>
          </ProjectsLayout>
        );
      })}
    </Container>
  );
};
export default ProjectsContainer;

const Container = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')}

  margin: 30px 50px;
  padding: 30px 50px;
  @media screen and (max-width: 1300px) {
    margin: 30px 30px;
    padding: 30px 30px;
  }
  @media screen and (max-width: 768px) {
    margin: 30px 10px;
    padding: 30px 10px;
  }
`;
const ProjectsLayout = styled.div`
  ${(props) => props.theme.flexMinin('row', '', '')};
  margin-bottom: 40px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const ProjectsSkills = styled.div`
  ${(props) => props.theme.flexMinin('row', '', '')};
  flex-wrap: wrap;
`;
const ProjectsImg = styled.div`
  border: 1px solid #f7f7f7;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const ProjectsTitle = styled.div`
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Nanum Pen Script', cursive;
`;
const ProjectsText = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')};
  margin: 20px;
`;
const ProjectsSkillsbox = styled.div`
  margin: 2px;
`;
const ProjectsDetail = styled.div`
  margin: 10px 0;
  font-size: 24px;
  font-family: 'Nanum Pen Script', cursive;
`;
const ButtonBox = styled.div``;
const ButtonGit = styled.button`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  &:hover {
    background: black;
    color: white;
  }
`;
