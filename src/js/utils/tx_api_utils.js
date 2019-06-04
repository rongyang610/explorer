export const fetchTx = (hash) => {
  return fetch(`https://blockchain.info/rawblock/$block_hash${hash}?cors=true`).then(res => res.json());
};
