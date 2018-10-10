import { allowedValues, breakpoints } from '../utils';

const calcFlexValue = (sizes) => {
  let mediaQueries = 'flex: 1 0 0;';

  if (typeof sizes === 'object') {
    const sizesArray = Object.keys(sizes);

    sizesArray.forEach((size) => {
      if (
        Object.prototype.hasOwnProperty.call(breakpoints, size)
        && allowedValues.includes(`${sizes[size]}`)
      ) {
        const minWidthValue = breakpoints[size];
        const growValue = sizes[size];

        mediaQueries += `
          @media (min-width: ${minWidthValue}px) {
            flex: ${growValue} 0 0;
          }
        `;
      }
    });
  }

  return mediaQueries;
};

export default calcFlexValue;
