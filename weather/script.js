const apiKey = "eb3956c97d18c4d30bed1e26b9adc18e"; 
const url = "https://openweathermap.org/api#current" +apiKey;
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weather-info");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value;
  if (city) {
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
  } else {
    alert("Please enter a city name.");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      return data;
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Error fetching weather data.");
  }
}

function displayWeather(data) {
  const location = document.getElementById("location");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  location.textContent = `Location: ${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}