var MY_KEY = config.key
var url = "https://api.weatherapi.com/v1/current.json?key=" + MY_KEY + "&q=seattle&aqi=no"

console.log('hello, World')
console.log(url)

fetch(url)
  

// location.name
// location.region
// current.temp_f
// condition.text