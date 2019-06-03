import React from 'react';
import './home_page.css';
import Swal from 'sweetalert2';
import logo from '../../../../images/target.png';

// const searchStyle = {
//   backgroundColor: 'yellow',
// };


class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      searchVal: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  checkTxArrLength(address, offset, txArrLength){
    if(txArrLength < 50){
      this.props.history.push(`/BTC/${address}`);
    } else {
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

  handleSubmit(e){
    e.preventDefault();
    const address = this.state.searchVal;
    if(address.length > 0){
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
        this.setState({searchVal: ''});
      });
    }
  }
  
  render(){
    return (
      <div className="home-page-main-container">
        <div className="home-page-header-container">
          <div className="text-center home-page-logo-container">
            <img src={logo} alt="Logo" className="home-page-logo"></img>
          </div>
          <div className="align-middle">
            <h1 className="text-center"> 
              Welcome to Explorer
            </h1>
          </div>
        </div>
        <div className="home-page-search-bar-container">
          <form onSubmit={this.handleSubmit} className="home-page-search-bar-form">
            <i className="fas fa-search search-icon"></i>
            <input 
              className="home-page-search-bar" 
              type="search" 
              placeholder="Bitcoin Address"
              value={this.state.searchVal}
              onChange={this.update('searchVal')}
            />
            <button 
              className={this.state.searchVal.length > 0 ? "home-page-search-bar-button-on" : "home-page-search-bar-button-off"}
            >
                Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}



export default HomePage;