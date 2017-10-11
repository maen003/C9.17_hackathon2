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
            displayYelp();

            $('body').removeClass('hideOverflow');
        }
    });
}

function randomizeBusiness(response) {
    var randomIndex = Math.floor(Math.random() * 6);
    var pickedBusiness = response.businesses[randomIndex];
    console.log('Random business pick was', pickedBusiness);
    yelpPicture = pickedBusiness.image_url;
    yelpName = pickedBusiness.name;
    var addressLine1 = pickedBusiness.location.display_address[0];
    if (pickedBusiness.location.display_address.length == 3) {
        addressLine1 += ' ' + pickedBusiness.location.display_address[1];
    }
    if (pickedBusiness.location.display_address.length > 1) {
        var addressLine2 = pickedBusiness.location.display_address[pickedBusiness.location.display_address.length-1];
    }
    yelpAddress = addressLine1 + '</br>' + addressLine2;
    yelpInfo = pickedBusiness;
}

function displayYelp() {
    $('#firstPage').fadeOut(1000);
        function yelpAppear(){
            var googleMaps = $('<div>').attr('id','googleMaps').addClass('col-xs-12');
            var yelpInfo = $('<div>').attr('id','yelpInfo').addClass('col-xs-12');
            var pictureBox = $('<div>').attr('id','yelpPicture').addClass('col-xs-12');
            // yelpPicture = pickedBusiness.image_url;
            var foodPicture =$('<img>').attr('src',yelpPicture).attr('id','food');
            $('#mainPage').append(yelpInfo, pictureBox);
            $('#yelpPicture').append(foodPicture);
            $('#mainPage').append(googleMaps);
            addDescription();
        }
    setTimeout(yelpAppear,1000);
    setTimeout(initMap,1000);
}

function addDescription(){
    var $businessName = $('<div>').attr('id','businessName');
    var $businessAddress = $('<div>').attr('id', 'businessAddress');
    var $businessPhone = $('<div>').attr('id', 'businessPhone');
    var $stars = $('<img>').attr({'id': 'starRating', 'src': 'images/'+ yelpInfo.rating+ 'star.png'});
    var $dollar = $('<div>').attr('id', 'price').text(yelpInfo.price);
    $businessName.text(yelpName);
    $businessAddress.html(yelpAddress);
    $businessPhone.text(yelpInfo.display_phone);
    var $goToYelpButton = $('<button>', {
        class: 'btn btn-md',
        attr: {'id': 'goToYelp'},
        click: directToYelp,
        text: 'Check out on Yelp!'
    });
    $('#yelpInfo').append($businessName, $stars, $dollar, $businessPhone, $businessAddress, $goToYelpButton);
    $('#food').attr('src',yelpPicture);
}

function directToYelp() {
    window.open(yelpInfo.url);
}