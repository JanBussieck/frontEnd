<script>
var xTriggered = 0;
$('#target').keydown(function(event) {
  if (event.which == 13) {
     event.preventDefault();
   }
   xTriggered++;
   var msg = 'Handler for .keydown() called ' + xTriggered + ' time(s).';
  $.print(msg, 'html');
  $.print(event);
});
 
$('#other').click(function() {
  $('#target').keydown();
});


var xTriggered = 0;
$("#target").keypress(function(event) {
  if ( event.which == 13 ) {
     event.preventDefault();
   }
   xTriggered++;
   var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  $.print( event );
});
 
$("#other").click(function() {
  $("#target").keypress();
});


var xTriggered = 0;
$('#target').keyup(function(event) {
   xTriggered++;
   var msg = 'Handler for .keyup() called ' + xTriggered + ' time(s).';
  $.print(msg, 'html');
  $.print(event);
}).keydown(function(event) {
  if (event.which == 13) {
    event.preventDefault();
  }
});
 
$('#other').click(function() {
  $('#target').keyup();
});

</script>
