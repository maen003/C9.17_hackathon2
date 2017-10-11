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
    currentWeather();
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
        $('#firstPage').fadeOut(1000);
        var googleMaps = $('<div>').attr('id','googleMaps').css('height','45%').css('width','80%').css('margin-left','10%').css('opacity','0.9');
        var yelpInfo = $('<div>').attr('id','yelpInfo');
        var yelpPicture = $('<div>').attr('id','yelpPicture');
        $('#mainPage').append(yelpInfo, yelpPicture);
        $('#mainPage').append(googleMaps);
        $('#googleMaps').css('top','10%');
        setTimeout(initMap,1500);
        // $('#googleMaps').fadeIn(2000);
        // initMap();
    });


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
            $('#weatherBox').text('Current Weather is '+ currentSummary + " Current temperature is " + currentTemp + " Current Wind Speed is "+ windSpeed)
        }
    });
}



function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: {lat: 33.63486, lng: -117.74053},
        zoom: 12,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
    // var marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map
    // });

}