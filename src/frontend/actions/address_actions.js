import * as AddressApiUtil from '../util/address_api_util'

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";
export const RECEIVE_BLOCKCOUNT = "RECEIVE_BLOCKCOUNT";

export const receiveAddress = data => {
<<<<<<< HEAD
=======
    debugger
>>>>>>> parent of 57ca5783... Updates
    return {
        type: RECEIVE_ADDRESS,
        data
    }
}

export const fetchAddress = address => dispatch => {
<<<<<<< HEAD
=======
    debugger
>>>>>>> parent of 57ca5783... Updates
    return AddressApiUtil.fetchBCAddressDetail(address).then(data => dispatch(receiveAddress(data)))
}