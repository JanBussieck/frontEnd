<!DOCTYPE html>
<html>
<head>
  <style>
button { margin:5px; }
button#theone { color:red; background:yellow; }
</style>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <button id="theone">Does nothing...</button>
<button id="bind">Bind Click</button>
<button id="unbind">Unbind Click</button>
<div style="display:none;">Click!</div>
<script>
function aClick() {
  $("div").show().fadeOut("slow");
}
$("#bind").click(function () {
  $("body").delegate("#theone", "click", aClick)
    .find("#theone").text("Can Click!");
});
$("#unbind").click(function () {
  $("body").undelegate("#theone", "click", aClick)
    .find("#theone").text("Does nothing...");
});
</script>
 
</body>
</html>