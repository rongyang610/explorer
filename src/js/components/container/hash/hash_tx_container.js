import { connect } from 'react-redux';
import NavBar from '../../presentational/nav/nav_bar';
import { 
  getBTCAddressInfo,
  getMoreBTCAddressInfo
} from '../../../actions/btc_actions';
import { withRouter } from 'react-router-dom';

const mdp = dispatch => {
    return {
      getBTCAddressInfo: (address) => dispatch(getBTCAddressInfo(address)),
      getMoreBTCAddressInfo: (address, offset) => dispatch(getMoreBTCAddressInfo(address, offset))
    };
};

export default withRouter(connect(null, mdp)(NavBar));