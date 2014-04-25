class Animal
	constructor : (@name) ->

	alive: ->
		false

class Parrot extends Animal
	constructor: -> 
		super("Parrot")
	dead: -> 
		not @alive()


class Animal
	constructor: (@name) ->

class Parrot extends Animal
	Animal::rip = true

parrot = new Parrot("Macaw")

alert("This parrot is no more") if parrot.rip

