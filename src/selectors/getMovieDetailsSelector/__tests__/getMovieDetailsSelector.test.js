import { getMovieDetails, getMovieDetailsSelector } from '../getMovieDetailsSelector';

describe('getMovieDetails', () => {
  it('should select data from the store state', () => {
    const mockState = {
      data: [
        {
          movieName: 'Avengers Endgame',
          rating: 10,
        },
        {
          movieName: 'Captain Marvel',
          rating: 9,
        }
      ]
    };
    const expected = getMovieDetails(mockState);
    const result = [
      {
        movieName: 'Avengers Endgame',
        rating: 10,
      },
      {
        movieName: 'Captain Marvel',
        rating: 9,
      }
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getMovieDetails(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});

describe('getMovieDetailsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      data: [
        {
          movieName: 'Avengers Endgame',
          rating: 10,
        },
        {
          movieName: 'Captain Marvel',
          rating: 9,
        }
      ]
    };
    const expected = getMovieDetailsSelector(mockState);
    const result =[
      {
        movieName: 'Avengers Endgame',
        rating: 10,
      },
      {
        movieName: 'Captain Marvel',
        rating: 9,
      }
    ];
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = getMovieDetailsSelector(mockState);
    const result = [];
    expect(expected).toEqual(result);
  });
});
