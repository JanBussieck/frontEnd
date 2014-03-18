$.when( $.ajax("test.aspx") ).then(function(data, textStatus, jqXHR){
  alert( jqXHR.status ); // alerts 200
});

$.when( { testing: 123 } ).done(
   function(x) { alert(x.testing); } /* alerts "123" */
);

$.when($.ajax("/page1.php"), $.ajax("/page2.php")).done(function(a1,  a2){
  /* a1 and a2 are arguments resolved for the
      page1 and page2 ajax requests, respectively */
  var jqXHR = a1[2]; /* arguments are [ "success", statusText, jqXHR ] */
  if ( /Whip It/.test(jqXHR.responseText) ) {
    alert("First page has 'Whip It' somewhere.");
  }
});

$.when($.ajax("/page1.php"), $.ajax("/page2.php")).then(myFunc, myFailure);