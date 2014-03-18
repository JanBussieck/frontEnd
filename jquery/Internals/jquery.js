var a = { what: "A regular JS object" },
    b = $('body');
 
if ( a.jquery ) { // falsy, since it's undefined
    alert(' a is a jQuery object! ');
}
 
if ( b.jquery ) { // truthy, since it's a string
    alert(' b is a jQuery object! ');
}

alert('You are running jQuery Version:'+$.fn.jQuery);