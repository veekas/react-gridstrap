import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Column from '.';

describe('Column', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Column />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('matches snapshot when passed zero props', () => {
  //   const tree = renderer
  //     .create(<Column />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
