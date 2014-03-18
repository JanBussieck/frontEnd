$("form").on("submit", function(event){
	event.preventDefault();
	console.log($(this).serialize());
});

function showValues(){
	var str = $("form").serialize();
	$("results").text(str);
}

$(":checkbox, :radio").click(showValues);
$("select").change(showValues);
showValues();