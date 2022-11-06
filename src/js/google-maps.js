// function initMap() {
//   var coordinates = { lat: 50.42508491318515, lng: 30.534083698135866 },
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: coordinates,
//     });
//   marker = new google.maps.Marker({
//     position: coordinates,
//     map: map,
//   });
// }
// initMap();
/*
var coordinates = { lat: 47.212325, lng: 38.933663 },
  popupContent = this.$popupContent.html(),
  markerImage = 'images/marker.png',
  zoom = 15,
  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: zoom,
    disableDefaultUI: true,
  }),
  infowindow = new google.maps.InfoWindow({
    content: popupContent,
  }),
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerImage,
  });

$.getJSON('../json/map-style/map-style_colored.json', function (data) {
  map.setOptions({ styles: data });
});

google.maps.event.addListener(infowindow, 'closeclick', function () {
  marker.setAnimation(google.maps.Animation.BOUNCE);
});

marker.addListener('click', function () {
  marker.setAnimation(null);
});

marker.addListener('click', function () {
  infowindow.open(map, marker);
});

infowindow.open(map, marker);
*/

var map;

function initialize() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.8666, lng: 151.1958 },
    zoom: 15,
  });

  // Search for Google's office in Australia.
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Google Sydney',
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location,
      },
    });
  }
}

console.log('hi');

google.maps.event.addDomListener(window, 'load', initialize);
