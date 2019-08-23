import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import currentBlockReducer from './current_block_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    current_block: currentBlockReducer
})

export default rootReducer;