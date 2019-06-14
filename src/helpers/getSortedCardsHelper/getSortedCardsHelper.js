import orderBy from 'lodash/orderBy'

/**
 * This helper is used to sort he cards by using rating value
 *
 * @param {array} cards - cards data from the store
 * @returns {array} - returns the sorted cards.
 */
export const getSortedCardsHelper = (cards) =>
  orderBy(cards, ['rating'], ['asc']);
