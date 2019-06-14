import { mapStateToProps, mapDispatchToProps } from '../MovieDetailsContainer';

describe('MovieDetailsContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['movieDetails'];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['getMovieDetails'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
