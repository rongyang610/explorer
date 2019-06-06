import { RECEIVE_BLOCK_COUNT } from '../../../actions/btc_actions.js';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_COUNT:
      return merge({}, action.block);
    default:
      return state;
  }
};