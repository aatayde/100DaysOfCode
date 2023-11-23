// Array CheatSheet
// An Array is a single variable that can store multiple items
// Array saved globally will be changed
const array = [1, 2, 3];

function myArray(value) {
  console.log(value, array);
}

// log entire array
// myArray(array);

// length of array
[1, 2, 3].length;
myArray(array.length);

// index item position
[1, 2, 3][0];
myArray(array[0]);

// add item to end of array
[1, 2, 3].push(4);
myArray(array.push(4));

// add item to begining of array
[1, 2, 3].unshift(0);
myArray(array.unshift(0));

// remove first item from array
[1, 2, 3].shift();
myArray(array.shift());

// remove last item from array
[1, 2, 3].pop();
myArray(array.pop());

// return value of index
[1, 2, 3].at(2);
myArray(array.at(2));

// returns first index of value
[1, 2, 3].indexOf(3);
myArray(array.indexOf(3));

// determines if array includes value
[1, 2, 3].includes(1);
myArray(array.includes(1));

// creates new array with results of provided function on every element
[1, 2, 3].map((num) => Math.pow(num, 2));
myArray(array.map((num) => Math.pow(num, 2)));

// creates shallow copy of portion of array if passes test of given function
[1, 2, 3].filter((num) => num % 2);
myArray(array.filter((num) => num % 2));

// test all values in array returns boolean
[1, 2, 3].every((num) => num > 1);
myArray(array.every((num) => num > 1));

// tests weather at least one elemet passes the test implemented by the function
[1, 2, 3].some((num) => num == 3);
myArray(array.some((num) => num == 3));

// change all elements in array to a static value
[1, 2, 3].fill(10);
myArray(array.fill(10));
