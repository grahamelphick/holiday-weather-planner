function renderWeatherResults() {

    var minTemp = response.main.temp_min;
    var maxTemp = response.main.temp_max;
    var currentDate = moment().format("MMM Do YY");
    var placeName = response.name;
    var iconID = response.weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";

    $("<br>")
    $("<p>").text(placeName + " " + "(" + currentDate + ")").appendTo("#searchbtn");
    $("<br>")
    $("<img>").attr("src", weatherIcon).appendTo("#searchbtn");
    $("<br>")
    $("<p>").text("Min: " + minTemp + " ℃").appendTo("#searchbtn");
    $("<br>")
    $("<p>").text("Max: " + maxTemp + " ℃").appendTo("#searchbtn");
    $("<br>")
    $("<h3>").text("Here's some suggestions for your day:").appendTo("#results");
    $("")

};

// open today? true false?
// photos
// name
// types
// icon?
// vicinity