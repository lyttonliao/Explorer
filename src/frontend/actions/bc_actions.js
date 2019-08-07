import * as BCApiUtil from '../util/bc_api_util'

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";
export const RECEIVE_BLOCKCOUNT = "RECEIVE_BLOCKCOUNT";

export const receiveAddress = data => {
    return {
        type: RECEIVE_ADDRESS,
        data
    }
}

export const receiveBlockCount = data => {
    return {
        type: RECEIVE_BLOCKCOUNT,
        data
    }
}

export const fetchAddress = address = dispatch => {
    return (
        BCApiUtil.fetchBCAddressDetail(address).then(data => dispatch(receiveAddress(data)))
    ) 
}

export const fetchBlockCount = dispatch => {
    return (
        BCApiUtil.fetchBCBlockCount().then(data => dispatch(receiveBlockCount(data)))
    )
}