import { RECEIVE_BLOCK } from '../actions/block_actions';

const currentBlockReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_BLOCK:
            return action.data
        default:
            return state
    }
}

export default currentBlockReducer