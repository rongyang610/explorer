import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Card, CardBody } from 'reactstrap';
import './item.css';

const grayBg = {
  backgroundColor: '#FFFFFF',
};

const whiteBg = {
  backgroundColor: '#F0F2F6',
};

const hoverBg = {
  backgroundColor: '#DFE3EB',
};

const carrotSize ={
  fontSize: '22px',
  cursor: 'pointer',
};

const fromStyle ={
  color: '#0000ff',
};

const toAddStyle ={
  color: '#00ff00',
};

const toNotAddStyle ={
  color: '#ff0000',
};

class TransactionList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      show: false,
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(){
    const {show} = this.state;
    this.setState({show: !show});
  }

  toggleHover(){
    const {hover} = this.state;
    this.setState({hover: !hover});
  }

  mappedFromAddress(arr){
    return arr.map((obj, i) => {
      const address = obj.address;
      const value = obj.valueString;

      return(
      <div className="row align-items-center" key={i}>
        <div className="col-7 text-truncate blue-link-tx">
          <Link to={`/btc/address/${address}`} target='_blank'>
            {address}
          </Link>
        </div>
        <div className="col-4">
          {value}
        </div>
        <div className="col-1" style={fromStyle}>
          <i className="fas fa-coins"></i>
        </div>
      </div>
      )
    });
  }

  mappedToAddress(arr, addy){
    return arr.map((obj, i) => {
      const address = obj.address;
      const value = obj.valueString;
      const style = addy === address ? toAddStyle : toNotAddStyle;
      return(
      <div className="row align-items-center" key={i}>
        <div className="col-7 text-truncate blue-link-tx">
          <Link to={`/btc/address/${address}`} target='_blank'>
            {address}
          </Link>
        </div>
        <div className="col-4">
          {value}
        </div>
        <div className="col-1" style={style}>
          <i className="fas fa-coins"></i>
        </div>
      </div>
      )
    });
  }

  render(){
    const {show, hover} = this.state;
    const {address, index, time, txHash, fromArr, toArr, finalAmount, idName, idCollapse} = this.props;
    let style = index % 2 === 0 ? grayBg : whiteBg;
    style = hover ? hoverBg : style;
    const caretDirection = show ? (
      <i className="fas fa-caret-up"></i>
    ) : (
      <i className="fas fa-caret-down"></i>
    );
    const fromAddress = fromArr.length > 0 ? this.mappedFromAddress(fromArr) : null;
    const toAddress = toArr.length > 0 ? this.mappedToAddress(toArr, address) : null;
    
    return (
      <div 
        className='card border-0 rounded-0' 
        style={style} 
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className='py-3 pl-4 row align-items-center' id={idName}>
          <div className='col-2 text-truncate'>
            {time}
          </div>
          <div className='col-7 text-truncate blue-link-tx'>
            <Link to={`/btc/tx/${txHash}`} target="_blank">
              {txHash}
            </Link>
          </div>
          <div className='col-2'>
            {finalAmount}
          </div>
          <div className='col-1'>
            <div
              onClick={() => this.toggleCollapse()}
              style={carrotSize}
            >
              {caretDirection}
            </div>
          </div>
        </div>

        <Collapse isOpen={show}>
          <Card>
            <CardBody>
              <div className="row">
                <div className="col-5">
                  <strong>From</strong>
                  {fromAddress}
                </div>
                <div className="col-5 offset-1">
                  <strong>To</strong>
                  {toAddress}
                  <div className="row">
                    
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default TransactionList;