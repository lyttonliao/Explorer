import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAddress } from '../../actions/address_actions'
import Address from './address'
 
export const msp = state => {
    return ({
        address: state.entities.address
    })
}

export const mdp = dispatch => {
    return ({
        fetchAddress: address => dispatch(fetchAddress(address))
    })
}

export default withRouter(connect(msp, mdp)(Address))