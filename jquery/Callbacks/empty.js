var foo = function (value1, value2){
	console.log("foo:"+ value1 + "," + value2);
}

var bar = function(value1, value2){
	console.log("bar: "+ value1 + ","+value2);
}

var callbacks = $.Callbacks();

callbacks.add(foo);
callbacks.add(bar);
callbacks.empty();

console.log(callbacks.has(foo));
console.log(callbacks.has(bar));
