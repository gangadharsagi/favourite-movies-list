import { mapStateToProps } from '../CardsContainer';

describe('ReviewDetailsContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ['cards'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
