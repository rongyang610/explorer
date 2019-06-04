import React from 'react';
import './address_summary.css';

class AddressSummary extends React.Component {
  
  constructor(props) {
    super(props);
  }

  convertToBTC(amount){
    let btcAmount = amount/100000000;
    return btcAmount.toLocaleString('en',{maximumSignificantDigits: 21});
  }
  
  render(){
    let {address, hash160, numTxs, totalReceived, totalSent, finalAddressAmount} = this.props;
    totalReceived = this.convertToBTC(totalReceived);
    totalSent = this.convertToBTC(totalSent);
    finalAddressAmount = this.convertToBTC(finalAddressAmount);
    return (
      <div className="address-summary-main-container container">
        <div className="card address-summary-container">
          <div className="card-body">
            <h4 className="card-title text-center address-summary-wallet-info">Wallet Summary</h4>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>Address:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate">
                { address }
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>Hash 160:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate">
                { hash160 }
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>No. Transactions:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate">
                {numTxs}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>Total Received:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate ">
                {totalReceived} BTC
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>Total Sent:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate">
                {totalSent} BTC
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row address-summary-list-row-item address-summary-last-item align-items-center">
              <div className="col-4 text-truncate"><strong>Final Balance:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate ">
                {finalAddressAmount} BTC
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default AddressSummary;