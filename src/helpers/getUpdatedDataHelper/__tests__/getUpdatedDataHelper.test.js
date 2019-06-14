import { getUpdatedDataHelper } from '../getUpdatedDataHelper';

describe('getUpdatedDataHelper', () => {
  it('should return updated data', () => {
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
    const expected = getUpdatedDataHelper(mockState, mockPayload);
    const result = [
      {
        movieName: 'Avengers Endgame',
        rating: 10
      },
      {
        movieName: 'Captain Marvel',
        rating: 10
      },
    ];
    expect(expected).toEqual(result);
  });

  it('should return default data', () => {
    const mockState = {
      data: []
    };
    const mockPayload = {};
    const expected = getUpdatedDataHelper(mockState, mockPayload);
    const result = [];
    expect(expected).toEqual(result);
  });
});
