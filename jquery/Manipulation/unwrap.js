$("button").toggle(function(){
  $("p").wrap("<div></div>");
}, function(){
  $("p").unwrap();
});