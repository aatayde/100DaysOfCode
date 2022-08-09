const array = [1,2,3,4,5]

// Sum values in array using Reduce method
const initialValue = 0;
const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
)

console.log("sum of values: ",sumWithInitial)