import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Catagories = () => {
  return (
    <CatagoriesContainer>
      <StyledLink to="/about">
        <CatagoriesBox>
          <CatagoriesIcon>🧑</CatagoriesIcon>
          <CatagoriesText>I'm</CatagoriesText>
        </CatagoriesBox>
      </StyledLink>
      <StyledLink to="/skills">
        <CatagoriesBox>
          <CatagoriesIcon>💻</CatagoriesIcon>
          <CatagoriesText>Skills</CatagoriesText>
        </CatagoriesBox>
      </StyledLink>
      <StyledLink to="/carrer">
        <CatagoriesBox>
          <CatagoriesIcon>📈</CatagoriesIcon>
          <CatagoriesText>Carrer</CatagoriesText>
        </CatagoriesBox>
      </StyledLink>
      <StyledLink to="/projects">
        <CatagoriesBox>
          <CatagoriesIcon>📗</CatagoriesIcon>
          <CatagoriesText>Projects</CatagoriesText>
        </CatagoriesBox>
      </StyledLink>
    </CatagoriesContainer>
  );
};
export default Catagories;

const CatagoriesContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'center', 'center')}
`;
const CatagoriesBox = styled.div`
  ${({ theme }) => theme.flexMinin('column', 'center', 'center')}
  width: 120px;
  height: 120px;
  margin: 20px 10px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
`;
const CatagoriesIcon = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'center', 'center')}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 26px;
  background: #fff;
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;
const CatagoriesText = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
`;
const StyledLink = styled(Link)`
  color: black;
  textdecoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;
