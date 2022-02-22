import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  font-size: 12px;
  color: #000;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <Container>
      <div>©2022.CHOYONGWOO All rights reserved.</div>
    </Container>
  );
};
export default Footer;
