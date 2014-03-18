var foo = function (value) {
	console.log(value);
};

var callbacks = $.Callbacks();

callbacks.add(foo);
callbacks.fire("foo");
callbacks.disable();
callbacks.fire("footbar");