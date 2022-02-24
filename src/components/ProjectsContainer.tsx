import React from 'react';
import styled from 'styled-components';
import profile from '../../src/image/img-profile.jpg';

const Container = styled.div`
  ${(props) => props.theme.flexMinin('row', 'space-between', '')}
  margin:30px 50px;
  padding: 30px 50px;
`;
const HeadLineText = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.color.googleGreen};
  font-size: 42px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
  text-shadow: 2px 2px 3px ${(props) => props.theme.color.googleYellow};
`;
const TextContainer = styled.div`
  ${(props) => props.theme.flexMinin('column', '', '')}
  max-width:1200px;
  margin-right: 80px;
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
`;
const TextContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  font-family: Arial, 'Malgun Gothic', Gulim, sans-serif;
`;
const ProjectsContainer = () => {
  return <Container></Container>;
};
export default ProjectsContainer;
