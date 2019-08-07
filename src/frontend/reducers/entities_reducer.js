import { combineReducers } from 'redux'
import bcReducer from './entities/bc_reducer'
import txReducer from './entities/tx_reducer';

const entitiesReducer = combineReducers({
    bc: bcReducer,
    tx: txReducer
})

export default entitiesReducer