import React from 'react';
import Contacts from '../components/Contacts';
import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <Container>
      <Contacts />
    </Container>
  );
};
export default NavigationBar;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'flex-end', 'center')}
`;
