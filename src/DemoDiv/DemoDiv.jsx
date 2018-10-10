import React from 'react';
import styled from 'react-emotion';

const DemoDiv = ({ demoText }) => {
  const DemoDiv = styled('div')`
    // make simple blue box
    height: 50px;
    box-sizing: border-box;
    border: 1px solid darkslateblue;
    background-color: skyblue;
    color: darkslateblue;

    // center text in box
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <DemoDiv>{demoText}</DemoDiv>;
}

export default DemoDiv;
