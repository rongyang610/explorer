import React from 'react';
import './home_page.css';
import { Link } from 'react-router-dom';

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

  componentDidMount(){
    //If I have time I'll add bitcoin price, hashrate, difficulty, tx per day, average value, average fee, unconfirmed, mempool
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const btcAddress = this.state.searchVal;
    if(btcAddress.length > 0){
      this.props.getBTCAddressInfo(btcAddress)
      .then(() => this.props.history.push(`/BTC/${btcAddress}`))
      .catch(() => this.props.history.push(`/BTC/${btcAddress}`));
    }
  }
  
  render(){
    return (
      <div className="home-page-main-container">
        <div className="home-page-header-container">
          <h1 className="text-center"> 
            <img src='../../../../images/target.png' alt="Logo"></img>
            Welcome to Explorer
          </h1>
        </div>
        <div className="home-page-search-bar-container">
          <form onSubmit={this.handleSubmit} className="home-page-search-bar-form">
            <i className="fas fa-search search-icon"></i>
            <input 
              className="home-page-search-bar" 
              type="search" 
              placeholder="Search"
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