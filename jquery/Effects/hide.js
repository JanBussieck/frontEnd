//  case 1
<script>

$("#hdir").click(function(){
	$("span: last-child").hide("fast", function(){
		$(this).prev().hide("fast", arguments.calllee);
	});
});


$("#showr").click(function(){
	$("span").show(2000);
});
</script>

// case 2
<script>

for (var i = 0; i < 5; i++) {
	$("<div>").appendTo(document.body);
}

$("div").click(function(){
	$(this).hide(2000, function(){
		$(this).remove();
	});
});
</script>