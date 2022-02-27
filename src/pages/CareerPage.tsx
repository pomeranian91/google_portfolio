import React from 'react';
import styled from 'styled-components';
import CarrerContainer from '../components/CareerContainer';
import NavigaionHomeIcon from '../templates/NavigaionHomeIcon';
import SubCatagories from '../templates/SubCartagories';

const CarrerPage = () => {
  return (
    <div>
      <NavLayout>
        <NavigaionHomeIcon />
        <SubCatagories />
        <CarrerContainer />
      </NavLayout>
    </div>
  );
};
export default CarrerPage;

const NavLayout = styled.div``;
