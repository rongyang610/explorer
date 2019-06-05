import { connect } from 'react-redux';
import TX from '../../../presentational/hash/tx/tx';
import { withRouter } from 'react-router-dom';

const msp = ({ entities: {tx} }, ownProps) => {
  return {
      hash: ownProps.match.params.hash,
      input: tx.inputs,
      output: tx.out
  };
};

export default withRouter(connect(msp, null)(TX));