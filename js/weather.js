const WEATHER_API_KEY = "f1415bdc7fdf19aa93857a104178d7ee"
let place = document.querySelector("#weather span:nth-child(1)")
let weather = document.querySelector("#weather span:nth-child(2)")
let temp = document.querySelector("#weather span:nth-child(3)")


function onLocation (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      place.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

function offLocation () {
  alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onLocation, offLocation)

