import get from 'lodash/get';

/**
 * A small description explaining where this function is used and why
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
