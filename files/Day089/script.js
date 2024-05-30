let circle = document.getElementById("circle");

function updateColor() {
  let RNG = Math.random();

  // console.log(Math.floor(RNG));
  let hue = Math.floor(RNG * 360 + 1);
  let saturation = Math.floor(RNG * 100 + 1);
  let lightness = Math.floor(RNG * 100 + 1);
  let hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  circle.style.backgroundColor = hsl;
}

setInterval(updateColor, 1600);
