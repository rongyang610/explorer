import React from 'react';
import Swal from 'sweetalert2';
import NavBarContainer from '../../container/nav/nav_bar_container';
import AddressSumaryContainer from '../../container/address_summary/address_summary_container';
import TransactionListContainer from '../../container/transaction/transaction_list_container';
import { ClipLoader } from 'react-spinners';

class TxHash extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount(){

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
        <AddressSumaryContainer />
        <TransactionListContainer />
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