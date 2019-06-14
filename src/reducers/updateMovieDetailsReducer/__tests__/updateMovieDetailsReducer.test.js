import { updateMovieDetailsReducer } from '../updateMovieDetailsReducer';

describe('updateReviewReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      data: [
        {
          movieName: 'Avengers Endgame',
          rating: 10
        },
        {
          movieName: 'Captain Marvel',
          rating: 9
        },
      ]
    };
    const mockPayload = {
        movieName: 'Captain Marvel',
        rating: 9
    };
    const expected = updateMovieDetailsReducer(mockState, mockPayload);
    const result =  {
      data:
        {
          movieName: 'Captain Marvel',
          rating: 9
        }
    };
    expect(expected).toEqual(result);
  });
});
