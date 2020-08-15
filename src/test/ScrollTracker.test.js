import React from 'react';
import { shallow } from 'enzyme';

import ScrollTracker from './ScrollTracker';

describe('main test', () => {
  it('should render', () => {
    shallow(<ScrollTracker />);
  });
});
