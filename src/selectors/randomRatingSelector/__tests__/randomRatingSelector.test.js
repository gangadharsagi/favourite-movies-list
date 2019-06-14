import { getRandomRating, randomRatingSelector } from '../randomRatingSelector';

describe('getRandomRating', () => {
  it('should select data from the store state', () => {
    const mockState = {
      randomRating: true,
    };
    const expected = getRandomRating(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
    };
    const expected = getRandomRating(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});

describe('randomRatingSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      randomRating: true,
    };
    const expected = randomRatingSelector(mockState);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
    };
    const expected = randomRatingSelector(mockState);
    const result = false;
    expect(expected).toEqual(result);
  });
});
