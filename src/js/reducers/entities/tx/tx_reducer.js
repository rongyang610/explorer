import { RECEIVE_TX } from '../../../actions/tx_actions.js';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TX:
      return merge({}, action.tx);
    default:
      return state;
  }
};