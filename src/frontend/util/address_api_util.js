export const fetchBCAddressDetail = (address) => {
    return fetch(`https://blockchain.info/rawaddr/${address}?cors=true`).then(res => res.json())
}