import React from 'react';
import styled from 'styled-components';
import SubSearchInput from '../components/SubSearchInput';

const Container = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'center', 'center')}
  & :hover {
    opacity: 0.8;
  }
`;
const MainTitle = styled.div`
  margin: 30px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
  cursor: pointer;

  & :nth-child(1) {
    color: ${(props) => props.theme.color.googleBlue};
  }
  & :nth-child(2) {
    color: ${(props) => props.theme.color.googleRed};
  }
  & :nth-child(3) {
    color: ${(props) => props.theme.color.googleYellow};
  }
  & :nth-child(4) {
    color: ${(props) => props.theme.color.googleBlue};
  }
  & :nth-child(5) {
    color: ${(props) => props.theme.color.googleGreen};
  }
  & :nth-child(6) {
    color: ${(props) => props.theme.color.googleRed};
  }
  & :nth-child(7) {
    color: ${(props) => props.theme.color.googleBlue};
  }
`;

const SubTitle: React.FC = () => {
  return (
    <Container>
      <MainTitle>
        <span>Y</span>
        <span>o</span>
        <span>n</span>
        <span>g</span>
        <span>W</span>
        <span>o</span>
        <span>o</span>
      </MainTitle>
      <SubSearchInput />
    </Container>
  );
};
export default SubTitle;
