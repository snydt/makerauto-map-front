// Call API
// Get search results
// Then, call the initMap function, pass arguments given by the API
// Edit the H1 title according to the user call/action. Here, search results
var searchForm = document.getElementById("search");
searchForm.onclick = function(e){
  e.preventDefault();
  console.log(searchForm.parentElement);
  getSearchLocations(searchForm.parentElement.year.value, searchForm.parentElement.month.value);
  updateTitle("Search Results");
}

var getSearchLocations = function(year, month) {
  axios.get('http://makerauto.herokuapp.com/map/search/' + year + '/' + month)
    .then(function(res) {
      console.log(res);
      initMap(res.data.locations);
    })
    .catch(function(error) {
      console.log(error);
    });
};
