import { apiStartReducer } from '../apiStartReducer';

describe('apiStartReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {};
    const mockPayload = 'GET_MOVIE_DETAILS';
    const expected = apiStartReducer(mockState, mockPayload);
    const result = { isFetchingData: true };
    expect(expected).toEqual(result);
  });
});
