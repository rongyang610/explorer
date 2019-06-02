import { connect } from 'react-redux';
import BTCAddressPage from '../../presentational/address_page/address_page';

const msp = ({entities: {btcAddressInfo}}) => {
    return {
        btcAddress: btcAddressInfo.address,
        finalAddressAmount: btcAddressInfo.final_balance,
        hash160: btcAddressInfo.hash160,
        numTxs: btcAddressInfo.n_tx,
        totalReceived: btcAddressInfo.total_received,
        totalSent: btcAddressInfo.total_sent,
        txsArr: btcAddressInfo.txs
    };
};

export default connect(msp, null)(BTCAddressPage);