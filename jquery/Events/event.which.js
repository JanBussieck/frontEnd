$('#whichkey').bind('keydown',function(e){
  $('#log').html(e.type + ': ' +  e.which );
}); 



$('#whichkey').bind('mousedown',function(e){
  $('#log').html(e.type + ': ' +  e.which );
});
