import * as TXAPIUtil from '../utils/tx_api_utils';

export const RECEIVE_TX = 'RECEIVE_TX';

const receieveTx = tx => {
  return {
    type: RECEIVE_TX,
    tx
  };
};

export const getTx = hash => dispatch => {
  return (
    TXAPIUtil.fetchTx(hash)
    .then( (tx) => {
      return dispatch(receieveTx(tx));
    })
  );
};