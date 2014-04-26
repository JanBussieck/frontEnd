$(document).ready ->
	newGame()
	$('#grid li').live 'click', titleClick

titleClick = ->
	$tile = $(this)
	if $tile.hasClass 'selected'
		selectedCoordinates = null
		$tile.removeClass 'selected'
		showMessage 'firstTile'
	else 
		$tile.addClass 'selected'
		[x, y] = @id.match(/(\d+)_(\d+)/)[1..]
		selectTile x,y

