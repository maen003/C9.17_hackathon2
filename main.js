$(document).ready(initialize);

function pickRandomLocation(locationsArray) {
    var randomIndex = Math.random() * locationsArray.length;
    return locationsArray[randomIndex];
}

function initialize() {
    var foodInterest = pickRandomLocation();
}