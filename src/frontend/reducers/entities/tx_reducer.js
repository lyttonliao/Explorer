import { RECEIVE_TX } from '../../actions/tx_actions';

const txReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_TX:

        default:
            return state
    }
}

export default txReducer