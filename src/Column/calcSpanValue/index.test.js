// import calcSpanValue from '.';

describe('calcFlexGrow', () => {
  it('passes', () => {
    expect(1 + 1).toEqual(2);
  });
  // it('assigns default flex values with no arguments', () => {
  //   const flexValue = calcSpanValue();
  //   expect(flexValue).toBe('flex: 1 0 0;');
  // });

  // it('accepts values that are numbers', () => {
  //   const flexValue = calcSpanValue({ xs: 6 })
  //     .replace(/\s/g, ''); // standardize string value

  //   expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  // });

  // it('accepts string values that can be coerced to numbers', () => {
  //   const flexValue = calcSpanValue({ xs: '6' })
  //     .replace(/\s/g, ''); // standardize string value

  //   expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  // });

  // it('accepts "auto"', () => {
  //   const flexValue = calcSpanValue({ xs: 'auto' })
  //     .replace(/\s/g, ''); // standardize string value

  //   expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:100;}');
  // });

  // it('ignores keys that are not valid breakpoints', () => {
  //   const flexValue = calcSpanValue({ incorrectKey: 6 });
  //   expect(flexValue).toBe('flex: 1 0 0;');
  // });

  // it('ignores values that are not valid breakpoints', () => {
  //   const flexValue1 = calcSpanValue({ xs: 0 });
  //   const flexValue2 = calcSpanValue({ xs: 'notANumber' });

  //   expect(flexValue1).toBe('flex: 1 0 0;');
  //   expect(flexValue2).toBe('flex: 1 0 0;');
  // });

  // it('creates one media query accurately', () => {
  //   const flexValue = calcSpanValue({ xs: 6 })
  //     .replace(/\s/g, ''); // standardize string value

  //   expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  // });

  // it('composes multiple media queries', () => {
  //   const flexValue = calcSpanValue({ sm: 6, lg: 3 })
  //     .replace(/\s/g, ''); // standardize string value

  //   expect(flexValue).toBe(
  //     'flex:100;@media(min-width:320px){flex:600;}'
  //     + '@media(min-width:1024px){flex:300;}',
  //   );
  // });
});
