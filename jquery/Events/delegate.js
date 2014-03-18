$("body").delegate('p', 'click', function() {
	$(this).after('<p> another paragrah! </p>');
});

$('body').delegate('a', 'click', function(event) {
	event.preventDefault();
});

$('body').delegate('p', 'myCustomEvent', function(e, myName, myValue) {
	$(this).text("hi there!");
	$("span").stop().css("opacity", 1)
		.text("myName ="+myName)
		.fadeIn(30).fadeOut(1000);
});

$('button').click(function(event) {
	$("p").trigger('myCustomEvent');
});

