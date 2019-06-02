import React from 'react';
import { Link } from 'react-router-dom';

// const searchStyle = {
//   backgroundColor: 'yellow',
// };


class AddressPage extends React.Component {
  
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
      <div className="home-page-main-container">
        <div>
          
          <h1 className="text-center"> 
            <img src='../../../../images/target.png' alt="Logo"></img>
            Welcome to Explorer
          </h1>
          
        </div>
      </div>
    );
  }
}



export default AddressPage;