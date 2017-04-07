module.exports = (cards) => {
  let sum = cards.reduce((sum, n) => sum + n, 0);
  let max = 0;
  
  for (let i = 0; i < cards.length - 1; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      if ((sum - cards[i] - cards[j]) % 10 === 0) {
        let n = (cards[i] + cards[j]) % 10;
        if (n === 0) {
          return 10
        }
        max = Math.max(max, n);
      }
    }
  }
  
  return max;
};
