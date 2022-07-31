// initialize array
const myArray = [100, 9540, 1.1, -3, 0]

// log my array
console.log(myArray)

// sort array by accending order (small to big)
console.log(myArray.sort())

console.log("length of array myArray: ", myArray.length)

const myCharacter = [
    {
        name: "Saint",
        class: "Cleric",
        age: 33,
        attributes: {
            str: 5,
            dex: 7,
            faith: 50,
            int: 13,
            luck: 1,
        },
        phrases: ["Ready to heal", "I'm healing you! Now, stop dying"]
    }
]

console.log(myCharacter)

const fruits = ["apple", "banana", "cherry", "orange"]
console.log("list of fruits: ", fruits)

// Return index of item with indexOf
console.log("Index of apple: ", fruits.indexOf("apple"))

// Check if item is in list
console.log("Durian in list: ", fruits.includes("durian"))

// Add item to array
fruits.push("Durian")
console.log(fruits)

// remove last item from array
fruits.pop()
console.log(fruits)

// remove first item in array
fruits.shift("apple")
console.log(fruits)

// add item to begining of array
fruits.unshift("mango")
console.log(fruits)
