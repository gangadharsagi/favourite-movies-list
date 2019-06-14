import { getRandomDataByRatingHelper } from '../../helpers/getRandomDataByRatingHelper';

/**
 * This reducer is used to update the movie details from the api response.
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {Object} payload - api response from the service
 * @returns {*} the next Redux state
 */
export const updateMovieDetailsReducer = (state, payload) => {
return {
  ...state,
  data: getRandomDataByRatingHelper(state, payload),
}};
