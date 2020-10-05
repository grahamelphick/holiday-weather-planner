//Loction API

$(document).ready(function () {
    //console.log("hello World");

    //API Key
    var apiKey = "AIzaSyD51Xnuhy0Fa--8C553LeKhC0F-ZywEDDE"

    let locationName = document.getElementById("locationInput");




    //On Click function for starting the search based on input
    $(".searchbtn").on("click", function () {
        console.log("btn clicked");
        //let userLocation = locationName.value;
        //console.log(userLocation);

        var userLocation = "Perth";
        let queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + userLocation + "%20Museum%20&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + apiKey

       //https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyD51Xnuhy0Fa--8C553LeKhC0F-ZywEDDE

        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: 'jsonp',
        })

            .then(function (response) {
                var results = response.data;

                console.log(results);


            })






    })

})