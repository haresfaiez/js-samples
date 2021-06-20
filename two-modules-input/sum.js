function increment(x) {
  let result = x + 1;
  return result;
}

function augment(it) {
  let result = increment(it) + 1;
  return result;
}

function sum(a, b) {
  let result = augment(a) + augment(b);
  return result;
}

module.exports = { sum: sum };
