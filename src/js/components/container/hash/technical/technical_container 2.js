import { connect } from 'react-redux';
import Technical from '../../../presentational/hash/technical/technical';
import { withRouter } from 'react-router-dom';

const msp = ({ entities: {tx} }) => {
  return {
      blockHeight: tx.block_height,
      unixTime: tx.time,
      size: tx.size
  };
};

export default withRouter(connect(msp, null)(Technical));