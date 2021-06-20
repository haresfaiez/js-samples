var Sum = require('./sum');


function findSum() {
  const result = Sum.sum(1, 9) + Sum.sum(20, 22);
  return result;
}

findSum();
