$("div").click(function(event) {
	var index = $("div").index(this);
	$("span").text("That was div index #"+index);
});

var listItem = $('#bar');
$('div').html( 'Index: ' + $('li').index(listItem) );

var listItems = $('li:gt(0)');
$('div').html( 'Index: ' + $('li').index(listItems) );

var foobar = $("li").index( $('#foobar') );
$('div').html('Index: ' + foobar);