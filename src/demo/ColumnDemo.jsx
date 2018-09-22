import React from 'react';
import styled from 'react-emotion';
import Column from '../Column';

const ColumnDemo = () => {
  const ColumnDemoDiv = styled(Column)`
    width: 100%;
    height: 50px;
    border: 2px solid darkslateblue;
    background-color: skyblue;
  `;

  return (
    <ColumnDemoDiv />
  );
}

export default ColumnDemo;
