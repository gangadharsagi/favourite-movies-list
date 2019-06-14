import { RATING } from '../../constants/RATING';

/**
 * A small description explaining where this function is used and why
 */
export const getRandomRatingsHelper = () =>
  (RATING.MIN + Math.random() * (RATING.MAX - RATING.MIN)).toFixed(1);
