import { mapDispatchToProps } from '../ReviewRatingContainer';

describe('ReviewRatingContainer', () => {
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['onChange'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
