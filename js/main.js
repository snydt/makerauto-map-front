
var loading = false;
var loadingInterval;
var loadingTimeout;
var title;
var titleOriginalContent;

var updateTitle = function (content) {
  // Get H1 html element
  var titleHTMLElement = document.getElementById("mainTitle");
  titleHTMLElement.innerHTML = content
};

var start = function () {
  getRealTimeLocations();
}

var startLoader = function() {
	title = document.querySelector('#mainTitle');
	titleOriginalContent = title.innerHTML;
	loadingInterval = setInterval(function(){
		title.innerHTML = title.innerHTML + '.';
	}, 250);
	loadingTimeout = setInterval(function() {
		title.innerHTML = titleOriginalContent;
	}, 900)
}

var stopLoader = function() {
	if(loadingInterval && loadingTimeout) {	
		clearInterval(loadingInterval);
		clearTimeout(loadingTimeout);
		title.innerHTML = titleOriginalContent;
	}
}
