import { getSortedCardsHelper } from '../getSortedCardsHelper';

describe('getSortedCardsHelper', () => {
  it('should return sorted cards', () => {
    const mockData = [
      {
        movieName: 'abc',
        rating: 5,
      },
      {
        movieName: 'bca',
        rating: 4,
      }
    ];
    const expected = getSortedCardsHelper(mockData);
    const result = [
      {
        movieName: 'bca',
        rating: 4,
      },
      {
        movieName: 'abc',
        rating: 5,
      }
    ];
    expect(expected).toEqual(result);
  });

  it('should return default data', () => {
    const mockData = [];
    const expected = getSortedCardsHelper(mockData);
    const result = [];
    expect(expected).toEqual(result);
  });
});
