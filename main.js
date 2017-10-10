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
    pickedCuisine = pickRandomLocation(locations);
    putPickedPlaceData(pickedCuisine);
}

$(document).ready(function(){
    initialize();
    $('#foodButton').click(function(){
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
    });



    $('#weatherBox').click(function(){
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
                $('#weatherBox').text('Current Weather is '+ currentSummary + " Current temperature is " + currentTemp + " Current Wind Speed is "+ windSpeed)
            }
        });
    })


});
