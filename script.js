const apiKey = 'b949b847e7f5c98c0803585ca5413fdf';
const searchButton = document.getElementById('search');
const cityInput = document.getElementById('city');
const weatherBox = document.querySelector('.weather-box');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                displayWeather(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
});

function displayWeather(data) {
    weatherBox.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
