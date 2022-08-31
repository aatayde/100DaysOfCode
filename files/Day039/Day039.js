// Pizza Calculator

// Store values of inputs
let diameterA = document.getElementById('diameterA').value
let diameterB = document.getElementById('diameterB').value

const pi = Math.PI

console.log('pi: ', pi)

// Find Radius
function findRadius(diameter) {
    return diameter / 2
}

// save radius values
let radiusA = findRadius(diameterA)
let radiusB = findRadius(diameterB)

// Test Values
console.log('Radius for diameter A: ', radiusA);
console.log('Radius for diameter B: ', radiusB);

// Find Area
function findArea (radius) {
    return (Math.pow((pi * radius), 2))
}

// save area values
let areaA = findArea(radiusA); 
let areaB = findArea(radiusB);

console.log('Area of two pizzas: ', areaA)
console.log('Area of one bigger pizza: ', areaB)

// Calculate function
function calculate(A, B) {
    if (A * 2 > B) {
        console.log('Area of two Pizzas is greater than one larger pizza')
    } else {
        console.log('area of bigger pizza is greater than two pizzas')
    }
}