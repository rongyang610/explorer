import React from 'react';
import './transaction_list.css';
import Item from './item/item';

class TransactionList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      loading: true,
      page: 0,
      showAmount: 50,
    };
  }

  convertTimeStamp(unix){
    const time = new Date(unix * 1000);
    return time.toLocaleDateString('default',{year: 'numeric', month: 'numeric', day:'numeric', hour: 'numeric', minute: 'numeric'});
  }

  convertToBTC(amount){
    return amount/100000000;
  }

  convertToBTCString(value){
    return value.toFixed(8) + ' BTC';
  }

  // convertToEightDecimal(str){
  //   let newStr = str.split('.');
  //   while(newStr[1].length < 8){
  //     newStr[1] += '0';
  //   }
  // }

  createFromArr(inputArr){
    const newArr = [];
    inputArr.forEach((input) => {
      const prevOut = input.prev_out;
      const address = prevOut.addr;
      const value = this.convertToBTC(prevOut.value);
      const valueString = this.convertToBTCString(value);
      const obj = {};
      obj.address = address;
      obj.value = value;
      obj.valueString = valueString;
      newArr.push(obj);
    });
    return newArr;
  }

  createToArr(outArr){
    const newArr = [];
    outArr.forEach((out) => {
      const address = out.addr;
      const value = this.convertToBTC(out.value);
      const valueString = this.convertToBTCString(value);
      const spent = out.spent;
      const obj = {};
      obj.address = address;
      obj.value = value;
      obj.valueString = valueString;
      obj.spent = spent;
      newArr.push(obj);
    });
    return newArr;
  }

  getFinalAmount(fromArr, toArr, address){
    let fromTotalAmount = 0;
    let toTotalAmount = 0;

    fromArr.forEach((ele) => {
      if(ele.address === address){
        fromTotalAmount += parseFloat(ele.value);
      }
    });

    toArr.forEach((ele) => {
      if(ele.address === address){
        toTotalAmount += parseFloat(ele.value);
      }
    });

    const diff = (toTotalAmount - fromTotalAmount);
    return this.convertToBTCString(diff);
  }

  mapped(address){
    const {txsArr} = this.props;
    const {page} = this.state;
    const mappedHTML = txsArr.map((tx, i) => {
      const time = this.convertTimeStamp(tx.time);
      const txHash = tx.hash;
      const fromArr = this.createFromArr(tx.inputs);
      const toArr = this.createToArr(tx.out);
      const finalAmount = this.getFinalAmount(fromArr, toArr, address);
      const iString = i.toString();
      const id = 'heading' + iString;
      const collapseName = 'collapse' + iString;
      return (
        <Item
          key={i} 
          index={i} 
          time={time}
          txHash={txHash}
          fromArr={fromArr}
          toArr={toArr}
          finalAmount={finalAmount}
          idName={id}
          idCollapse={collapseName}
          address={address}
          // changeParentOpen={}
        />
      )
    });
    return mappedHTML.slice(50*page, 50*(page + 1));
  }

  makePageButtons(amount){
    const newArr = new Array(Math.ceil(amount/50)).fill();
    return newArr.map((_, i) => {
      const active = (this.state.page === i) ? "btn-primary" : "btn-secondary";
      return(<button key={i} onClick={() => this.setState({page: i})} className={`btn mx-1 ${active}`}>
        {i + 1}
      </button>)
    });
  }
  
  render(){
    const mappedTx = this.props.txsArr.length > 0 ? this.mapped(this.props.address) : (
      <div className='container' style={loadingStyle}>
        <div className='row align-items-center' style={loadingStyle}>
          <div className='col-1 offset-5'>
            <ClipLoader
              sizeUnit={'px'}
              size={150}
              color={'#0000FF'}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>
    );
    const pageButtons = this.makePageButtons(this.props.txsArr.length)
    return (
      <div className='container'>
        <div className='card transaction-container'>
          <div className='card-body row'>

            <h4 className='card-title col-3'>Transactions</h4>
            <div className='col 2'>

            </div>
            <div className='col-3 text-right'>
              {pageButtons}
            </div>
          </div>
          <div className='container pl-4'>
            <div className='row transaction-list-row'>
              <div className='col-2 text-truncate'>
                <strong>Timestamp</strong>
              </div>
              <div className='col-7 text-truncate'>
                <strong>Transaction Hash</strong>
              </div>
              <div className='col-3 text-truncate'>
                <strong>Amount</strong>
              </div>
            </div>
          </div>
          <div id='accordion' className="container">
            {mappedTx}
          </div>
        </div>
      </div>
    );
  }
}



export default TransactionList;