// Event Listener with Jquery
$("#content").on('click', function() {
	console.log('Element clicked with Jquery');
});

// Event Listener with pure JavaScript
var element = document.getElementById('content');

element.addEventListener('click', function(){
	console.log('Element clicked with JavaScript');
}, false);