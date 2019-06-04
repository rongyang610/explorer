import React from 'react';
import './home_page.css';
import logo from '../../../../images/target.png';

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

  handleSubmit(e){
    e.preventDefault();
    const address = this.state.searchVal;
    if(address.length > 0){
      this.props.history.push(`/btc/address/${address}`);
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