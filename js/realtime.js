// Call API
// GET Realtime location
// Then, call the initMap function, pass arguments given by the API
// Edit the H1 title according to the user call/action. Here, real-time

var buttonRealTime = document.getElementById("realTime");
buttonRealTime.onclick = function(e){
  e.preventDefault();
  getRealTimeLocations();
  updateTitle("Real-time geolocation");
}

var getRealTimeLocations = function() {
  axios.get('http://makerauto.herokuapp.com/map')
    .then(function(res) {
      initMap(res.data.location.coordinates[0], res.data.location.coordinates[1]);
    })
    .catch(function(error) {
      console.log(error);
    });
};
