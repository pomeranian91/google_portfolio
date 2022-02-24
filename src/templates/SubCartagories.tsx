import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const CatagoriesContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'flex-start', 'center')}
  margin:20px;
  margin-top: 0px;
  border-bottom: 1px solid #5f6368;
`;
const CatagoriesBox = styled.div`
  padding: 20px;
  cursor: pointer;
  color: #5f6368;
  font-size: 20px;
  font-weight: 700;
  font-family: Arial, 'Malgun Gothic', Gulim, sans-serif;
  &:hover {
    color: ${(props) => props.theme.color.googleBlue};
    border-bottom: 2px solid ${(props) => props.theme.color.googleBlue};
  }
  &.about {
    color: ${(props) => props.theme.color.googleBlue};
    border-bottom: 2px solid ${(props) => props.theme.color.googleBlue};
  }
  &.skills {
    color: ${(props) => props.theme.color.googleBlue};
    border-bottom: 2px solid ${(props) => props.theme.color.googleBlue};
  }
  &.carrer {
    color: ${(props) => props.theme.color.googleBlue};
    border-bottom: 2px solid ${(props) => props.theme.color.googleBlue};
  }
  &.projects {
    color: ${(props) => props.theme.color.googleBlue};
    border-bottom: 2px solid ${(props) => props.theme.color.googleBlue};
  }
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

const SubCatagories = () => {
  const location = useLocation();

  return (
    <CatagoriesContainer>
      <StyledLink to="/about">
        <CatagoriesBox className={location.pathname == '/about' ? 'about' : ''}>🧑 About</CatagoriesBox>
      </StyledLink>
      <StyledLink to="/skills">
        <CatagoriesBox className={location.pathname == '/skills' ? 'skills' : ''}>💻 Skills</CatagoriesBox>
      </StyledLink>
      <StyledLink to="/carrer">
        <CatagoriesBox className={location.pathname == '/carrer' ? 'carrer' : ''}>📈 Carrer</CatagoriesBox>
      </StyledLink>
      <StyledLink to="/projects">
        <CatagoriesBox className={location.pathname == '/projects' ? 'projects' : ''}>📗 Projects</CatagoriesBox>
      </StyledLink>
    </CatagoriesContainer>
  );
};
export default SubCatagories;
