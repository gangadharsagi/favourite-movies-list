import React from 'react';
import { ReviewRating } from '../ReviewRating';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewRating', () => {
  it('should render component', () => {
    const mockProps = {
      onChange: jest.fn(),
      starCount: 5,
      item: {
        'rating': 5,
      },
    };
    const MountedReviewRating = shallow(
      <ReviewRating {...mockProps}/>,
    );
    const expected = MountedReviewRating.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
