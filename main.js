var userLocation_result;
var currentUserWeather;
var pickedCuisine;

function pickRandomLocation(locationsArray) {
    var randomIndex = Math.floor(Math.random() * locationsArray.length);
    var randomLocation = locationsArray[randomIndex];
    return randomLocation;
}

function putPickedPlaceData(pickedPlace) {
    $('#location').text(pickedPlace.title);
    $('body').css('background-image','url('+pickedPlace.imgSrc+')');
}
function initialize() {
    applyClickHandlers();
    pickedCuisine = pickRandomLocation(locations);
    putPickedPlaceData(pickedCuisine);
    currentWeather();
}
function geoLocateCall(){
    $('body').addClass('hideOverflow');
    $('#firstPage').fadeOut(1000);
    $('#foodButton').unbind();
    console.log('hi');
    $.ajax({
        dataType:'json',
        method: 'post',
        url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2P0kN9ffis_AOZUH5jrHNYdwQ6oU7wI4',
        success: function(result){
            console.log('geolocation api running at', result);
            userLocation_result = result.location;
            yelpCall();
        }
    });

}
function applyClickHandlers() {
    $('#foodButton').click(geoLocateCall);
}
$(document).ready(function(){
    initialize();
});

function currentWeather(){
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var weatherAPI = 'https://api.darksky.net/forecast/40db894f8893c02949d84e53158e3c92/33.63486,-117.74053';
    console.log('weather box clicked');
    $.ajax({
        dataType:'json',
        method: 'get',
        url: proxy + weatherAPI,
        success: function(result){
            console.log('weather api running at', result);
            currentUserWeather = result;
            var currentSummary = currentUserWeather.currently.summary;
            var currentTemp = currentUserWeather.currently.apparentTemperature;
            var precipitationProbability = currentUserWeather.currently.precipPropbability;
            var windSpeed = currentUserWeather.currently.windSpeed;
            $('#weatherBox').text('Current Weather is '+ currentSummary + " Current temperature is " + currentTemp);
            (function(){
                if (currentSummary === 'Clear' | 'Sunny' |'Mostly Clear' | 'Mostly Sunny') {
                    var canvas = $('<canvas>').attr('id','weatherIcon').css('height','30px');
                    var skycons = new Skycons({"color": "gray"});
                    $('#weatherBox').append(canvas);
                    skycons.add("weatherIcon", Skycons.CLEAR_DAY);
                    skycons.play();
                }
            })();
        }
    });
}


//
// <canvas id="icon1" width="128" height="128"></canvas>
//     <canvas id="icon2" width="128" height="128"></canvas>
//     <script>
// var skycons = new Skycons({"color": "pink"});
// // on Android, a nasty hack is needed: {"resizeClear": true}
//
// // you can add a canvas by it's ID...
// skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
//
// // ...or by the canvas DOM element itself.
// skycons.add(document.getElementById("icon2"), Skycons.RAIN);
//
// // if you're using the Forecast API, you can also supply
// // strings: "partly-cloudy-day" or "rain".
//
// // start animation!
// skycons.play();
//
// </script>