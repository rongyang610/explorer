import { connect } from 'react-redux';
import HashTx from '../../presentational/hash/hash_tx';
import { getTx } from '../../../actions/tx_actions';
import { withRouter } from 'react-router-dom';

const msp = ({ entities: {tx} }, ownProps) => {
  debugger
  return {
      hash: ownProps.match.params.hash,
      tx: tx
  };
};

const mdp = dispatch => {
    return {
      getTx: hash => dispatch(getTx(hash)),
    };
};

export default withRouter(connect(msp, mdp)(HashTx));