
var foo = function( value ) {
  console.log( "foo:" + value );
};
 
var callbacks = $.Callbacks();

callbacks.add( foo );
 
callbacks.fire( "hello" ); 

callbacks.fire( "world" ); 
 
console.log( callbacks.fired() );