export const fetchMoreBTCAddressDetail = (BTCAddress, offset) => {
  return fetch(`https://blockchain.info/rawaddr/${BTCAddress}?cors=true&offset=${offset}`).then(res => res.json());
};

export const fetchBTCAddressDetail = (BTCAddress) => {
  return fetch(`https://blockchain.info/rawaddr/${BTCAddress}?cors=true`).then(res => res.json());
};

export const fetchBTCBlockCount = () => {
  return fetch(`https://blockchain.info/q/getblockcount`).then(res => res.json());
};