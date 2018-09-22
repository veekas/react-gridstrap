import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = ({ children, className, fluid, fluidColumns, ...props }) => {
  const gridTemplateColumns = (
    fluidColumns
      ? `repeat(auto-fill, minmax(${fluidColumns}, 1fr))`
      : 'repeat(12, 1fr)'
  );

  const ContainerDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: grid;
    width: ${fluid ? '100%' : 'auto'};
    grid-template-columns: ${gridTemplateColumns};
    grid-gap: 0;
  `;
  // const containerStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  //   gridGap: '16px 20px',
  //   marginBottom: '20px',
  // };

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
  fluidColumns: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: null,
  fluid: false,
  fluidColumns: null,
};

export default Container;
