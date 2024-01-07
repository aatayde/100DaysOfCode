// const array = [1,2,3,4,5]
const numbers = [139, 135, 122, 168, 100];
// Sum values in array using Reduce method

// const initialValue = 0;
// Initial value can be removed because it can be assigned within the arrow funtion
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  return accumulator + currentValue;
}, 0);

console.log("sum of values: ", sum);
console.log("median value: " + sum / numbers.length);
