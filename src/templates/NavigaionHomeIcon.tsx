import React from 'react';
import Contacts from '../components/Contacts';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubTitle from '../components/SubTitle';

const NavigaionHomeIcon = () => {
  return (
    <Container>
      <StyledLink to="/">
        <SubTitle />
      </StyledLink>
      <Contacts />
    </Container>
  );
};
export default NavigaionHomeIcon;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between', 'center')}
`;
const StyledLink = styled(Link)`
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
