import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import calcFlexValue from './calcFlexValue';
import { allowedValues } from './utils';

const Column = ({ children, className, xs, sm, md, lg, xl, ...props }) => {
  const ColumnDiv = styled('div')`
    box-sizing: border-box;
    position: relative;
    ${calcFlexValue({ xs, sm, md, lg, xl })}
  `;

  return (
    <ColumnDiv className={className} {...props}>
      {children}
    </ColumnDiv>
  );
}

const columnSizePropType = PropTypes.oneOf(allowedValues);

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  xs: columnSizePropType,
  sm: columnSizePropType,
  md: columnSizePropType,
  lg: columnSizePropType,
  xl: columnSizePropType,
};

Column.defaultProps = {
  children: null,
  className: null,
  style: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export default Column;
