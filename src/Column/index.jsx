import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Column = ({ children, className, xs, sm, md, lg, xl, ...props }) => {
  const ColumnDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
  `;

  return (
    <ColumnDiv className={className} {...props}>
      {children}
    </ColumnDiv>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

Column.defaultProps = {
  children: null,
  className: null,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Column;
