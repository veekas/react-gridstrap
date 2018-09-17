import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Row from './';

describe('Row', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Row />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Row />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
