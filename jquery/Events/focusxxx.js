$("input").focus(function () {
  $(this).next("span").css('display','inline').fadeOut(1000);
});

$("p").focusin(function() {
  $(this).find("span").css('display','inline').fadeOut(1000);
});

var fo = 0, b = 0;
$("p").focusout(function() {
  fo++;
  $("#fo")
    .text("focusout fired: " + fo + "x");
}).blur(function() {
  b++;
  $("#b")
    .text("blur fired: " + b + "x");
 
});

