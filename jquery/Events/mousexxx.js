$("p").mouseup(function(event) {
$(this).append('<span> mouse up </span>');
}).mousedown(function(event) {
$(this).append('<span> mouse down </span>');
});

var i = 0;
$("div.overout").mouseover(function(){
  $("p:first",this).text("mouse over");
  $("p:last",this).text(++i);
}).mouseout(function(){
  $("p:first",this).text("mouse out");
});

var n = 0;
$("div.enterleave").mouseenter(function(){
  $("p:first",this).text("mouse enter");
  $("p:last",this).text(++n);
}).mouseleave(function(){
  $("p:first",this).text("mouse leave");
});

$("div").mousemove(function(e){
	var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
	var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
	$("span:first").text("( e.pageX, e.pageY ) : " + pageCoords);
	$("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
});