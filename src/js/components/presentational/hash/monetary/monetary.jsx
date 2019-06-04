import React from 'react';
import './monetary.css';

class Monetary extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getTotalInputAmount(inputArr){
    let amount = 0;
    inputArr.forEach((obj) => {
      const prevOut = obj.prev_out;
      const value = prevOut.value;
      amount += value;
    });

    return (amount/100000000).toFixed(8) + ' BTC';
  }

  getTotalOutputAmount(outputArr){
    let amount = 0;
    outputArr.forEach((obj) => {
      const value = obj.value;
      amount += value;
    });

    return (amount/100000000).toFixed(8) + ' BTC';
  }


  
  render(){
    const {input, output, size} = this.props;
    const newInput = this.getTotalInputAmount(input);
    const newOutput = this.getTotalOutputAmount(output);
    const fee = ((parseInt(size) * 20)/100000000).toFixed(8) + ' BTC';
    return (
      <div className="hash-tx-monetary-main-container container">
        <div className="card hash-tx-monetary-container">
          <div className="card-body">
            <h4 className="card-title">Monetary</h4>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="row hash-tx-monetary-list-row-item">
                  <div className="col-6 text-truncate">
                    <strong>Total Input</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {newInput}
                  </div>
                </div>
                <div className="row hash-tx-monetary-list-row-item border-0">
                  <div className="col-6 text-truncate">
                    <strong>Total Output</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {newOutput}
                  </div>
                </div>
              </div>
              <div className="col-6 address-summary-right-td text-right text-truncate">
              <div className="row hash-tx-monetary-list-row-item">
                  <div className="col-6 text-truncate text-left">
                    <strong>Fees</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {fee}
                  </div>
                </div>
                <div className="row hash-tx-monetary-list-row-item border-0">
                  <div className="col-6 text-truncate text-left">
                    <strong>Fee per byte</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    20 sat/byte
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monetary;