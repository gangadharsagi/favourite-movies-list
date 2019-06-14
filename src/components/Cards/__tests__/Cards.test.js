import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Cards } from '../Cards';
import { LabelValueCell } from '../../LabelValueCell';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewDetails', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <Cards />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have LabelValueCell as a child', () => {
    const mockProps = {
      cards: [
        [
          {
          }
        ],
      ],
    };
    const Wrapper = shallow(
      <Cards {...mockProps}/>,
    );
    expect(Wrapper.find(LabelValueCell)).toHaveLength(1);
  });
});
