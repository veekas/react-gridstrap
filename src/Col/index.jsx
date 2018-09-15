import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
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
