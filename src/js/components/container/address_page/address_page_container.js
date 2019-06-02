import { connect } from 'react-redux';
import BTCAddressPage from '../../presentational/address_page/address_page';
import { 
    getBTCAddressInfo,
    getMoreBTCAddressInfo
  } from '../../../actions/btc_actions';
  
const msp = ({ entities: {btcAddressInfo} }, ownProps) => {
    return {
        btcAddressInfo: btcAddressInfo,
        address: ownProps.match.params.btcAddress,
        finalAddressAmount: btcAddressInfo.final_balance,
        hash160: btcAddressInfo.hash160,
        numTxs: btcAddressInfo.n_tx,
        totalReceived: btcAddressInfo.total_received,
        totalSent: btcAddressInfo.total_sent,
        txsArr: btcAddressInfo.txs
    };
};

const mdp = dispatch => {
    return {
      getBTCAddressInfo: (address) => dispatch(getBTCAddressInfo(address)),
      getMoreBTCAddressInfo: (address, offset) => dispatch(getMoreBTCAddressInfo(address, offset))
    };
};

export default connect(msp, mdp)(BTCAddressPage);