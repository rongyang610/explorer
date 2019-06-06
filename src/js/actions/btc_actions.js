import * as BTCAPIUtil from '../utils/btc_api_utils';

export const RECEIVE_BTC_ADDRESS_INFO = 'RECEIVE_BTC_ADDRESS_INFO';
export const RECEIVE_MORE_BTC_ADDRESS_INFO = 'RECEIVE_MORE_BTC_ADDRESS_INFO';
export const RECEIVE_BLOCK_COUNT = 'RECEIVE_BLOCK_COUNT';
// export const RECEIVE_BTC_ADDRESS_ERROR = 'RECEIVE_BTC_ADDRESS_ERROR';

const receiveBTCAddressInfo = info => {
  return {
    type: RECEIVE_BTC_ADDRESS_INFO,
    info
  };
};

const receiveMoreBTCAddressInfo = info => {
  return {
    type: RECEIVE_MORE_BTC_ADDRESS_INFO,
    info
  };
};

const receiveMoreBTCAddressInfo = block => {
  return {
    type: RECEIVE_BLOCK_COUNT,
    block
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

export const getMoreBTCAddressInfo = (address, offset) => dispatch => {
  return (
    BTCAPIUtil.fetchMoreBTCAddressDetail(address, offset)
    .then( (info) => {
      return dispatch(receiveMoreBTCAddressInfo(info));
    })
  );
};

export const getBlockCount = () => dispatch => {
  return (
    BTCAPIUtil.fetchBTCBlockCount()
    .then( (block) => {
      return dispatch(receiveBlockCount(block));
    })
  );
};