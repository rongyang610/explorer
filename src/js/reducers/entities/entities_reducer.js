import { combineReducers } from 'redux';
import btcAddressInfo from './btc_info/btc_address_info_reducer';

const entitiesReducer = combineReducers ({
  btcAddressInfo,
});

export default entitiesReducer;