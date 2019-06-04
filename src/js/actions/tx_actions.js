import * as BTCAPIUtil from '../utils/tx_api_utils';

export const RECEIVE_TX = 'RECEIVE_TX';

const receieveTx = tx => {
  return {
    type: RECEIVE_TX,
    tx
  };
};

export const getTx = hash => dispatch => {
  return (
    BTCAPIUtil.fetchTx(hash)
    .then( (tx) => {
      return dispatch(receieveTx(tx));
    })
  );
};