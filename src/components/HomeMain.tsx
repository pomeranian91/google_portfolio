import React from 'react';
import styled from 'styled-components';

const Home = styled.div``;
const MainContainer = styled.div`
  ${({ theme }) => theme.flexMinin('column', 'center', 'center')}
  margin-top:80px;
`;
const MainTitle = styled.div`
  margin: 30px;
  font-size: 80px;
  font-weight: 700;
  font-family: 'Segoe UI', Arial, 'Malgun Gothic', Gulim, sans-serif;
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
const SearchInput = styled.div`
  width: 541px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 35px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    @media screen and (max-width:768px){
      width: 441px;
    }
}
`;
const SearchInputOuter = styled.div`
width: 561px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 25px;
box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;
    @media screen and (max-width:768px){
      width: 461px;
    }
}`;

const HomeMain = () => {
  return (
    <Home>
      <MainContainer>
        <MainTitle>
          <span>Y</span>
          <span>o</span>
          <span>n</span>
          <span>g</span>
          <span>W</span>
          <span>o</span>
          <span>o</span>
        </MainTitle>
        <SearchInputOuter>
          <SearchInput>안녕하세요 Front-End 개발자 조용우 입니다.</SearchInput>
        </SearchInputOuter>
      </MainContainer>
    </Home>
  );
};
export default HomeMain;
