import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.div`
  position: relative;
  width: 370px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 35px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 600;
  font-family: Roboto;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &::before {
    content: '안녕하세요 Front-End 개발자되기 위해 노력하는 조용우 입니다.';
    position: absolute;
    top: 6px;
    left: 20px;
    width: 371px;
    height: 12px;
    color: black;
    overflow: hidden;
    animation: changecolor 12s steps(31) infinite;
  }

  @keyframes changecolor {
    0% {
      color: ${(props) => props.theme.color.googleBlue};
    }
    20% {
      color: ${(props) => props.theme.color.googleRed};
    }
    40% {
      color: ${(props) => props.theme.color.googleYellow};
    }
    60% {
      color: ${(props) => props.theme.color.googleGreen};
    }
    80% {
      color: ${(props) => props.theme.color.googleGray};
    }
    100% {
      color: ${(props) => props.theme.color.googleBlue};
    }
  }
`;
const SearchInputOuter = styled.div`
width: 391px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 25px;
box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;
    @media screen and (max-width:768px){
      display: none;
    }
}`;

const SubSearchInput = () => {
  return (
    <SearchInputOuter>
      <SearchInput />
    </SearchInputOuter>
  );
};
export default SubSearchInput;
