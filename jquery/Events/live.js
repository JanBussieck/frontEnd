$("a").live("click", function() { return false; })

$("a").live("click", function(event){
  event.preventDefault();
});

$("p").live("myCustomEvent", function(e, myName, myValue) {
  $(this).text("Hi there!");
  $("span").stop().css("opacity", 1)
           .text("myName = " + myName)
           .fadeIn(30).fadeOut(1000);
});
$("button").click(function () {
  $("p").trigger("myCustomEvent");
});

$("p").live({
  click: function() {
    $(this).after("<p>Another paragraph!</p>");
  },
  mouseover: function() {
    $(this).addClass("over");
  },
  mouseout: function() {
    $(this).removeClass("over");
  }
});