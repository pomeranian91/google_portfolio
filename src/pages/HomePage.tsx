import React from 'react';
import Catagories from '../components/Cartagories';
import Footer from '../components/Footer';
import HomeMain from '../components/HomeMain';
import NavigationBar from '../templates/NavigationBar';
import styled from 'styled-components';

const Container = styled.div``;

const HomePage = () => {
  return (
    <Container>
      <NavigationBar />
      <HomeMain />
      <Catagories />
      <Footer />
    </Container>
  );
};
export default HomePage;
