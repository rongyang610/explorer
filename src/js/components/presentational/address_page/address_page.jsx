import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

// const searchStyle = {
//   backgroundColor: 'yellow',
// };


class AddressPage extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { btcAddressInfo, address } = this.props;
    if(Object.keys(btcAddressInfo).length === 0){
      this.fetchBTCAddressInfo(address);
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
    return (
      <div className="home-page-main-container">
        <div>
          
          <h1 className="text-center"> 
            <img src='../../../../images/target.png' alt="Logo"></img>
            Welcome to Explorer
          </h1>
          
        </div>
      </div>
    );
  }
}



export default AddressPage;