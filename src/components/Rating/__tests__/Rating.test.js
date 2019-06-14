import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Rating } from '../Rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating', () => {
  it('should render component', () => {
    const mockProps = {
      starCount: ['0','1'],
    };
    const Wrapper = shallow(
      <Rating {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
