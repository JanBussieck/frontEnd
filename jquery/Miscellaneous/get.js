$("*", document.body).click(function(event) {
	event.stopPropagation();
	var domEl = $(this).get(0);
	$("span: first").text("clicked on -"+domEl.tagName);
});

function disp(divs){
	var a = [];
	for (var i=0; i< divs.length; i++){
		a.push(divs[i].innerHTML);
	}
	$("span").text(a.join(" "));
}

disp( $( "div" ).get().reverse() );

