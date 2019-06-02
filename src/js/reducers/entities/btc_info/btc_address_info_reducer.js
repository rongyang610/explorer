import { RECEIVE_BTC_ADDRESS_INFO } from '../../../actions/btc_actions.js';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BTC_ADDRESS_INFO:
      return merge({}, action.info);
    default:
      return state;
  }
};