
// search input 
var searchInput = document.getElementById('search');

// Today Data 

var todayName = document.getElementById('today_date_day_name');
var todayNumber = document.getElementById('today_date_day_number');
var todayMonth = document.getElementById('today_date_month');
var todayLocation = document.getElementById('today_location');
var todayTemp = document.getElementById('today_temp');
var todayImg = document.getElementById('today_condition_img');
var todayText = document.getElementById('today_condition_text');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');
var windDirection = document.getElementById('wind_direction');

// Next Today

var nextTodayName = document.getElementsByClassName('next_day_name');
var nextImg = document.getElementsByClassName('next_condition_img');
var nextMaxTemp = document.getElementsByClassName('next_max_temp');
var nextMinTemp = document.getElementsByClassName('next_min_temp');
var nextText = document.getElementsByClassName('next_condition_text');

// get weather Data

async function getData(cityName="cairo"){
    let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3ea36a4f9ae7469ba19171729232110&q=${cityName}&days=3`);
    let weatherData= await weatherResponse.json();
    
    if(!weatherData.error) {
        displayTodayData(weatherData);
        displayNextData(weatherData);
  
}
}

getData();

// get weather Data Today
function displayTodayData(data){

     let todayDate = new Date();
     todayName.innerHTML = todayDate.toLocaleDateString('en-US', {weekday:'long'}); // name day
     todayNumber.innerHTML = todayDate.getDate(); // number day
     todayMonth.innerHTML = todayDate.toLocaleDateString('en-US', {month:'long'}) // name month

     todayLocation.innerHTML = data.location.name;
     todayTemp.innerHTML = data.current.temp_c;
     todayImg.setAttribute('src',data.current.condition.icon)
     todayText.innerHTML = data.current.condition.text;
     humidity.innerHTML = data.current.humidity+"%";
     wind.innerHTML = data.current.wind_kph+"km/h";
     windDirection.innerHTML = data.current.wind_dir;

}

// get weather Data Next Today
function displayNextData(data) {

    let forecastData = data.forecast.forecastday;

    for (let i = 0; i < 2; i++) {
        let nextDate = new Date(forecastData[i+1].date);
        nextTodayName[i].innerHTML = nextDate.toLocaleDateString('en-US', {weekday:'long'});
        nextImg[i].setAttribute('src', forecastData[i+1].day.condition.icon) 
        nextMaxTemp[i].innerHTML = forecastData[i+1].day.maxtemp_c;
        nextMinTemp[i].innerHTML = forecastData[i+1].day.mintemp_c;
        nextText.innerHTML = forecastData[i+1].day.condition.text
    }
    
}


searchInput.addEventListener('input', function(){
    getData(searchInput.value)
})




































































// // Today variables 
// let todayName = document.getElementById("today_date_day_name")
// let todayNumber = document.getElementById("today_date_day_number")
// let todayMonth = document.getElementById("today_date_month")
// let todayLocation = document.getElementById("today_location")
// let todayTemp = document.getElementById("today_temp")
// let todayConditionImg = document.getElementById("today_condition_img")
// let todayConditionText = document.getElementById("today_condition_text")
// let humidity = document.getElementById("humidity")
// let wind = document.getElementById("wind")
// let windDirection = document.getElementById("wind_direction")

// // next data 
// let nextDay = document.getElementsByClassName("next_day_name")
// let nextMaxTemp = document.getElementsByClassName("next_max_temp")
// let nextMinTemp = document.getElementsByClassName("next_min_temp")
// let nextConditionImg = document.getElementsByClassName("next_condition_img")
// let nextConditionText = document.getElementsByClassName("next_condition_text")

// // search input 
// let searchInput = document.getElementById("search")

// // Fetch API Data
// async function getWeatherData(cityName)
// {
//     let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=71dbd040c45b418aa92175158231802&q=${cityName}&days=3`)
//     let weatherData = await weatherResponse.json()
//     return weatherData
// }


// // display Today data
// function displayTodayData(data)
// {
//     let todayDate = new Date()
//     todayName.innerHTML = todayDate.toLocaleDateString("en-US",{weekday:"long"})
//     todayNumber.innerHTML = todayDate.getDate()
//     todayMonth.innerHTML = todayDate.toLocaleDateString("en-US",{month:"long"})
//     todayLocation.innerHTML = data.location.name
//     todayTemp.innerHTML = data.current.temp_c
//     todayConditionImg.setAttribute("src",data.current.condition.icon)
//     todayConditionText.innerHTML = data.current.condition.text
//     humidity.innerHTML = data.current.humidity+"%"
//     wind.innerHTML = data.current.wind_kph+"km/h"
//     windDirection.innerHTML = data.current.wind_dir
// }


// // display next days data
// function displayNextData(data)
// {
//     let forecastData = data.forecast.forecastday
//     for(let i = 0 ; i < 2 ; i++)
//     {
//         let nextDate = new Date(forecastData[i+1].date)
//         nextDay[i].innerHTML = nextDate.toLocaleDateString("en-US",{weekday:"long"})
//         nextMaxTemp[i].innerHTML = forecastData[i+1].day.maxtemp_c
//         nextMinTemp[i].innerHTML = forecastData[i+1].day.mintemp_c
//         nextConditionImg[i].setAttribute("src",forecastData[i+1].day.condition.icon)
//         nextConditionText[i].innerHTML = forecastData[i+1].day.condition.text
//     }
// }


// // start app
// async function startApp(city="london")
// {
//     let weatherData = await getWeatherData(city)
//     if(!weatherData.error)
//     {
//         displayTodayData(weatherData)
//         displayNextData(weatherData)
//     }
// }

// startApp()


// searchInput.addEventListener("input",function(){
//     startApp(searchInput.value)
// })