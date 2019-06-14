import { getRandomRatingsHelper } from '../getRandomRatingsHelper';

describe('getRandomRatingsHelper', () => {
  it('should ', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 5;
    global.Math = mockMath;
    const expected = getRandomRatingsHelper();
    const result = 50;
    expect(expected).toEqual(result);
  });
});
