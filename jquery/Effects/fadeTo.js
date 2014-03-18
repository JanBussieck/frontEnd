<script>
// case 1

$("p:first").click(function(){
	$(this).fadeTo("slow", 0.33);
});

// case 2
$("div").click(function(){
	$(this).fadeTo("fast", Math.random());
});

// case 3
var getPos = function (n) {
  return (Math.floor(n) * 90) + "px";
};
$("p").each(function (n) {
  var r = Math.floor(Math.random() * 3);
  var tmp = $(this).text();
  $(this).text($("p:eq(" + r + ")").text());
  $("p:eq(" + r + ")").text(tmp);
  $(this).css("left", getPos(n));
});
$("div").each(function (n) {
  $(this).css("left", getPos(n));
})
.css("cursor", "pointer")
.click(function () {
    $(this).fadeTo(250, 0.25, function () {
      $(this).css("cursor", "")
        .prev().css({"font-weight": "bolder",
                     "font-style": "italic"});
        });
    });
</script>

