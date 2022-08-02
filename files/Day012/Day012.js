const object = {
    "item-1": 1,
    "item-2": 2,
    "item-3": 3,
}

function sumOfValues(obj){

    for (value in obj){
       console.log(obj[value])
    }
}

const summed = sumOfValues(object)

