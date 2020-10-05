$(document).ready(function () {

    function createIconUrl(iconcode) {
        return "https://openweathermap.org/img/w/" + iconcode + ".png";

    }
    function searchWeather(city) {

        const APIKey = "88afaf5d902bd0951e5afcfd34451691";
        
        // current weather forecast URL //
        const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=88afaf5d902bd0951e5afcfd34451691";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });

    };
  searchWeather("Perth")
    
})