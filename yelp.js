    function yelpCall() {
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var yelpApi = 'https://api.yelp.com/v3/businesses/search?term=' + pickedCuisine.foodType + '&latitude=' + userLocation_result.lat +'&longitude=' + userLocation_result.lng +'&Authorization=Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx';
        $.ajax({
            dataType: 'json',
            method: 'get',
            url: yelpApi,
            headers: {Authorization: 'Bearer N6_WFXHCeAWzeFBJvljs8lgptMrgkJoakrMe8wiS04dihDrsNiFWu4rWc1_5X7HzcV-tbq9L2lUOQ5qPNYloCRoexh57VDFuaaVG7p3MnlQEQ1bG59HP3vqSoSLcWXYx'},
            success: function (response) {
                console.log('Yelp response worked', response);
                randomYelpPick(response);
                }

            });
        }

    function randomYelpPick(response) {
        var randomNumber = Math.floor(Math.random() * 6);
        var randomBusiness = response.businesses[randomNumber];
        console.log('Random business picked was ', randomBusiness);

    }
