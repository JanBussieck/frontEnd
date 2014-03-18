$("li").hover(function() {
	$(this).append($("<span> ***  </span>"));
}, function() {
	$(this).find('span:last').remove();
});

$("li.fade").hover(function() {
	$(this).fadeOut(100);
	$(this).fadeIn(500);		
});

$("li")
.filter(":odd")
.hide()
 .end()
.filter(":even")
.hover(
  function () {
    $(this).toggleClass("active")
      .next().stop(true, true).slideToggle();
  }
);