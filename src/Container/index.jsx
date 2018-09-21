import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = ({ children, className, fluid, ...props }) => {
  const ContainerDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: grid;
    width: ${fluid ? '100%' : 'auto'};
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0;
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
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  className: null,
  fluid: false,
};

export default Container;
