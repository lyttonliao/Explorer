import { RECEIVE_ADDRESS } from '../../actions/address_actions';

const addressReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ADDRESS:
            return action.data
        default:
            return state
    }
}

export default addressReducer