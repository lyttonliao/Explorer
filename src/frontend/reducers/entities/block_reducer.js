import { RECEIVE_ALL_BLOCKS, RECEIVE_SPECIFIC_BLOCKS } from '../../actions/block_actions';

const blockReducer = (state = {}, action) => {
    Object.freeze(state)
    let new_state = Object.assign({}, state)
    switch (action.type) {

        case RECEIVE_ALL_BLOCKS:
            action.data.blocks.forEach(block => {
                new_state[block.height] = block
            })
            return new_state
        case RECEIVE_SPECIFIC_BLOCKS:
            action.data.blocks.forEach(block => {
                new_state[block.height] = block
            })
            return new_state
        default:
            return state
    }
}

export default blockReducer;