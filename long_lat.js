$(document).ready(function () {
    $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/geolocation/v1/geolocate',
        method: 'post',
        api_key: 'AIzaSyD2P0kN9ffis_AOZUH5jrHNYdwQ6oU7wI4',
        success: function (response) {
            console.log('Response worked');
        }
    });
});