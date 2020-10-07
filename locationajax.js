//Loction API

$(document).ready(function () {

    var where = ""
    //Get Geolocation of the User

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        //console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        where = crd.latitude + "," + crd.longitude;
        console.log(where);
        
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);

    //API Key: "svaY28TziQvERQtErWdRG4N5KBUlJ4npN36uBx92V0"

    //var baseURL = "https://places.ls.hereapi.com/places/v1"

    //var action = "/discover/explore"
    //var URL = baseURL + action + "?cat=sights-museums&at=52.531,13.3843&apiKey=" + apiKey

    //Write Code to Geolocation of User and then = at

    //LOCATION API == HERE PLACES API

    function requestData(what,where) {
        $.ajax({
            url: 'https://places.ls.hereapi.com/places/v1/discover/explore',
            type: 'GET',
            data: {
                at: where,
                cat: what,
                apiKey: '-svaY28TziQvERQtErWdRG4N5KBUlJ4npN36uBx92V0'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
            },
            success: function (data) {
                console.log(data);
                populateResults(data);
            }
        });
    }


    function populateResults(data) {
        html = "";
        data.results.items.forEach(element => {
            html += element.title + "<br>";
        });
        $("#results").html(html)
    }

    //On Click function for starting the search based on input
    $(".searchbtn").on("click", function () {
        console.log("btn clicked");
        var what = $("#WhatText").val();
        console.log(what,where);
        requestData(what,where);
    });

})



//Third API" Convert Google Map"
//Browser Location to get UserLocation
//Offer User Buttons for Activities
