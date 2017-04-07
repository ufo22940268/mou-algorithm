/**
 * Created by cc on 07/04/2017.
 */
"use strict";

module.exports = (cards) => {
  let sum = cards.reduce((sum, n) => sum + n, 0);
  let max = 0;
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        if ((cards[i] + cards[j] + cards[k]) % 10 === 0) {
          let n = (sum - cards[i] - cards[j] - cards[k]) % 10;
          if (n === 0) {
            n = 10;
          }
          max = Math.max(max, n);
        }
      }
    }
  }
  return max;
};
