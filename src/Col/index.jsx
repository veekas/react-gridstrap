import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Col = ({ children, className, xs, sm, md, lg, xl, ...props }) => {
  const ColDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
  `;

  return (
    <ColDiv className={className} {...props}>
      {children}
    </ColDiv>
  );
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

Col.defaultProps = {
  children: null,
  className: null,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Col;
