import get from 'lodash/get';

/**
 * This helper is used to return updated data. If payload movieName is equal to
 * item payload then it will replace the item with payload else it will return
 * the item
 *
 * @param {*} state - redux state
 * @param {Object} payload -  selected card
 * @returns {*} - updated data.
 */
export const getUpdatedDataHelper = (state, payload) => (
  state.data.map(item => {
    if (get(item, 'movieName', '') === get(payload, 'item.movieName', '')) {
      return {
        ...item,
        rating: get(payload, 'value', 0)
      }
    }
    return item;
  })
);
