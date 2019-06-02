import { connect } from 'react-redux';
import HomePage from '../../presentational/home_page/home_page';
import { 
  getBTCAddressInfo,
  getMoreBTCAddressInfo
} from '../../../actions/btc_actions';

const mdp = dispatch => {
    return {
      getBTCAddressInfo: (address) => dispatch(getBTCAddressInfo(address)),
      getMoreBTCAddressInfo: (address, offset) => dispatch(getMoreBTCAddressInfo(address, offset))
    };
};

export default connect(null, mdp)(HomePage);