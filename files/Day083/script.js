// Array CheatSheet
// An Array is a single variable that can store multiple items
// Array saved globally will be changed
const array = [1, 2, 3, 4];

function myArray(value) {
  console.log("hello from function", value);
}
myArray(array);

// log entire array
myArray(array);

// length of array
myArray(array.length);

// index position
myArray(array[0]);

// Push to end of array
myArray(array.push(5));

// shift last item out of array
myArray(array.shift());

// pop last element & return value
myArray(array.pop());

myArray(array);
