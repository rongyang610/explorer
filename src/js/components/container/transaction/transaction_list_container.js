import { connect } from 'react-redux';
import TransactionList from '../../presentational/transaction/transaction_list';
  
const msp = ({ entities: {btcAddressInfo} }) => {
    return {
        address: btcAddressInfo.address,
        txsArr: btcAddressInfo.txs
    };
};

export default connect(msp, null)(TransactionList);