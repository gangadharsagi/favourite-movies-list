import { getUpdatedDataHelper } from '../../helpers/getUpdatedDataHelper';

/**
 * This reducer is used to update the movie details in the store.
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - movie details
 * @returns {*} the next Redux state
 */
export const updateRatingReducer = (state, payload) => {
  return {
    ...state,
    data: getUpdatedDataHelper(state, payload),
  };
};
