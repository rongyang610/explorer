import { RECEIVE_BLOCK_COUNT } from '../../../actions/btc_actions.js';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_COUNT:
      return action.block;
    default:
      return state;
  }
};