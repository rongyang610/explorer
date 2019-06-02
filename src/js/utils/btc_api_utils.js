export const fetchBTCAddressDetail = (BTCAddress) => {
  return $.ajax ({
    url: `https://blockchain.info/rawaddr/${BTCAddress}?cors=true`,
    type: 'get'
  });
};