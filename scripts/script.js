import { Application } from "./application.js";

document.getElementById('weather-form').addEventListener('submit', e => {
    e.preventDefault();
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);

    if (isNaN(latitude) || isNaN(longitude)) {
        alert('Введите корректные значения широты и долготы');
    } else {
        const widgetContainer = document.createElement('div');
        const uniqueId = `widget-container-${Date.now()}`;
        widgetContainer.id = uniqueId;
        document.getElementById('widgets').appendChild(widgetContainer);

        const weatherWidget = new Application(widgetContainer);
        weatherWidget.run(latitude, longitude);
    }
});

window.removeWidget = function(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.remove();
    }
}
