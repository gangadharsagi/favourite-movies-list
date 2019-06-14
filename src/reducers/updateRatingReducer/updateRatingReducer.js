/**
 * A small description explaining where this function is used and why
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - the payload of the action this reducer is attached to
 * @returns {*} the next Redux state
 */
import { getUpdatedDataHelper } from '../../helpers/getUpdatedDataHelper';

export const updateRatingReducer = (state, payload) => {
  return {
    ...state,
    data: getUpdatedDataHelper(state, payload),
  };
};
