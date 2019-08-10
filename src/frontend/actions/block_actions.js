import * as BlockApiUtil from '../util/block_api_util';

export const RECEIVE_BLOCK = "RECEIVE_BLOCK"
export const RECEIVE_ALL_BLOCKS = "RECEIVE_ALL_BLOCKS"
export const RECEIVE_SPECIFIC_BLOCKS = "RECEIVE_SPECIFIC_BLOCKS"

const receiveBlock = data => {
    return {
        type: RECEIVE_BLOCK,
        data
    }
}

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

export const fetchBlock = block_hash => dispatch => {
    return BlockApiUtil.fetchBlock(block_hash).then(data => dispatch(receiveBlock(data)))
}

export const fetchAllBlocks = time => dispatch => {
    return BlockApiUtil.fetchAllBlocks(time).then(data => dispatch(receiveAllBlocks(data)))
}

export const fetchSpecificBlocks = pool_name => dispatch => {
    return BlockApiUtil.fetchSpecificBlocks(pool_name).then(data => dispatch(receiveSpecificBlocks(data)))
}