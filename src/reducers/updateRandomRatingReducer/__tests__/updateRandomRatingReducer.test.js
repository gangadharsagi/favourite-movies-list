import { updateRandomRatingReducer } from '../updateRandomRatingReducer';

describe('updateRandomRatingReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      randomRating: false,
    };
    const expected = updateRandomRatingReducer(mockState);
    const result = {
      randomRating: true,
    };
    expect(expected).toEqual(result);
  });
});
