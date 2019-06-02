import * as BTCAPIUtil from '../utils/btc_api_utils';

export const RECEIVE_BTC_ADDRESS_INFO = 'RECEIVE_BTC_ADDRESS_INFO';
export const RECEIVE_BTC_ADDRESS_ERROR = 'RECEIVE_BTC_ADDRESS_ERROR';

const receiveBTCAddressInfo = info => {
  return {
    type: RECEIVE_BTC_ADDRESS_INFO,
    info
  };
};

const receiveBTCAddressError = errors => {
  return {
    type: RECEIVE_BTC_ADDRESS_ERROR,
    errors
  };
};

export const getBTCAddressInfo = address => dispatch => {
  return (
    BTCAPIUtil.fetchBTCAddressDetail(address)
    .then( (info) => {
      return dispatch(receiveBTCAddressInfo(info));
    }).catch(error => dispatch(receiveBTCAddressError(error.responseJSON)))
  );
};