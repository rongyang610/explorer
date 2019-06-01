import * as BTCAPIUtil from '../utils/btc_api_utils';

export const RECEIVE_BTC_ADDRESS_INFO = 'RECEIVE_BTC_ADDRESS_INFO';

const receiveBTCAddressInfo = info => {
  return {
    type: RECEIVE_BTC_ADDRESS_INFO,
    info
  };
};

export const getBTCAddressInfo = address => dispatch => {
  return (
    BTCAPIUtil.fetchBTCAddressDetail(address)
    .then( (info) => {
      return dispatch(receiveBTCAddressInfo(info));
    })
  );
};