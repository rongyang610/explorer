export const fetchTx = (hash) => {
  return fetch(`https://blockchain.info/rawtx/${hash}?cors=true`).then(res => res.json());
};
