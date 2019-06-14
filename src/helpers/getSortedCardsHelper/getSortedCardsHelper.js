import orderBy from 'lodash/orderBy'

/**
 * A small description explaining where this function is used and why
 */
export const getSortedCardsHelper = (cards) =>
  orderBy(cards, ['rating'], ['asc']);
