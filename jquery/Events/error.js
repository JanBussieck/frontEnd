$('#book')
	.error(function() {
	 alert("/* Act on the event */");
	})
.attr('src', 'missing.png');

$("img")
  .error(function(){
    $(this).hide();
  })
 .attr("src", "missing.png");