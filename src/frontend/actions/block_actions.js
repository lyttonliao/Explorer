import * as BlockApiUtil from '../util/block_api_util';

export const RECEIVE_ALL_BLOCKS = "RECEIVE_ALL_BLOCKS"
export const RECEIVE_SPECIFIC_BLOCKS = "RECEIVE_SPECIFIC_BLOCKS"

const receiveAllBlocks = data => {
    return {
        type: RECEIVE_ALL_BLOCKS,
        data
    }
}

const receiveSpecificBlocks = data => {
    return {
        type: RECEIVE_SPECIFIC_BLOCKS,
        data
    }
}

export const fetchAllBlocks = time => dispatch => {
    return BlockApiUtil.fetchAllBlocks(time).then(data => dispatch(receiveAllBlocks(data)))
}

export const fetchSpecificBlocks = pool_name => dispatch => {
    return BlockApiUtil.fetchSpecificBlocks(pool_name).then(data => dispatch(receiveSpecificBlocks(data)))
}