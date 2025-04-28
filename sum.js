function calculateSum(a, b) {
  console.log(a+b)
};

const x = "hello world!";

module.exports.calculateSum = calculateSum;
module.exports.x = x;

console.log(module.exports)