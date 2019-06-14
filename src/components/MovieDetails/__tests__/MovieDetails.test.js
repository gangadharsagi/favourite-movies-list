import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MovieDetails } from '../MovieDetails';
import { CardsContainer } from '../../../containers/CardsContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('MovieDetails', () => {
  const mockProps = {
    getMovieDetails: () => {},
  };
  it('should render component', () => {
    const Wrapper = shallow(
      <MovieDetails {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have CardsContainer as a child', () => {
    const Wrapper = shallow(
      <MovieDetails {...mockProps}/>,
    );
    expect(Wrapper.find(CardsContainer)).toHaveLength(1);
  });
});
