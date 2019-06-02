import { connect } from 'react-redux';
import BTCAddressPage from '../../presentational/address_page/address_page';

const msp = ({entities, errors}, ownProps) => {
    return {
        addressInfo: entities.btcAddressInfo,
        addressError: errors.btcError,
        btcAddress: ownProps
    };
};

export default connect(msp, null)(BTCAddressPage);