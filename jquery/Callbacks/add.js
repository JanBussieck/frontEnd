var foo = function( value ) {
  console.log( "foo: " + value );
};
 
var bar = function( value ){
  console.log( "bar: " + value );
};
 
var callbacks = $.Callbacks();
 
callbacks.add( foo );
 
callbacks.fire( "hello" );

callbacks.add( bar );
 
callbacks.fire( "world" );
