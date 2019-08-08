export const fetchBCAddressDetail = (address) => {
    return fetch(`https://blockchain.info/rawaddr/${address}?cors=true`).then(res => res.json())
}

// export const fetchBCBlockCount = () => {
//     return fetch(`https://blockchain.info/q/getblockcount`).then(res => res.json())
// }