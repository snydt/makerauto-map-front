// Call API
// GET Realtime location
// Then, call the initMap function, pass arguments given by the API
// Edit the H1 title according to the user call/action. Here, real-time

var buttonRealTime = document.getElementById("realTime");
buttonRealTime.onclick = function(e){
  e.preventDefault();
  getRealTimeLocations();
  updateTitle("Latest location");
  startLoader();
}

var getRealTimeLocations = function() {
  axios.get('http://makerauto.herokuapp.com/map')
    .then(function(res) {
      stopLoader();
      initMap(res.data.location.coordinates[0], res.data.location.coordinates[1], res.data.location.event.name, 11);
    })
    .catch(function(error) {
      stopLoader();
      console.log(error);
    });
};
