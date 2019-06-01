import React from 'react';
import './home_page.css';
import { Link } from 'react-router-dom';

// const searchStyle = {
//   backgroundColor: 'yellow',
// };


class HomePage extends React.Component {
  
  constructor() {
    super();
    this.state={
      searchVal: ''
    };
  }

  componentDidMount(){
    //If I have time I'll add bitcoin price, hashrate, difficulty, tx per day, average value, average fee, unconfirmed, mempool
  }
  
  render(){
    return (
      <div class="home-page-main-container">
        <div>
          
          <h1 class="text-center"> 
            <img src='../../../../images/target.png' alt="Logo"></img>
            Welcome to Explorer
          </h1>
          
        </div>
      </div>
    );
  }
}



export default HomePage;