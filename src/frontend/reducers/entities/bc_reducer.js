import { RECEIVE_ADDRESS , RECEIVE_BLOCKCOUNT } from '../../actions/bc_actions';

const bcReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ADDRESS:
            
        case RECEIVE_BLOCKCOUNT:

        default:
            return state
    }
}

export default bcReducer