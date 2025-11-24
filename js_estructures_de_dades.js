// Exercici 1:

let nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

nums.sort((a, b) => a - b);

let primer = nums[0];
let ultim = nums[nums.length - 1];

console.log("Array ordenat:", nums);
console.log("Primer:", primer);
console.log("Últim:", ultim);

// Exercici 2:.

