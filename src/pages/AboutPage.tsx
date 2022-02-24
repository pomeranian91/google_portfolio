import React from 'react';
import styled from 'styled-components';
import AboutContainer from '../components/AboutContainer';
import NavigaionHomeIcon from '../templates/NavigaionHomeIcon';
import SubCatagories from '../templates/SubCartagories';

const NavLayout = styled.div``;

const AboutPage = () => {
  return (
    <div>
      <NavLayout>
        <NavigaionHomeIcon />
        <SubCatagories />
        <AboutContainer />
      </NavLayout>
    </div>
  );
};
export default AboutPage;
