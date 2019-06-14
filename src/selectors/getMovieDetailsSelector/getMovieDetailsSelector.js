import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * This selector is used to get the movie details
 *
 * @param {{}} state - the redux state
 * @returns {array} all reviews
 */
export const getMovieDetails = state => get(
  state,
  'data',
  [],
);

/**
 * This selector is used to memorize movie details
 */
export const getMovieDetailsSelector = createSelector(
  getMovieDetails,
  movieDetails => movieDetails,
);
