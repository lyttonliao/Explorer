import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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

export default withRouter(connect(msp, mdp)(Transaction))