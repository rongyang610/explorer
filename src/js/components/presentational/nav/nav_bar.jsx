import React from 'react';
import './nav_bar.css';
import '../home_page/home_page.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../../../images/target.png';

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      searchVal: '',
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
      <div className="nav-bar-main-container">
        <Link to='/' className="left-nav-bar-container">
          <div className="text-center">
            <img src={logo} alt="Logo" className="home-page-logo"></img>
          </div>
          <div className="align-middle">
            <h1 className="text-center"> 
              Explorer
            </h1>
          </div>
        </Link>
        <div className="right-nav-bar-container">
          <form onSubmit={this.handleSubmit} className="nav-page-search-bar-form">
            <i className="fas fa-search search-icon"></i>
            <input 
              className="home-page-search-bar right-nav-bar-search-input" 
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

export default NavBar;