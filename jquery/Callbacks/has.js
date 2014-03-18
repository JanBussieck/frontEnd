var foo = function (value1, value2) {
	console.log("Received: "+value1+","+value2);
};

var bar = function (value1, value2) {
	console.log("foobar");
}

var callbacks = $.Callbacks();
callbacks.add(foo);
console.log(callbacks.has(foo));
console.log(callbacks.has(bar));