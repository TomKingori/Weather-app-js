const time_el = document.getElementById('time');
const date_el = document.getElementById('date');
const currentweatheritems_el = document.getElementById('current-weather-items');
const timezone_el = document.getElementById('time-zone');
const country_el = document.getElementById('country');
const weatherforecast_el = document.getElementById('current-temp');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug',
'Sep','Oct','Nov','Dev'];

const API_KEY = '';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hourformatted = hour >= 13 ? hour %12: hour;
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM';

    time_el.innerHTML = hourformatted + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

    date_el.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);

getWeatherData()

function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
        .then(res => res.json()).then(data => {
            console.log(data);
        })
    })
}