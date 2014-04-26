console.log do -> "Hello world"
string = 'my string'
appendString = string + 6
console.log  "#{appendString}"

### appendString = string + 6 ###

console.log Math.round 3.1, Math.round 5.2
console.log Math.round (3.1), Math.round (5.2)

cube = (num) -> Math.pow num, 3
odd = (num) -> num % 2 is 1
console.log cube(2)
console.log odd(3)

# attribute
father =
	name: 'John'
	daughter:
		name: 'Jill'
	son:
		name: 'Jack'

value = 'value'
keyAndValue = {value}

a= b?.attr ? c
cats?['name']?.eat?() if true?

b = 0 
loop break if ++b > 999
console.log b

[firstName, middleInitial, lastName] = ['Joe', 'T', 'Jack']


negativeNumbers = (-num for num in [1,2,3,4])

myRect = 
	x: 100
	y: 200

{x: myX, y:myY}  = myRect

class Tribble
	constructor: ->
		@isAlive = true
		Tribble.count++

	breed: -> new Tribble if @isAlive
	die: ->
		Tribble.count-- if @isAlive
		@isAlive = false
		