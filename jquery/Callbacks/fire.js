var foo = function( value ) {
  console.log( "foo:" + value );
}
 
var callbacks = $.Callbacks();
 
callbacks.add( foo );
 
callbacks.fire( "hello" ); 
callbacks.fire( "world" ); 
 
var bar = function( value ){
    console.log( "bar:" + value );
}
 
callbacks.add( bar );
 
callbacks.fire( "hello again" );