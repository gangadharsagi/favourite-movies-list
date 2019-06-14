import { updateMovieDetailsReducer } from '../updateMovieDetailsReducer';

describe('updateReviewReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      reviews: [],
      hasMore: false,
    };
    const mockPayload = {
      reviews:  {
        reviewId: 'R1SQ32067PGIK5',
        rating: 5,
        reviewCreated: 1517961600000,
        productImg: '61YqZpvCyaL',
      },
      hasMore: true,
    };
    const expected = updateMovieDetailsReducer(mockState, mockPayload);
    const result = {
      reviews:  [{
        reviewId: 'R1SQ32067PGIK5',
        rating: 5,
        reviewCreated: 1517961600000,
        productImg: '61YqZpvCyaL',
      }],
      hasMore: true,
    };
    expect(expected).toEqual(result);
  });
});
