let nums = [1, 12, 23, 3, 55, 6];

let total = nums.reduce((total, currentValue) => total + currentValue);
console.log(total);

let max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);

let sort = nums.sort((a, b) => a - b);
console.log(sort);

let names = "nurettin";
let lastname = "bayram";
let age = 29;
let info = "my name is" + names + lastname + " and i'm " + 29 + " years old";
console.log(info);
