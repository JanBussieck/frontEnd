function fn1( value ) {
    console.log( value );
}
 
function fn2( value ) {
    fn1("fn2 says: " + value);
    return false;
}

var callbacks = $.Callbacks();
callbacks.add( fn1 );
callbacks.fire( "foo!" );
callbacks.add( fn2 );
callbacks.fire( "bar!" );

// once
var callbacks = $.Callbacks( "once" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );
 
/*
output:
foo
*/

// memory 
var callbacks = $.Callbacks( "memory" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );
 
/*
output:
foo
fn2 says:foo
bar
fn2 says:bar
foobar
*/

// unique
var callbacks = $.Callbacks( "unique" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn1 ); // repeat addition
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );
 
/*
output:
foo
bar
fn2 says:bar
foobar
*/
// stopOnFalse
function fn1( value ){
    console.log( value );
    return false;
}
 
function fn2( value ){
    fn1( "fn2 says: " + value );
    return false;
}
 
var callbacks = $.Callbacks( "stopOnFalse" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );
 
/*
output:
foo
bar
foobar
*/



function fn1( value ) {
    console.log( value );
    return false;
}
 
function fn2( value ) {
    fn1( "fn2 says: " + value );
    return false;
}
 
var callbacks = $.Callbacks( "unique memory" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn1 ); // repeat addition
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.add( fn2 );
callbacks.fire( "baz" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );
 
/*
output:
foo
fn2 says:foo
bar
fn2 says:bar
baz
fn2 says:baz
foobar
*/



var topics = {};
 
jQuery.Topic = function( id ) {
    var callbacks,
        method,
        topic = id && topics[ id ];
 
    if ( !topic ) {
        callbacks = jQuery.Callbacks();
        topic = {
            publish: callbacks.fire,
            subscribe: callbacks.add,
            unsubscribe: callbacks.remove
        };
        if ( id ) {
            topics[ id ] = topic;
        }
    }
    return topic;
};



// Subscribers
$.Topic( "mailArrived" ).subscribe( fn1 );
$.Topic( "mailArrived" ).subscribe( fn2 );
$.Topic( "mailSent" ).subscribe( fn1 );
 
// Publisher
$.Topic( "mailArrived" ).publish( "hello world!" );
$.Topic( "mailSent" ).publish( "woo! mail!" );
 
// Here, "hello world!" gets pushed to fn1 and fn2
// when the "mailArrived" notification is published
// with "woo! mail!" also being pushed to fn1 when
// the "mailSent" notification is published.
 
/*
output:
hello world!
fn2 says: hello world!
woo! mail!
*/


// subscribe to the mailArrived notification
$.Topic( "mailArrived" ).subscribe( fn1 );
 
// create a new instance of Deferreds
var dfd = $.Deferred();
 
// define a new topic (without directly publishing)
var topic = $.Topic( "mailArrived" );
 
// when the deferred has been resolved, publish a
// notification to subscribers
dfd.done( topic.publish );
 
// Here the Deferred is being resolved with a message
// that will be passed back to subscribers. It's possible to
// easily integrate this into a more complex routine
// (eg. waiting on an ajax call to complete) so that
// messages are only published once the task has actually
// finished.
dfd.resolve( "it's been published!" );