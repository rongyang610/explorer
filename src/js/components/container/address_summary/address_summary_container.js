import { connect } from 'react-redux';
import AddressSummary from '../../presentational/address_summary/address_summary';
  
const msp = ({ entities: {btcAddressInfo} }) => {
    return {
        address: btcAddressInfo.address,
        hash160: btcAddressInfo.hash160,
        numTxs: btcAddressInfo.n_tx,
        totalReceived: btcAddressInfo.total_received,
        totalSent: btcAddressInfo.total_sent,
        finalAddressAmount: btcAddressInfo.final_balance,
    };
};

export default connect(msp, null)(AddressSummary);