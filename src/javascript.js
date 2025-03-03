// Day and Time

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();

minutes = minutes < 10 ? `0${minutes}` : minutes;
hour = hour < 10 ? `0${hour}` : hour;

let currentDay = document.querySelector("#current-date");
currentDay.innerHTML = `${day} ${date} ${month} ${year}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour}:${minutes}`;

// Search bar submit

let form = document.querySelector("#city-search");

form.addEventListener("submit", search);

// Changes for all elements

function displayTemp(response) {
  let tempElement = document.querySelector("#current-temp");
  let currentTemp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city-name");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind-speed");

  tempElement.innerHTML = currentTemp;
  cityElement.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windspeedElement.innerHTML = `${Math.round(response.data.wind.speed)}mph`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${searchInput.value}`;

  let apiKey = "702c489eb400ba895fo40tbf5ac5a039";
  let unit = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&unit=${unit}`;

  console.log(apiURL);

  axios.get(apiURL).then(displayTemp);
}