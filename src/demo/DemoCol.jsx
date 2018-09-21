import React from 'react';
import styled from 'react-emotion';
import Col from '../Col';

const DemoCol = () => {
  const DemoColDiv = styled(Col)`
    width: 100%;
    height: 50px;
    border: 2px solid darkslateblue;
    background-color: skyblue;
  `;

  return (
    <DemoColDiv />
  );
}

export default DemoCol;
