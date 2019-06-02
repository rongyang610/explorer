export const fetchBTCAddressDetail = (BTCAddress) => {
  return $.ajax ({
    url: `https://blockchain.info/rawaddr/${BTCAddress}?cors=true`,
    type: 'get'
  });
};

export const fetchMoreBTCAddressDetail = (BTCAddress, offset) => {
  return $.ajax ({
    url: `https://blockchain.info/rawaddr/${BTCAddress}?cors=true&offset=${offset}`,
    type: 'get'
  });
};