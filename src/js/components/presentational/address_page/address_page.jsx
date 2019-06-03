import React from 'react';
import Swal from 'sweetalert2';
import NavBarContainer from '../../container/nav/nav_bar_container';
import AddressSumaryContainer from '../../container/address_summary/address_summary_container';
import TransactionListContainer from '../../container/transaction/transaction_list_container';
import { ClipLoader } from 'react-spinners';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F0F2F6',
  height: '100vh'
};

const contentStyle = {
  backgroundColor: '#F0F2F6',
};

const loadingStyle = {
  backgroundColor: '#F0F2F6',
  height: '100vh',
};


class AddressPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount(){
    const { btcAddressInfo, address } = this.props;
    const infoAddress = btcAddressInfo.address;
    if(Object.keys(btcAddressInfo).length === 0){
      this.fetchBTCAddressInfo(address);
    } else if(infoAddress !== address){
      this.fetchBTCAddressInfo(address);
    } else if(Object.keys(btcAddressInfo).length !== 0){
      this.setState({loading: false});
    }
  }

  componentDidUpdate(prevProps){
    const { address } = this.props;
    if(prevProps.address !== address){
      this.fetchBTCAddressInfo(address);
    }
  }

  fetchBTCAddressInfo(address){
    this.props.getBTCAddressInfo(address)
    .then( info => {
      const txArrLength = info.info.txs.length;
      this.checkTxArrLength(address, 50, txArrLength);
    })
    .catch(() => {
      Swal.fire({
        type: 'error',
        title: address,
        text: 'is NOT a valid Bitcoin Address!',
      });
      this.props.history.push(`/`);
    });
  }

  checkTxArrLength(address, offset, txArrLength){
    if(txArrLength === 50){
      this.fetchMoreBTCAddressInfo(address, offset);
    } else{
      this.setState({loading: false});
    }
  }

  fetchMoreBTCAddressInfo(address, offset){
    this.props.getMoreBTCAddressInfo(address, offset)
    .then((info) => {
      const txArrLength = info.info.txs.length;
      const newOffset = offset + 50;
      this.checkTxArrLength(address, newOffset, txArrLength);
    }).catch(() => this.props.history.push(`/BTC/${address}`));
  }
  
  render(){
    const loadingResult = this.state.loading ? (
      <div className='container' style={loadingStyle}>
        <div className='row align-items-center' style={loadingStyle}>
          <div className='col-1 offset-5'>
            <ClipLoader
              sizeUnit={"px"}
              size={150}
              color={'#0000FF'}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>) : (
      <div style={contentStyle}>
        <AddressSumaryContainer />
        <TransactionListContainer />
      </div>
      )
    return (
      <div style={style}>
        <NavBarContainer />
        {loadingResult}
      </div>
    );
  }
}



export default AddressPage;