<!DOCTYPE html>
<html>
<head>
  <style>
 
button { margin:10px; }
div { color:blue; font-weight:bold; }
span { color:red; }
</style>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <button>Button #1</button>
<button>Button #2</button>
<div><span>0</span> button #1 clicks.</div>
 
<div><span>0</span> button #2 clicks.</div>
<script>
$("button:first").click(function () {
update($("span:first"));
});
$("button:last").click(function () {
$("button:first").trigger('click');
 
update($("span:last"));
});
 
function update(j) {
var n = parseInt(j.text(), 10);
j.text(n + 1);
}
</script>
 
</body>
</html>