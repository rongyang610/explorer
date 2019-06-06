// export const fetchBTCAddressDetail = (BTCAddress) => {
//   return $.ajax ({
//     url: `https://blockchain.info/rawaddr/${BTCAddress}?cors=true`,
//     type: 'get'
//   });
// };

// export const fetchMoreBTCAddressDetail = (BTCAddress, offset) => {
//   return $.ajax ({
//     url: `https://blockchain.info/rawaddr/${BTCAddress}?cors=true&offset=${offset}`,
//     type: 'get'
//   });
// };

export const fetchMoreBTCAddressDetail = (BTCAddress, offset) => {
  return fetch(`https://blockchain.info/rawaddr/${BTCAddress}?cors=true&offset=${offset}`).then(res => res.json());
};

export const fetchBTCAddressDetail = (BTCAddress) => {
  return fetch(`https://blockchain.info/rawaddr/${BTCAddress}?cors=true`).then(res => res.json());
};

export const fetchBTCAddressDetail = (BTCAddress) => {
  return fetch(`https://blockchain.info/rawaddr/${BTCAddress}?cors=true`).then(res => res.json());
};

export const fetchBTCAddressDetail = () => {
  return fetch(`https://blockchain.info/q/getblockcount`).then(res => res.json());
};