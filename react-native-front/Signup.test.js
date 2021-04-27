import React from 'react';
import renderer from 'react-test-renderer';

import Signup from './src/pages/Signup';

describe('<Signup />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Signup />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});