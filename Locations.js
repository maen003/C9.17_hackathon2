var locations = [
    {title: 'The Continental United States',
     imgSrc: 'images/America.jpg',
     foodType: 'American'
    },
    {title: 'China',
        imgSrc: 'images/China.jpg',
        foodType: 'Chinese'
    },
    {title: 'Cuba',
        imgSrc: 'images/Cuba.jpg',
        foodType: 'Cuban'
    },
    {title: 'France',
        imgSrc: 'images/France.jpg',
        foodType: 'French'
    },
    {title: 'Hawaii',
        imgSrc: 'images/Hawaii.jpg',
        foodType: 'Hawaiian'
    },
    {title: 'India',
        imgSrc: 'images/India.jpg',
        foodType: 'Indian'
    },
    {title: 'Iran',
        imgSrc: 'images/Iran.jpg',
        foodType: 'Iranian'
    },
    {title: 'Italy',
        imgSrc: 'images/Italy.jpg',
        foodType: 'Italian'
    },
    {title: 'Japan',
        imgSrc: 'images/Japan.jpg',
        foodType: 'Japanese'
    },
    {title: 'Korea',
        imgSrc: 'images/Korea.jpg',
        foodType: 'Korean'
    },
    {title: 'Mexico',
        imgSrc: 'images/Mexico.jpg',
        foodType: 'Mexican'
    },
    {title: 'The Philippines',
        imgSrc: 'images/Philippines.jpg',
        foodType: 'filipino'
    },
    {title: 'Thailand',
        imgSrc: 'images/Thailand.jpg',
        foodType: 'thai'
    },
    {title: 'Vietnam',
        imgSrc: 'images/Vietnam.jpg',
        foodType: 'vietnamese'
    },
];
function newLocation(title,src,food) {
    this.title = title;
    this.imgSrc = src;
    this.foodType = food;
    locations.push(this);
}


