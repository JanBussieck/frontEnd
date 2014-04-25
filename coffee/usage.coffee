### each ###
runMyFunction (item) for item in array 

### map ###
result = (item.name for item in array)

### filter ###
result = (item for item in array when item.name is "test")

passed = []
failed = []
(if score > 60 then passed else failed).push score for score in [49, 58, 76, 82, 88, 90]

for score in [49, 58, 76, 82, 88, 90]
	(if score > 60 then passed else failed).push score

### include ###
included = "test" in array
included = "a long test string" .indexOf("test") isnt -1


### interator###

object = {one: 1, two: 2}
alert("#{key} = #{value}") for key , value of object

Math.max [14, 35, -7, 46, 98]...
Math.min [14, 35, -7, 46, 98]...


Log =
	log: ->
		console?.log(arguments...)

### hash ?= {} ###


someObject = {a: "value for a", b: "value for b"}
{a, b} = someObject
console.log "a is '#{a}', b is '#{b}'"
