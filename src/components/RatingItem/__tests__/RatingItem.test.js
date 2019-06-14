import React from 'react';
import { RatingItem } from '../RatingItem';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('RatingItem', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <RatingItem />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
