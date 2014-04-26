odd = (num) ->
	if typeof num is 'Number'
		if num is Math.round num
			if num > 0
				num % 2 is 1
			else 
				throw "#{num} is not positive"
		else 
			throw "#{num} is not an interger"
	else
		throw "#{num} is not a Number"

try 
	odd 5.1
catch e
	console.log e

setName = (localName) -> @name = localName
pig = {}
setName.apply pig, ['Babe']
console.log pig.name
