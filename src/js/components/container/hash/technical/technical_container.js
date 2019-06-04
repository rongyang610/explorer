import { connect } from 'react-redux';
import Technical from '../../../presentational/hash/technical/technical';
import { withRouter } from 'react-router-dom';

const msp = ({ entities: {tx} }, ownProps) => {
  return {
      hash: ownProps.match.params.hash,
      tx: tx,
  };
};

export default withRouter(connect(msp, null)(Technical));