const object = {
    "item-1": 1,
    "item-2": 2,
    "item-3": 3,
}

function sumOfValues(obj){
let sum = 0;
    for (value in obj){
       sum += parseFloat(obj[value])
    }
    return sum;
}

const summed = sumOfValues(object)
console.log("Sum of values: ", summed)

