$(document).ready(function () {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var yelpApi = 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=33.634858033&longitude=-117.7404640&Authorization=Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx';
    $.ajax({
        dataType: 'json',
        method: 'get',
        url: proxy + yelpApi,
        headers: {Authorization: 'Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx'},
        term: 'delis',
        latitude: 33.634858033,
        longitude: 117.8265,
        success: function (response) {
            console.log('Yelp response worked', response);
        }
    });
});