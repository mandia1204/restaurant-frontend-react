import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Home from './Home';
import '../../../setupTest';

test('Home', (t) => {
  t.test('--should render a div', (a) => {
    const wrapper = shallow(<Home />);
    const el = wrapper.find('div');

    a.equal(el.length, 1);
    a.end();
  });

  t.end();
});
