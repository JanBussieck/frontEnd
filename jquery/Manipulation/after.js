$("p").after('<b> hello </b>');

$("p").after(document.createTextNode("Hello"));

$("p").after( $("b") );