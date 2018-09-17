import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Row = ({ children, className, ...props }) => {
  const RowDiv = styled('div')`
    box-sizing: border-box;
    position: relative;

  `;

  return (
    <RowDiv className={className} {...props}>
      {children}
    </RowDiv>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: '',
};

export default Row;
