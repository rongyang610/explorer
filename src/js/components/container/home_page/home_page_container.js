import { connect } from 'react-redux';
import HomePage from '../../presentational/home_page/home_page';
import { getBTCAddressInfo } from '../../../actions/btc_actions';

const mdp = dispatch => {
    return {
      getBTCAddressInfo: (address) => dispatch(getBTCAddressInfo(address))
    };
};

export default connect(null, mdp)(HomePage);