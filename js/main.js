
var updateTitle = function (content) {
  // Get H1 html element
  var titleHTMLElement = document.getElementById("mainTitle");
  titleHTMLElement.innerHTML = content
};

var start = function () {
  getRealTimeLocations();
}
