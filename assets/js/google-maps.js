function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -13.969897, lng: 28.688379};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'east park, INA' // Title Location
    });
}