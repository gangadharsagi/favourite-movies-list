
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RandomRatingButton } from '../RandomRatingButton';

Enzyme.configure({ adapter: new Adapter() });

describe('RandomRatingButton', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <RandomRatingButton />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
