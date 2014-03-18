$.holdReady(true);

$.getScript("myplugin.js", function(){
	$.holdReady(false);
});
