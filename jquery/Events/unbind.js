function aClick() {
	$("div").show().fadeOut("slow");
}
$("#bind").click(function () {

$("#theone").click(aClick)
  .text("Can Click!");
});
$("#unbind").click(function () {
$("#theone").unbind('click', aClick)
  .text("Does nothing...");
});