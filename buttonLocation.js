//Loction API

$(document).ready(function () {

    //Var Declaration
    var resultDiv= document.getElementById("results")
    //console.log(resultDiv);
    var introDiv= document.getElementById("intro")
    //console.log(introDiv);


    //Get Geolocation of the User
    var where = ""

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    //function for retrieving the geodata from the User
    //Successful
    function success(pos) {
        var crd = pos.coords;
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        where = crd.latitude + "," + crd.longitude + ";r=30000";
        console.log(where);
        searchLocationWeather(crd.latitude, crd.longitude)
    }
    //Unsuccessful
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        $('.modal').modal();
        $('#modal1').modal('open');
        event.preventDefault;
        // alert("Sorry, this app requires your location to work. Please allow access to your location.");
    }
    $("#agreebtn").click(function(){
        window.location.reload();
    });
    navigator.geolocation.getCurrentPosition(success, error, options);


    //API Key: "svaY28TziQvERQtErWdRG4N5KBUlJ4npN36uBx92V0"

    //var baseURL = "https://places.ls.hereapi.com/places/v1"

    //var action = "/discover/explore"
    //var URL = baseURL + action + "?cat=sights-museums&at=52.531,13.3843&apiKey=" + apiKey

    //Write Code to Geolocation of User and then = at

    //LOCATION API == HERE PLACES API

    function requestData(what, where) {
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
        // var placeID = data.results.items[0].id;
        // var html = "";
        $("#results").empty()
        data.results.items.slice(0, 10).forEach(element => {
            var placeID = element.id;
            var queryLink = "https://wego.here.com/australia/perth/sights-museums/scitech-discovery-centre--" + placeID + "?map=-31.94284,115.84912,15,normal";
            var anchorLink = $("<a>");
            anchorLink.text(element.title);
            anchorLink.attr("href", queryLink);
            anchorLink.attr("target", "_blank");
            anchorLink.append($("<br>"));
            $("#results").append(anchorLink);
            // $( ".inner" ).append( "<p>Test</p>" );

            // $("#results").append($("<a>").val(element.title).attr("href", queryLink));
            // html += $("<a>").val(element.title).attr("href", queryLink);
        });
        // $("#results").html(html)
        // var placeLat = data.results.items[0].position[0];
        // var placeLong = data.results.items[0].position[1];
        // var
        // data.results.items.slice(0, 10).forEach("click", function () {
        //     var queryLink = "https://wego.here.com/australia/perth/sights-museums/scitech-discovery-centre--" + placeID + "?map=-31.94284,115.84912,15,normal"
        //     $("<a>").val(queryLink);
        // })
           
        
    }

    //On Click functions for starting the search
    $(".filterBtn").on("click", function () {
        console.log("btn clicked");
        introDiv.style.display = "none";
        var what = this.textContent;
        console.log(what, where);
        requestData(what, where);
    });


})


//Results Display
//HTML