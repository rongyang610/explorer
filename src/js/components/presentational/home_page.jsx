import React from 'react';
import { Link } from 'react-router-dom';




class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      searchVal: ''
    };
  }

  componentDidMount(){
    //If I have time I'll add bitcoin price, hashrate, difficulty, tx per day, average value, average fee, unconfirmed, mempool
  }
  
  render(){
    return (
      <div>
        <h1 class="text-center align-middle">Welcome to Bitcoin Search</h1>
      </div>
    );
  }
}



export default HomePage;