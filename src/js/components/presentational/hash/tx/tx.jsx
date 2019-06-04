import React from 'react';
import './tx.css';
import btcLogo from '../../../../../images/btcLogo.png';
import { Link } from 'react-router-dom';

class TX extends React.Component {
  
  constructor(props) {
    super(props);
  }

  convertToBTCString(amount){
    const value = amount/100000000
    return value.toFixed(8) + ' BTC';
  }

  getInputTx(){
    const {input} = this.props;
    return input.map((ele, i) => {
      const prevOut = ele.prev_out;
      const valueString = this.convertToBTCString(prevOut.value);
      const address = prevOut.addr;
      return(
        <div className="row align-items-center" key={i}>
          <div className="col-8 text-truncate text-right p-0 hash-tx-tx-link">
            <Link to={`/btc/address/${address}`} target="_blank">
              {address}
            </Link>
          </div>
          <div className="col-4 text-right pl-0">
            {valueString} <i className="fas fa-coins text-danger"></i>
          </div>
        </div>
      )
    });
  }

  getOutputTx(){
    const { output } = this.props;
    return output.map((ele, i) => {
      const valueString = this.convertToBTCString(ele.value);
      const address = ele.addr;
      return(
        <div className="row align-items-center hash-tx-tx-mapped" key={i}>
          <div className="col-8 text-truncate text-right p-0 hash-tx-tx-link">
            <Link to={`/btc/address/${address}`} target="_blank">
              {address}
            </Link>
          </div>
          <div className="col-4 text-right pl-0">
            {valueString} <i className="fas fa-coins text-success"></i>
          </div>
        </div>
      )
    });
  }
  
  render(){
    const {hash} = this.props;
    const inputTx = this.getInputTx();
    const outTx = this.getOutputTx();
    return (
      <div className="hash-tx-tx-main-container container">

        <div className="container pb-2 hash-tx-tx-header-logo">
          <div className='row align-items-center'>
            <img className="mr-2" src={btcLogo} alt="BTC Logo" width="38px" height="38px"/>
            <h2 className="mt-2">Bitcoin | Transaction</h2>
          </div>
        </div>

        <div className="card hash-tx-tx-container">
          <div className="card-body">
            <h4 className="card-title">Transaction</h4>
          </div>
          <div className="container">
            <div className="row hash-tx-tx-list-row-item align-items-center">
              <div className="col-4 text-truncate"><strong>Hash:</strong></div>
              <div className="col-8 address-summary-right-td text-right text-truncate">
                {hash}
              </div>
            </div>
            <div className="row hash-tx-tx-list-row-item">
              <div className="col-5">
                <strong>Inputs</strong>
              </div>
              <div className="col-7">
                {inputTx}
              </div>
            </div>
            <div className="row hash-tx-tx-list-row-item border-0">
              <div className="col-5">
                <strong>Outputs</strong>
              </div>
              <div className="col-7">
                {outTx}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TX;