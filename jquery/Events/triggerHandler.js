$("#old").click(function(){
	$("input").trigger("focus");
});
$("#new").click(function(){
	$("input").triggerHandler("focus");
});
$("input").focus(function(){
	$("<span>Focused!</span>").appendTo("body").fadeOut(1000);
});