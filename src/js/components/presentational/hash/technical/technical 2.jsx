import React from 'react';
import './technical.css';

class Technical extends React.Component {
  
  constructor(props) {
    super(props);
  }

  convertTimeStamp(unix){
    const time = new Date(unix * 1000);
    return time.toLocaleDateString('default',{year: 'numeric', month: 'numeric', day:'numeric', hour: 'numeric', minute: 'numeric'});
  }
  
  render(){
    const{blockHeight, unixTime, size} = this.props;
    const newTime = this.convertTimeStamp(unixTime);
    const newSize = size + " bytes";
    return (
      <div className="hash-tx-technical-main-container container">
        <div className="card hash-tx-technical-container">
          <div className="card-body">
            <h4 className="card-title">Technical</h4>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="row hash-tx-technical-list-row-item">
                  <div className="col-6 text-truncate">
                    <strong>Included in Block</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {blockHeight}
                  </div>
                </div>
                <div className="row hash-tx-technical-list-row-item border-0">
                  <div className="col-6 text-truncate">
                    <strong>Confirmations</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="col-6 address-summary-right-td text-right text-truncate">
              <div className="row hash-tx-technical-list-row-item">
                  <div className="col-6 text-truncate text-left">
                    <strong>Received Time</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {newTime}
                  </div>
                </div>
                <div className="row hash-tx-technical-list-row-item border-0">
                  <div className="col-6 text-truncate text-left">
                    <strong>Size</strong>
                  </div>
                  <div className="col-6 text-truncate text-right">
                    {newSize}
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

export default Technical;