
    function createIconUrl(iconcode) {
        return "https://openweathermap.org/img/w/" + iconcode + ".png";

    }
    function searchLocationWeather(lat , lon) {

        const APIKey = "88afaf5d902bd0951e5afcfd34451691";
        
        // current weather forecast URL //
        const queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=88afaf5d902bd0951e5afcfd34451691";
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            
            $(".currentDate").html(moment(response.dt_txt).format('YYYY-MM-DD'));
            $(".weatherIcon").attr("src", createIconUrl(response.weather[0].icon));
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("temp: " + (response.main.temp-273.15).toFixed(2)+"C");
        });

    };
  
    
