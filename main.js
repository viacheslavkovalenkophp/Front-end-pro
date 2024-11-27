const apiKey = '17997f2169fa8bc3c87af47d5f493ef0';
const city = 'Kharkiv';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const updateButton = document.querySelector('#update');
const weatherDisplay = document.querySelector('#weather');

function fetchWeather() {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();
        })
        .then((data) => {
            const { main, weather, name } = data;
            weatherDisplay.innerHTML = `
        <h2>Погода в ${name}</h2>
        <p>${weather[0].description}</p>
        <p>Температура: ${main.temp}°C</p>
        <p>Влажность: ${main.humidity}%</p>
      `;
        })
        .catch((error) => {
            weatherDisplay.innerHTML = `<p>Не удалось получить данные: ${error.message}</p>`;
        });
}
fetchWeather();
updateButton.addEventListener('click', fetchWeather);
