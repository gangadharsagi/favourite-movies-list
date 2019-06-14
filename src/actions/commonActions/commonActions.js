import {
  UPDATE_MOVIE_DETAILS,
  GET_MOVIE_DETAILS,
  UPDATE_RATING,
  UPDATE_RANDOM_RATING,
} from '../../constants/CONSTANTS';
import { CONFIG } from '../../constants/CONFIG';
import { apiActionHelper } from '../../helpers/apiActionHelper';
import { randomRatingSelector } from '../../selectors/randomRatingSelector';

/**
 * This action is used to update the movie details data in the store
 *
 * @param {array} payload - reviews coming from the api response
 * @returns {{reviews: array, type: UPDATE_MOVIE_DETAILS}}
 */
export const updateMovieDetails = payload => ({
  type: UPDATE_MOVIE_DETAILS,
  payload,
});

/**
 * This action is used to update the rating of the movie
 *
 * @param {array} payload - reviews coming from the api response
 * @returns {{reviews: array, type: UPDATE_RATING}}
 */
export const updateRating = payload => ({
  type: UPDATE_RATING,
  payload,
});

/**
 * This action is used to update the rating rating randomly
 *
 * @returns {{reviews: array, type: UPDATE_RATING}}
 */
let timer = 0;
export const updateRandomRating = () => (dispatch, getState) => {
  dispatch({ type: UPDATE_RANDOM_RATING });
  const randomRating = randomRatingSelector(getState());
  if (randomRating) {
    timer = setInterval(() => dispatch(fetchMovieDetails()), 1000);
  } else
  clearInterval(timer);
};

/**
 * This action is used to fetch movie details by using api call
 *
 * @returns {{payload: number, type: string}}
 */
export const fetchMovieDetails = () => (
  apiActionHelper({
    url: `${CONFIG.URL}`,
    onSuccess: updateMovieDetails,
    onFailure: console.log('Error occur loading items'),
    label: GET_MOVIE_DETAILS,
  })
);

