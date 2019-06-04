import React from 'react';
import Swal from 'sweetalert2';
import NavBarContainer from '../../container/nav/nav_bar_container';
import { ClipLoader } from 'react-spinners';
import './hash_tx.css';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F0F2F6',
  height: '100vh'
};

const contentStyle = {
  backgroundColor: '#F0F2F6',
};

const loadingStyle = {
  backgroundColor: '#F0F2F6',
  height: '100vh',
};

class TxHash extends React.Component {
  
  constructor(props) {
    debugger
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount(){
    debugger
    const {getTx, tx, hash} = this.props;
    this.fetchTx(hash);
  }

  componentDidUpdate(){
    debugger
  }

  fetchTx(hash){
    debugger
    this.props.getTx(hash)
    .then( tx => {
      debugger
      
    })
    .catch(() => {
      Swal.fire({
        type: 'error',
        title: hash,
        text: 'is NOT a valid Transaction Hash!',
      });
      this.props.history.push(`/`);
    });
  }
  
  render(){
    debugger
    const loadingResult = this.state.loading ? (
      <div className='container' style={loadingStyle}>
        <div className='row align-items-center' style={loadingStyle}>
          <div className='col-1 offset-5'>
            <ClipLoader
              sizeUnit={"px"}
              size={150}
              color={'#0000FF'}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>) : (
      <div style={contentStyle}>
      </div>
      )
    return (
      <div style={style}>
        <NavBarContainer/>
        {loadingResult}
      </div>
    );
  }
    
}

export default TxHash;