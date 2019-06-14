import { GET_MOVIE_DETAILS } from '../../constants/CONSTANTS';

/**
 * This reducer will trigger if api action is started and is used to show the
 * loader
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - getReviews action
 * @returns {*} the next Redux state
 */
export const apiStartReducer = (state, payload) => {
  if (payload === GET_MOVIE_DETAILS) {
    return {
      ...state,
      isFetchingData: true
    };
  }

  return state;
};
