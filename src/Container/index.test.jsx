import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Container from '.';

describe('Container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot when passed zero props', () => {
    const tree = renderer
      .create(<Container />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when passed the "fluid" prop', () => {
    const tree = renderer
      .create(<Container fluid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
