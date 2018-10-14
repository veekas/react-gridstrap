import { allowedValues, breakpoints } from '../utils';

const calcSpanValue = (sizes) => {
  let mediaQueries = '';

  if (typeof sizes === 'object') {
    const sizesArray = Object.keys(sizes);

    sizesArray.forEach((size) => {
      if (
        Object.prototype.hasOwnProperty.call(breakpoints, size)
        && allowedValues.includes(`${sizes[size]}`)
      ) {
        const minWidthValue = breakpoints[size];
        const spanValue = sizes[size] === 'auto' ? '1' : sizes[size];

        mediaQueries += `
          @media (min-width: ${minWidthValue}px) {
            grid-column-end: span ${spanValue};
          }
        `;
      }
    });
  }

  return mediaQueries;
};

export default calcSpanValue;
