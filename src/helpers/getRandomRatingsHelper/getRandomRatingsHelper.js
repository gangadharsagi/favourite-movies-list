import { RATING } from '../../constants/RATING';

/**
 * This helper is used to generate the rating values randomly
 */
export const getRandomRatingsHelper = () =>
  Math.round((RATING.MIN + Math.random() * (RATING.MAX - RATING.MIN)));
