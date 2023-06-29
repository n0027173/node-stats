let ss = require("simple-statistics");
let numbers = [ 62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

let minNumbers = ss.min(numbers);
console.log("Min Number: " + minNumbers);

let maxNumbers = ss.max(numbers);
console.log("Max Number: " + maxNumbers);

let sumSimpleNumbers = ss.sumSimple(numbers);
console.log("Sum Simple Number: " + sumSimpleNumbers);

let meanNumbers = ss.mean(numbers);
console.log("Mean Number: " + meanNumbers);



