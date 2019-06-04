import { combineReducers } from 'redux';
import btcAddressInfo from './btc_info/btc_address_info_reducer';
import tx from './tx/tx_reducer';

const entitiesReducer = combineReducers ({
  btcAddressInfo,
  tx
});

export default entitiesReducer;