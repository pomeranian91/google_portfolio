import React from 'react';
import styled from 'styled-components';

const CatagoriesContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'center', 'center')}
`;
const CatagoriesBox = styled.div`
  margin: 20px;
  cursor: pointer;
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
  font-family: Arial, 'Malgun Gothic', Gulim, sans-serif;
`;

const Catagories = () => {
  return (
    <CatagoriesContainer>
      <CatagoriesBox>
        <CatagoriesIcon>🧑</CatagoriesIcon>
        <CatagoriesText>I'm</CatagoriesText>
      </CatagoriesBox>
      <CatagoriesBox>
        <CatagoriesIcon>💻</CatagoriesIcon>
        <CatagoriesText>Skills</CatagoriesText>
      </CatagoriesBox>
      <CatagoriesBox>
        <CatagoriesIcon>📈</CatagoriesIcon>
        <CatagoriesText>Carrer</CatagoriesText>
      </CatagoriesBox>
      <CatagoriesBox>
        <CatagoriesIcon>📗</CatagoriesIcon>
        <CatagoriesText>Projects</CatagoriesText>
      </CatagoriesBox>
    </CatagoriesContainer>
  );
};
export default Catagories;
