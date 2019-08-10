import { connect } from 'react-redux'
import { fetchTx } from '../../actions/tx_actions'
import Transaction from './transaction'

export const msp = state => {
    return ({
        tx: state.entities.tx
    })
}

export const mdp = dispatch => {
    return ({
        fetchTx: hash => dispatch(fetchTx(hash))
    })
}

export default connect(msp, mdp)(Transaction)