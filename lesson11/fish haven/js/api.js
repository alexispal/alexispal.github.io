const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6a75ea9bff90407ac460f2b0f0297e8b';

fetch(currentAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log("info"+jsObject);
         console.log("inside");
       
     document.getElementById('current').textContent = jsObject.weather[0].description;

     console.log(jsObject.weather[0].description);
     document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
     document.getElementById('humidity').textContent = jsObject.main.humidity;
     document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(1);
     
    

     function windChill() {
       var temp = parseInt(document.getElementById("temp").innerText);
       var speed = parseInt(document.getElementById("speed").innerText);
       var result = calculatechill(temp, speed);

       if ((temp <= 50) && (speed >= 3.0)) {
         document.getElementById("chill").innerText = result.toFixed() + " °F";
       } else {
         document.getElementById("chill").innerText = "N/A";
       }
     }

     function calculatechill(temp, speed) {
       var calculatechill = (35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp *(speed**0.16)));
       return calculatechill;
     }
     windChill();
    });

//Forecast//
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6a75ea9bff90407ac460f2b0f0297e8b';

fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {
                console.log("day");
                var date = new Date(day.dt_txt);
                var dayName = dayNames[date.getDay()];
                document.getElementById("day" + day_count).textContent = dayName;

                const f = (day.main.temp);
                var fahrenheit = f.toFixed(0);
                document.getElementById("temp" + day_count).textContent = fahrenheit;
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';  
                console.log(imagesrc);
                let desc = day.weather[0].description;
                let idimg = 'forecast-img' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); 
                // document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }

    });

    function KtoF(kelvin){
        return (((kelvin - 273.15) * 9) / 5) + 32;
    }
     //Events//
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        var town = document.getElementsByTagName("h2")[0].textContent;
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Preston' && town == "Preston Idaho") {
                let townevents = document.createElement('ul');

                for (let j = 0; j < towns[i].events.length; j++) {
                    let event = document.createElement('li');
                    event.textContent = towns[i].events[j];
                    townevents.appendChild(event);
                }

                document.querySelector('div.events').appendChild(townevents);
            }
            else if (towns[i].name == 'Soda Springs' && town == "Soda Springs Idaho") {
                let townevents = document.createElement('ul');

                for (let j = 0; j < towns[i].events.length; j++) {
                    let event = document.createElement('li');
                    event.textContent = towns[i].events[j];
                    townevents.appendChild(event);
                }

                document.querySelector('div.events').appendChild(townevents);
            }
            else if (towns[i].name == 'Fish Haven' && town == "Fish Haven Idaho") {
                let townevents = document.createElement('ul');

                for (let j = 0; j < towns[i].events.length; j++) {
                    let event = document.createElement('li');
                    event.textContent = towns[i].events[j];
                    townevents.appendChild(event);
                }

                document.querySelector('div.events').appendChild(townevents);
            }
        }
    });