/**
 * This reducer will update the randomRating value in toggle way
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @returns {*} the next Redux state
 */
export const updateRandomRatingReducer = (state) => {
  return {
    ...state,
    randomRating: !state.randomRating,
  }
};
