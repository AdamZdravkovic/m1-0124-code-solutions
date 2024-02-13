'use strict';
/* exported oddOrEven */
const oddOrEven = (numbers) => {
  const num = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      num.push('even');
    } else {
      num.push('odd');
    }
  }
  return num;
};
