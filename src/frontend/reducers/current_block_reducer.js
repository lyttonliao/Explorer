import { RECEIVE_BLOCK } from '../actions/block_actions';

const currentBlockReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_BLOCK:
            // let new_state = Object.merge({}, state)
            // return new_state[action.data.block.height] = action.data.block
            return action.data
        default:
            return state
    }
}

export default currentBlockReducer