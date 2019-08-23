export const fetchBCAddressDetail = (address) => {
<<<<<<< HEAD
=======
    debugger
>>>>>>> parent of 57ca5783... Updates
    return fetch(`https://blockchain.info/rawaddr/${address}?cors=true`).then(res => res.json())
}