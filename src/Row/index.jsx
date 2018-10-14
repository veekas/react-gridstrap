import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Row = ({ children, className, ...props }) => {
  const childrenCount = Object.keys(React.Children).length;
  const columnsToRender = childrenCount >= 12 ? 12 : childrenCount;

  const RowDiv = styled('div')`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
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
  className: null,
};

export default Row;
