import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Col = ({ children, className, ...props }) => {
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
};

Col.defaultProps = {
  children: null,
  className: '',
};

export default Col;
