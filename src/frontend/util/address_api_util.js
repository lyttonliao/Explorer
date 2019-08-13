export const fetchBCAddressDetail = (address) => {
    debugger
    return fetch(`https://blockchain.info/rawaddr/${address}?cors=true`).then(res => res.json())
}