import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LabelValueCell } from '../LabelValueCell';

Enzyme.configure({ adapter: new Adapter() });

describe('LabelValueCell', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <LabelValueCell />,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have label as a child', () => {
    const Wrapper = shallow(
      <LabelValueCell />,
    );
    expect(Wrapper.find('label')).toHaveLength(1);
  });
});
