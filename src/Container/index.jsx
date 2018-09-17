import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = ({ children, className, ...props }) => {
  const ContainerDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 25px / 25px;
  `;

  return (
    <ContainerDiv className={className} {...props}>
      {children}
    </ContainerDiv>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: '',
};

export default Container;
