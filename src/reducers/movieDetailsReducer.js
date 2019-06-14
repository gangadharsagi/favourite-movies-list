import { INITIAL_STATE } from '../constants/INITIAL_STATE';
import {
  API_END,
  API_START,
  UPDATE_MOVIE_DETAILS, UPDATE_RANDOM_RATING, UPDATE_RATING,
} from '../constants/CONSTANTS';
import { apiStartReducer } from './apiStartReducer';
import { apiEndReducer } from './apiEndReducer';
import { updateMovieDetailsReducer } from './updateMovieDetailsReducer';
import { updateRatingReducer } from './updateRatingReducer';
import { updateRandomRatingReducer } from './updateRandomRatingReducer';

const reducers = {
  [API_START]: apiStartReducer,
  [API_END]: apiEndReducer,
  [UPDATE_MOVIE_DETAILS]: updateMovieDetailsReducer,
  [UPDATE_RATING]: updateRatingReducer,
  [UPDATE_RANDOM_RATING]: updateRandomRatingReducer,
};

/**
 * This reducer is handling the movie details reviews component all reducers
 *
 * @param {Object} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} action - the action dispatched with type and payload props.
 * @returns {*} the next Redux state
 */
export const movieDetailsReducer = (
  state = INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  const reducer = reducers[type];

  return (reducer) ?
    reducer(state, payload) :
    state;
};
