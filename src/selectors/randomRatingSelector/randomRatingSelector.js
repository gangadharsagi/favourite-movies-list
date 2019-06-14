import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the random rating value from the store.
 *
 * @param {{}} state - the redux state
 * @returns {*} randomRating value from the store.
 */
export const getRandomRating = state => get(
  state,
  'randomRating',
  false,
);

/**
 * This selector is used to memorize the random rating value from the store.
 */
export const randomRatingSelector = createSelector(
  getRandomRating,
  randomRating => randomRating,
);
