export const fetchTx = (hash) => {
  return fetch(`https://blockchain.info/rawblock/$block_hash${hash}`).then(res => res.json());
};
