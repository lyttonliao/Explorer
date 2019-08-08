import { RECEIVE_ALL_BLOCKS, RECEIVE_SPECIFIC_BLOCKS } from '../../actions/block_actions';

const blockReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_BLOCKS:
            return action.data
        case RECEIVE_SPECIFIC_BLOCKS:
            return action.data
        default:
            return state
    }
}

export default blockReducer;