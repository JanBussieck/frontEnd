$('a').click(function(event) {
	alert(event.isDefaultPrevented());
	event.preventDefault();
	alert(event.isDefaultPrevented());
});