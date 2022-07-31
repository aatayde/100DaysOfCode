const startingVelocity = document.getElementById('startingV');
const finalVelocity = document.getElementById('finalV');
const time = document.getElementById('time');
const answer = document.getElementById('answer');

console.log(startingV.value)
console.log(finalV.value)
console.log(time.value)

function calculate(finalV, startingV, time ){
    answer.innerText  = (finalV - startingV) / time
}

