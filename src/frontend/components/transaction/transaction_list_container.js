import { connect } from 'react-router-dom'
import TransactionList from './transaction_list'
// import { withRouter } from 'react-router-dom';

export const msp = state => {
    return ({
        txsArr: state.current_block.tx || state.address.tx
    })
}

export default connect(msp, null)(TransactionList)