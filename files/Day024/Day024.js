var MY_KEY = config.key
var url = "https://api.weatherapi.com/v1/current.json?key=" + MY_KEY + "&q=seattle&aqi=no"


console.log(url)
function getWeather(){

    let location = document.getElementById('location')
    let temp = document.getElementById('temp')
    let condition = document.getElementById('condition')

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            condition.innerText = data.current.condition.text; 
            location.innerText = data.location.name;
            temp.innerText = data.current.temp_f;
        })
        // .then((data) => console.log(data.current.condition.text))
    
        
        
}
        
getWeather()

// location.name
// location.region
// current.temp_f
// condition.text