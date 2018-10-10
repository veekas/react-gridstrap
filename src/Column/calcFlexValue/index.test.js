import calcFlexValue from '.';

describe('calcFlexGrow', () => {
  it('assigns default flex values with no arguments', () => {
    const flexValue = calcFlexValue();
    expect(flexValue).toBe('flex: 1 0 0;');
  });

  it('accepts values that are numbers', () => {
    const flexValue = calcFlexValue({ xs: 6 })
      .replace(/\s/g, ''); // standardize string value

    expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  });

  it('accepts string values that can be coerced to numbers', () => {
    const flexValue = calcFlexValue({ xs: '6' })
      .replace(/\s/g, ''); // standardize string value

    expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  });

  it('ignores keys that are not valid breakpoints', () => {
    const flexValue = calcFlexValue({ incorrectKey: 6 });
    expect(flexValue).toBe('flex: 1 0 0;');
  });

  it('ignores values that are not valid breakpoints', () => {
    const flexValue1 = calcFlexValue({ xs: 0 });
    const flexValue2 = calcFlexValue({ xs: 'notANumber' });

    expect(flexValue1).toBe('flex: 1 0 0;');
    expect(flexValue2).toBe('flex: 1 0 0;');
  });

  it('creates one media query accurately', () => {
    const flexValue = calcFlexValue({ xs: 6 })
      .replace(/\s/g, ''); // standardize string value

    expect(flexValue).toBe('flex:100;@media(min-width:0px){flex:600;}');
  });

  it('composes multiple media queries', () => {
    const flexValue = calcFlexValue({ sm: 6, lg: 3 })
      .replace(/\s/g, ''); // standardize string value

    expect(flexValue).toBe(
      'flex:100;@media(min-width:320px){flex:600;}'
      + '@media(min-width:1024px){flex:300;}',
    );
  });
});
