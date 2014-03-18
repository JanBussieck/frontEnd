$(document.body).click(function() {
   $("div").each(function(i) {
   	if(this.style.color != 'blue'){
   		this.style.color = "blue";
   	} else {
   		this.style.color = "";
   	}
   	
   });
});

$("span").click(function(event) {
	$("li").each(function(index, el) {
		$(this).toggleClass('example');		
	});
});

$("button").click(function(event) {
	$("div").each(function(index, domEle) {
		$(domEle).css("backgroundColor", "yellow");
		if($(this).is("#stop")){
			$("span").text("Stopped at div index #"+ index);
			return false;
		}
	});
});
