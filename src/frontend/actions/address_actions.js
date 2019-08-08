import * as AddressApiUtil from '../util/address_api_util'

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";
export const RECEIVE_BLOCKCOUNT = "RECEIVE_BLOCKCOUNT";

export const receiveAddress = data => {
    return {
        type: RECEIVE_ADDRESS,
        data
    }
}

export const fetchAddress = address => dispatch => {
    return (
        AddressApiUtil.fetchBCAddressDetail(address).then(data => dispatch(receiveAddress(data)))
    ) 
}