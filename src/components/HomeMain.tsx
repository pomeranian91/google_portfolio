import React from 'react';
import styled from 'styled-components';
import HomeTitle from './HomeTitle';

const Home = styled.div``;
const MainContainer = styled.div`
  ${({ theme }) => theme.flexMinin('column', 'center', 'center')}
  margin-top:80px;
`;
const SearchInput = styled.div`
  position: relative;
  width: 541px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 35px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 600;
  font-family: Roboto;
  @media screen and (max-width: 768px) {
    width: 441px;
  }
  &::before {
    content: '안녕하세요 Front-End 개발자되기 위해 노력하는 조용우 입니다.';
    position: absolute;
    top: 3px;
    left: 20px;
    width: 531px;
    height: 13px;
    color: black;
    overflow: hidden;
    border-right: 1px solid black;
    animation: typing 4s steps(31) alternate infinite;
  }

  @keyframes typing {
    0% {
      width: 0%;
    }

    100% {
      width: 78%;
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
        <HomeTitle />
        <SearchInputOuter>
          <SearchInput />
        </SearchInputOuter>
      </MainContainer>
    </Home>
  );
};
export default HomeMain;
