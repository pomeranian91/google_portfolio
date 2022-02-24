import React from 'react';
import styled from 'styled-components';
import NavigaionHomeIcon from '../templates/NavigaionHomeIcon';
import SubCatagories from '../templates/SubCartagories';

const NavLayout = styled.div``;

const ProjectsPage = () => {
  return (
    <div>
      <NavLayout>
        <NavigaionHomeIcon />
        <SubCatagories />
      </NavLayout>
    </div>
  );
};
export default ProjectsPage;
