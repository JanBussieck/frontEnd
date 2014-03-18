var log = function (value1, value2){
	console.log("Received: "+ value1 + "," + value2 );
};

var callbacks = $.Callbacks();
callbacks.add(log);
callbacks.fireWith(window, ["foor", "bar"]);
