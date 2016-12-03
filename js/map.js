// Init the leaftlet map

var map;

var initMap = function (lat, long, text, zoom) {
  var zoom = zoom || 5;
  var locations;
  var firstArgType;
  var infoHTMLElement = document.getElementById('informations');
  infoHTMLElement.innerHTML = null;

  if(map) {
    map.remove();
  }

  firstArgType = typeof lat;
  if (firstArgType !== 'number' && firstArgType !== 'string') {
    locations = lat;

    if(
      locations.length === 1 && 
      locations[0].coordinates[0] === 0 && 
      locations[0].coordinates[1] === 0
      ) {
      infoHTMLElement.innerHTML = 'Nothing here..';
    }

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

      loadSingleMarker(lat, long, text);
  }
};

var loadSingleMarker = function(lat, long, text) {
  L
    .marker([lat, long]).addTo(map)
    .bindPopup(text);
}

var loadSeveralMarkers = function(locations) {
  locations.forEach(function(location) {
    loadSingleMarker(location.coordinates[0], location.coordinates[1], location.event.name);
  });
}
