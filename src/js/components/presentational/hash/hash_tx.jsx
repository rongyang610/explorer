import React from 'react';
import Swal from 'sweetalert2';
import NavBarContainer from '../../container/nav/nav_bar_container';
import TXContainer from '../../container/hash/tx/tx_container';
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
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount(){
    const { hash } = this.props;
    this.fetchTx(hash);
  }

  componentDidUpdate(prevProps){
    const {hash} = this.props;
    if(prevProps.hash !== hash){
      this.setState({loading: true});
      this.fetchTx(hash);
    }
  }

  fetchTx(hash){
    this.props.getTx(hash)
    .then( (tx) => {
      this.setState({loading: false});
    })
    // .catch(() => {
    //   Swal.fire({
    //     type: 'error',
    //     title: hash,
    //     text: 'is NOT a valid Transaction Hash!',
    //   });
    //   this.props.history.push(`/`);
    // });
  }
  
  render(){
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
        <TXContainer></TXContainer>
      </div>
      )
    return (
      <div style={style}>
        <NavBarContainer hash={this.props.hash}/>
        {loadingResult}
      </div>
    );
  }
    
}

export default TxHash;