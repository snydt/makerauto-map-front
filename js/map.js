// Init the leaftlet map

var map;

var initMap = function (lat, long, zoom) {
  var zoom = zoom || 5;
  var locations = [];

  if(map) {
    map.remove();
  }

  if (typeof lat !== 'number') {
    locations = lat;
    map = L
        .map('map')
        .setView([locations[0].coordinates[0], locations[0].coordinates[1]], zoom);

    L
      .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })
      .addTo(map);

    loadSeveralMarkers(locations);
  } else {
    map = L
        .map('map')
        .setView([lat, long], zoom);

    L
      .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })
      .addTo(map);

      loadSingleMarker(lat, long);
  }
};

var loadSingleMarker = function(lat, long) {
  L
    .marker([lat, long]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
}

var loadSeveralMarkers = function(locations) {
  locations.forEach(function(location) {
    loadSingleMarker(location.coordinates[0], location.coordinates[1]);
  });
}
