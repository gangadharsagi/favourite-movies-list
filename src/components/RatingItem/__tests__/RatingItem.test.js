import * as React from 'react';
import { RatingItem } from '../RatingItem';
// import { mount } from 'enzyme';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('RatingItem', () => {
  it('should render component', () => {
    const MountedRatingItem = mount(
      <RatingItem />,
    );
    const expected = MountedRatingItem.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
