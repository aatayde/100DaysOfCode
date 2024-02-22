const power = Number(document.getElementById("power").value);
const storage = Number(document.getElementById("storage").value);

let calculate = document.getElementById("calculate");

function updateTime() {
  document.getElementById("minutes").innerText = (storage / power) * 60;
}

function handleEvent(event) {
  console.log(power);
  console.log(storage);

  updateTime();
}

calculate.addEventListener("click", handleEvent);
