# Explorer

To run a local server do the following:

1. Open terminal
2. Clone the repository: ```git clone https://github.com/rongyang610/explorer.git```
3. cd into the explorer ```cd explorer```
4. Install npm: ```npm install```
5. Start the local server: ```npm run build```
6. Enjoy!

Explorer, is a cryptocurrency explorer. It allows a user to view transactions from a bitcoin address using Blockchain.com's API.

## Table of contents
* [Technologies](#technologies)
* [Splash Page](#splash-page)
* [Navigation Bar](#navigation-bar)
* [Address Show Page](#address-show-page)
* [Transaction Show Page](#transaction-show-page)
* [Cool Feature](#cool-feature)
* [Future Plans](#future-plans)

## Technologies

* React
* Redux
* JavaScript
* Bootstrap
* HTML
* CSS
* Blockchain.com API

## Splash Page

This is the landing page for users to easily search a bitcoin address.

```javascript
  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const address = this.state.searchVal;
    if(address.length > 0){
      this.props.history.push(`/btc/address/${address}`);
    }
  }
```

Code snippet of how search is handle.

![Display](/src/images/splashPage.png)

## Navigation Bar

This navigation bar allows user to search a bitcoin address anytime they are on a show page(address or transaction page).

![Display](/src/images/navBar.png)

## Address Show Page

This is the page where a user will go once they enter a BTC address. This page will show them a summary of the wallet as well as all transactions that the wallet has either received or sent.

```javascript
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
```

Code snippet of how I manage the transaction information that is being passed back by the API.

![Display](/src/images/addressSummary.png)

![Display](/src/images/transactionList.png)

## Transaction Show Page

This is the page that gives a more detailed description of what occurred during a transaction.

```javascript
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
```

Code snippet rendering values of output addresses and BTC amount.

![Display](/src/images/transactionShow.png)

## Cool Feature

![Display](/src/images/pagination.gif)

## Future Plans

* Allow users to search more than BTC, plan to add ETH and BCH
* Allow users to search for transaction hash
* Add some filtering
* Add react-pagination
* Calculate # of confirmations