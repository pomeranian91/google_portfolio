import React, { useState } from 'react';
import styled from 'styled-components';
import velogImg from '../../src/image/img-velog.jpg';
import gitHubImg from '../../src/image/img-github.png';
import faceImg from '../../src/image/img-myface.jpg';

const Contacts = () => {
  const [viewNumber, setViewNumber] = useState<boolean>(true);
  const viewContacts = () => {
    setViewNumber(!viewNumber);
  };
  const velogOpen = () => {
    window.open('https://velog.io/@pomeranian91');
  };
  const gitHubOpen = () => {
    window.open('https://github.com/pomeranian91');
  };
  return (
    <Container>
      <MyContacts viewNumber={viewNumber}>010-9128-6689 | forking91@gmail.com</MyContacts>
      <IconBox onClick={() => velogOpen()}>
        <img src={velogImg} style={{ width: '32px' }} />
      </IconBox>
      <IconBox onClick={() => gitHubOpen()}>
        <img src={gitHubImg} style={{ width: '32px' }} />
      </IconBox>
      <IconBox onClick={() => viewContacts()}>
        <img src={faceImg} style={{ width: '32px' }} />
      </IconBox>
    </Container>
  );
};
export default Contacts;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin('row', '', 'center')}
`;
const IconBox = styled.div`
  width: 32px;
  height: 32px;
  margin: 12px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  & :hover {
    opacity: 0.8;
  }
`;
const MyContacts = styled.div<{ viewNumber: boolean }>`
  display: ${(props) => (props.viewNumber ? 'none' : 'block')};
  font-size: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
`;
