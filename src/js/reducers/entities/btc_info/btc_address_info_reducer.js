import { 
  RECEIVE_BTC_ADDRESS_INFO,
  RECEIVE_MORE_BTC_ADDRESS_INFO
} from '../../../actions/btc_actions.js';
import { merge } from 'lodash';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BTC_ADDRESS_INFO:
      return merge({}, action.info);
    case RECEIVE_MORE_BTC_ADDRESS_INFO:
      let newState = merge({}, state, action.info);
      const stateTx = state.txs;
      const newInfoTx = action.info.txs;
      const newTxArr = stateTx.concat(newInfoTx);
      newState.txs = newTxArr;
      return newState;
    default:
      return state;
  }
};