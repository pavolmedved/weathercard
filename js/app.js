// let url='https://api.openweathermap.org/data/2.5/weather?q=Chicago,usa&appid=8f08bfa1924ccf73e0e02de6549ffdd6' 

// $.ajax({
//     url: url,
//     dataType: "jsonp",
//     success: function (data) {
//       console.log(data)
//       alert(data);
//     }
//   });


function dataWeather(){
    let name = $("#weather-form input[name=name]").val()
    let country = $("#weather-form input[name=country]").val()


$.get('https://api.openweathermap.org/data/2.5/weather?q=' + name + ',' + country + '&appid=8f08bfa1924ccf73e0e02de6549ffdd6', function(data){
    console.log(data)
        let high = (data.main.temp_max - 273.15) * 9/5 + 32
        let low = (data.main.temp_min - 273.15) * 9/5 + 32
        let forecast = (data.weather[0].description)
        let humidity = (data.main.humidity)
    



    $("#WeatherHigh").text(Math.round(high))
    $("#WeatherLow").text(Math.round(low))
    $("#WeatherForecast").text(forecast)
    $("#WeatherHumidity").text(humidity)


})
}
