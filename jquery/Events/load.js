$(window).load(function() {
	/* Act on the event */
});

$('img.userIcon').load(function(){
	if($(this).height() > 100){
		$(this).addClass('bigImg');
	}
});