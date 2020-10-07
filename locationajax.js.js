//Loction API

$(document).ready(function () {
    //console.log("hello World");

    //API Key
    //var apiKey = "fQl4uruJbRL1M63hlwlIHhzLJM-rEFeK6InNrpXx5o0"

    //var baseURL = "https://places.ls.hereapi.com/places/v1"

    //var action = "/discover/explore"
    //var URL = baseURL + action + "?cat=sights-museums&at=52.531,13.3843&apiKey=" + apiKey

    //Write Code to Geolocation of User and then = at

    //

    function requestData(what) {
        $.ajax({
            url: 'https://places.ls.hereapi.com/places/v1/discover/explore',
            type: 'GET',
            data: {
                at: '52.5159,13.3777',
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
        console.log(what);
        requestData(what);
    });

})



//Third API" Convert Google Map"
//Browser Location to get UserLocation
//Offer User Buttons for Activities
