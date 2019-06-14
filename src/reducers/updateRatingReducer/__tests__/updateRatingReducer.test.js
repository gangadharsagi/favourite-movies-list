import { updateRatingReducer } from '../updateRatingReducer';

describe('updateRatingReducer', () => {
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
      item: {
        movieName: 'Captain Marvel',
        rating: 9
      },
      value: 10,
    };
    const expected = updateRatingReducer(mockState, mockPayload);
    const result = {
      data: [
        {
          movieName: 'Avengers Endgame',
          rating: 10,
        },
        {
          movieName: 'Captain Marvel',
          rating: 10,
        },
      ],
    };
    expect(expected).toEqual(result);
  });
});
