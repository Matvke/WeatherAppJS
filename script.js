document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    getData(latitude, longitude);
});

async function getData(latitude, longitude) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=150e522355936bef0644d511517eec32`);
    const data = await res.json();

    if (res.status !== 200) {
        alert(data.message);
    }
    else{
        createWeather(data);
    }
    console.log(res.status);
}
function createWeather(data){
    console.log(data);
    document.querySelector('.weather').innerHTML = 
    `
    <div class="left">
                <span class="city"><b>${data.name}</b></span>
                <span>Влажность: <span class="humidity">${data.main.humidity}%</span></span>
                <span>Скорость ветра: <span class="wind">${Math.round(data.wind.speed)} м/с</span></span>
            </div>
            <div class="right">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <span class="temperature">${Math.round(data.main.temp - 273)}°C</span>
            </div>`;
}