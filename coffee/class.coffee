class Animal
	constructor : (name) ->
		@name = name

   price: 5
   sell: =>
   		alert "Give me #{@price} shillings!"

animal = new Animal("cat")
console.log "Animal i a #{animal.name}"

$("#sell").click(animal.sell)
animal.sell(new Customer)


class Animal2 
	this.find = (name) ->

