import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Col from '.';

describe('Col', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Col />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Col />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
