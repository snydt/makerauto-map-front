// Call API
// Get search results
// Then, call the initMap function, pass arguments given by the API
// Edit the H1 title according to the user call/action. Here, search results
var searchForm = document.getElementById("search");
searchForm.onclick = function(e){
  e.preventDefault();
  getSearchLocations(searchForm.parentElement.year.value, searchForm.parentElement.month.value);
  updateTitle("Search Results");
  startLoader();
}

var getSearchLocations = function(year, month) {
  axios.get('http://makerauto.herokuapp.com/map/search/' + year + '/' + month)
    .then(function(res) {
      stopLoader();
      initMap(res.data.locations, null, null, 11);
    })
    .catch(function(error) {
      stopLoader();
      console.log(error);
    });
};
