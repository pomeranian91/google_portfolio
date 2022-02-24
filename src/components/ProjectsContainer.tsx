import React, { useState } from 'react';
import styled from 'styled-components';
import projectportfolio from '../../src/image/img-portfolio.png';
import projectdnc from '../../src/image/img-dnc.png';

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
  font-size: 24px;
  font-weight: 600;
  font-family: Roboto, 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
  text-shadow: 2px 2px 3px ${(props) => props.theme.color.googleGray};
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
  font-size: 18px;
  font-family: Roboto, 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const ButtonBox = styled.div``;
const ButtonGit = styled.button`
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

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
      title: '포트폴리오 사이트',
      site: '',
      git: 'https://github.com/pomeranian91/google_portfolio',
      skills1: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      skills2:
        'https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white',
      skills3:
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      skills4:
        'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
      skills5: '',
      detail1: '✅저의 포트폴리오 사이트 입니다.',
      detail2: '',
    },
    {
      id: 1,
      img: projectdnc,
      title: '니콘내콘 웹앱',
      site: 'https://github.com/pomeranian91/15_06th_doubleNC',
      git: 'https://github.com/pomeranian91/15_06th_doubleNC',
      skills1: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      skills2: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
      skills3:
        'https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white',
      skills4:
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      skills5:
        'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
      detail1: '✅포트폴리오용 웹앱 입니다.',
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
