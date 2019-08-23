import { combineReducers } from 'redux'
import addressReducer from './entities/address_reducer'
import txReducer from './entities/tx_reducer';
import blockReducer from './entities/block_reducer'

const entitiesReducer = combineReducers({
    address: addressReducer,
    block: blockReducer,
    tx: txReducer
})

export default entitiesReducer