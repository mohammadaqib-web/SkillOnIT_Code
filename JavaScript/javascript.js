let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.indexOf(11));

console.log(arr.includes(11));

let find8 = arr.find((item, index) => {
  return item == 8;
});

let find8Short = arr.find((item) => item == 11);

console.log(find8, find8Short);

let addition = arr.reduce((a, b) => a + b);

console.log(addition);

let filterArr = arr.filter((item, index) => {
  return item < 5;
});

// modulus
console.log(filterArr);

// arr.push(6, 7, 8, 9, 10);
// arr.pop();

// arr.unshift(0, 1, 2);
// arr.shift();

// console.log(arr[0]);

// let newForEachArr = arr.forEach((item, index) => {
//   return item;
// });

// let newMapArr = arr.map((item, index) => {
//   return item * 10;
// });

// console.log(newMapArr);
