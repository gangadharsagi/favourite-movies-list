import { updateMovieDetailsReducer } from '../updateMovieDetailsReducer';

describe('updateReviewReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      randomRating: false,
      data: []
    };
    const mockPayload = {
      movieName: 'abc',
      rating: 5,
    };
    const expected = updateMovieDetailsReducer(mockState, mockPayload);
    const result = {
      randomRating: false,
      data: {
          movieName: 'abc',
          rating: 5,
        }
    };
    expect(expected).toEqual(result);
  });
});
