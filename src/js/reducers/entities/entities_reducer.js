import { combineReducers } from 'redux';
import btcAddressInfo from './btc_info/btc_address_info_reducer';
import btcBlockCount from './btc_block_count/btc_block_count_reducer';
import tx from './tx/tx_reducer';

const entitiesReducer = combineReducers ({
  btcAddressInfo,
  btcBlockCount,
  tx
});

export default entitiesReducer;