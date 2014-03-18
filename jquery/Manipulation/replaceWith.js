$("button").click(function () {
  $(this).replaceWith( "<div>" + $(this).text() + "</div>" );
});