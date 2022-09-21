// Math.random returns a decimal value
let RNG = Math.random()

console.log(RNG)
// Math.floor returns a non decimal value
console.log(Math.floor(RNG))
// multiply RNG by 10 to return a whole number from 0 - 9
console.log(Math.floor(RNG * 10))
// Return value form 0-10
console.log(Math.floor(RNG * 11))
// Return a number from 1-100
console.log(Math.floor((RNG * 100) + 1))

// RNG return function with min & max perameters
function getRNG(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

console.log(getRNG(1,10))

document.getElementById('rng').textContent = getRNG(1,6)