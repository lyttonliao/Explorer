import * as TxApiUtil from '../util/tx_api_util'

export const RECEIVE_TX = "RECEIVE_TX";

export const receiveTx = data => {
    return {
        type: RECEIVE_TX,
        data
    }
}

export const fetchTx = hash = dispatch => {
    return (
        TxApiUtil.fetchTx(hash).then(data => dispatch(receiveTx(data)))
    )
}
