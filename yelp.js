var yelpName;
var yelpPicture;
var yelpAddress;
var yelpInfo;

function yelpCall() {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var yelpApi = 'https://api.yelp.com/v3/businesses/search?term=' + pickedCuisine.foodType + '&latitude=' + userLocation_result.lat +'&longitude=' + userLocation_result.lng +'&Authorization=Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx';
    $.ajax({
        dataType: 'json',
        method: 'get',
        url: proxy + yelpApi,
        headers: {Authorization: 'Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx'},
        success: function (response) {
            console.log('Yelp response worked', response);
            randomizeBusiness(response);
            addDescription();
        }
    });
}

function randomizeBusiness(response) {
    var randomIndex = Math.floor(Math.random() * 6);
    var pickedBusiness = response.businesses[randomIndex];
    console.log('Random business pick was', pickedBusiness);
    yelpPicture = pickedBusiness.image_url;
    yelpName = pickedBusiness.name;
    yelpAddress = pickedBusiness.location.display_address.join()
    yelpInfo = pickedBusiness;
}

function displayYelp() {
    $('#firstPage').fadeOut(1000);
    var googleMaps = $('<div>').attr('id','googleMaps');
    var yelpInfo = $('<div>').attr('id','yelpInfo');
    var pictureBox = $('<div>').attr('id','yelpPicture');
        // yelpPicture = pickedBusiness.image_url;
    var foodPicture =$('<img>').attr('src',yelpPicture).attr('id','food');
    $('#mainPage').append(yelpInfo, pictureBox);
    $('#yelpPicture').append(foodPicture);
    $('#mainPage').append(googleMaps);
    setTimeout(initMap,1000);
}

function addDescription(){
    $('#food').attr('src',yelpPicture);
    $('#yelpInfo').append(yelpName,yelpAddress)
}
