import { getRandomDataByRatingHelper } from '../getRandomDataByRatingHelper';

describe('getRandomDataByRatingHelper', () => {
  it('should ', () => {
    const mockState = {
      randomRating: false,
      data: []
    };
    const mockPayload = {
      movieName: 'abc',
      rating: 5,
    };
    const expected = getRandomDataByRatingHelper(mockState, mockPayload);
    const result =  {
      movieName: 'abc',
      rating: 5
    };
    expect(expected).toEqual(result);
  });
});
