import Immutable from 'seamless-immutable';
import { updateRandomRatingReducer } from '../updateRandomRatingReducer';

describe('updateRandomRatingReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = updateRandomRatingReducer(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
