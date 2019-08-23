export const fetchBlock = block_hash => {
    return fetch(`https://blockchain.info/rawblock/${block_hash}?cors=true`).then(res => res.json())
}

export const fetchAllBlocks = time => {
    return fetch(`https://blockchain.info/blocks/${time}?format=json&cors=true`).then(res => res.json())
}

export const fetchSpecificBlocks = pool_name => {
    return fetch(`https://blockchain.info/blocks/${pool_name}?format=json&cors=true`).then(res => res.json())
}