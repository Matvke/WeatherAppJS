export class Application {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.containerId = containerId;
  }

  async run(latitude, longitude) {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=150e522355936bef0644d511517eec32`);
      const data = await res.json();

      if (res.status !== 200) {
          alert(data.message);
      } else {
          this.render(data, latitude, longitude);
      }
      console.log(res.status)
  }

  render(data, latitude, longitude) {
      const apiKey = 'vN-2rJY5XBcjZCp7pJ3aHEfU5C2GUhENFyzDx3Q3DpY';
      const mapUrl = `https://image.maps.hereapi.com/mia/v3/base/mc/overlay:padding=32/800x350/png?apiKey=${apiKey}&overlay=point:${latitude},${longitude};label=&style=lite.day&scaleBar=km`;

      this.container.innerHTML = `
      <div class="border">
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
          </div>
          <img class="map" src="${mapUrl}" alt="Weather map for ${data.name}">
          <button class="remove-widget" onclick="removeWidget('${this.containerId}')">Удалить</button>
      </div>
      `;
  }
}
