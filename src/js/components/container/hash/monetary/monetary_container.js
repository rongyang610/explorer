import { connect } from 'react-redux';
import Monetary from '../../../presentational/hash/monetary/monetary';
import { withRouter } from 'react-router-dom';

const msp = ({ entities: {tx} }) => {
  return {
      input: tx.inputs,
      output: tx.out,
      size: tx.size
  };
};

export default withRouter(connect(msp, null)(Monetary));