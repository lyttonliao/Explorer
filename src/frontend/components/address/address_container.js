import { connect } from 'react-redux'
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

export default connect(msp, mdp)(Address)