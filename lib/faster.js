module.exports = (cards) => {
  let sum = cards.reduce((sum, n) => sum + n, 0);
  let max = 0;
  let middleSum = [];
  
  for (let i = 0; i < 56; i++) middleSum.push(-0xfffff);
  
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      middleSum[i * 10 + j] = cards[i] + cards[j];
    }
  }
  
  for (let s = 0; s < middleSum.length; s++) {
    if (middleSum[s] < 0) continue;
    const i = Math.floor(s / 10);
    const j = s % 10;
    for (let k = 0; k < cards.length; k++) {
      if (k !== i && k !== j && (cards[i] + cards[j] + cards[k]) % 10 === 0) {
        let n = (sum - cards[i] - cards[j] - cards[k]) % 10;
        if (n === 0) {
          n = 10;
        }
        max = Math.max(max, n);
      }
    }
  }
  return max;
};
