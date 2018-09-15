import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'react-emotion';

const Container = ({ children, className, ...props }) => {
  // const Container = styled('div')`
  //   box-sizing: border-box;
  //   position: relative;
  //   display: grid;
  //   width: ${containerWidth};
  //   grid-template-columns: repeat(12, 1fr);
  //   grid-gap: 25px / 25px;
  // `;

  return (
    <div style={containerStyle} className={className} {...props}>
      {children}
    </div>
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
