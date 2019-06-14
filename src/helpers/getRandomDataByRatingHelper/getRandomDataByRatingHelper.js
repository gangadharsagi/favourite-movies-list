import { getRandomRatingsHelper } from '../getRandomRatingsHelper';

/**
 * This helper is used to generate the data randomly if randomRating is true
 * else it will return the normal data.
 *
 * @param {*} state - redux state as a param
 * @param {array} payload - selected payload.
 * @returns {*} - updated data
 */
export const getRandomDataByRatingHelper = (state, payload) =>
  state.randomRating ?
    payload.map(item => ({
      ...item,
      rating: getRandomRatingsHelper(),
    })) :
    payload;
