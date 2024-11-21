import { Application } from "./application.js";

document.getElementById('weather-form').addEventListener('submit', e => {
    e.preventDefault();
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
  
    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Введите корректные значения широты и долготы');
    } else {
        weatherWidget.run(latitude, longitude);
        weatherWidget1.run(latitude, longitude);        
    }
  });

// виджеты
const weatherWidget = new Application('widget-container');
const weatherWidget1 = new Application('widget-container1');

