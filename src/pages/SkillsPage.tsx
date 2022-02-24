import React from 'react';
import styled from 'styled-components';
import SkillsContainer from '../components/SkillsContainer';
import NavigaionHomeIcon from '../templates/NavigaionHomeIcon';
import SubCatagories from '../templates/SubCartagories';

const NavLayout = styled.div``;

const SkillsPage = () => {
  return (
    <div>
      <NavLayout>
        <NavigaionHomeIcon />
        <SubCatagories />
        <SkillsContainer />
      </NavLayout>
    </div>
  );
};
export default SkillsPage;
