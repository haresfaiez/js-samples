function increment(x) {
  let result = x + 1;
  return result;
}

function calculate(a, b) {
  let result = increment(a) + b;
  return result;
}

calculate(2, 42);
