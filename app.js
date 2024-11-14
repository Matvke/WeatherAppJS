document.getElementById('weather-form').addEventListener('submit', e => {
    e.preventDefault();
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
  
    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Введите корректные значения широты и долготы');
    } else {
        weatherWidget.update(latitude, longitude);
        weatherWidget1.update(latitude, longitude);
    }
  });
  

class WeatherWidget {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
      }

    async update(latitude, longitude) {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=150e522355936bef0644d511517eec32`);
        const data = await res.json();

        if (res.status !== 200) {
            alert(data.message);
        } else {
            this.render(data);
        }
        console.log(res.status)
    }

    render(data) {
        this.container.innerHTML = `
        <div class="card">
            <div class="left">
                <span class="city"><b>${data.name}</b></span>
                <span>Влажность: <span class="humidity">${data.main.humidity}%</span></span>
                <span>Скорость ветра: <span class="wind">${Math.round(data.wind.speed)} м/с</span></span>
            </div>
            <div class="right">
                <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <span class="temperature"><b>${Math.round(data.main.temp - 273.15)}°C</b></span>
            </div>
        </div>`;
    }
}

// ВИДЖЕТЫ
const weatherWidget = new WeatherWidget('widget-container');
const weatherWidget1 = new WeatherWidget('widget-container1');
