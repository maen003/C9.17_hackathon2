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
    displayYelp();
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
            $('#weatherBox').text(currentTemp + String.fromCharCode(176));
            (function(){
                if (currentSummary === 'Clear' | 'Sunny' |'Mostly Clear' | 'Mostly Sunny') {
                    var canvas = $('<canvas>').attr('id','weatherIcon').css('height','30px').css('position','absolute').css('top','10px');
                    var skycons = new Skycons({"color": "white"});
                    $('#weatherBox').append(canvas);
                    skycons.add("weatherIcon", Skycons.CLEAR_DAY);
                    skycons.play();
                }
            })();
        }
    });
}