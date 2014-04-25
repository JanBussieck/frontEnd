###
 this is coffee's comment
###

exports = this
exports.MyVariable = "foo-bar"

funcname = -> "bar"


funcname = (a=100, b=200) -> a*b

sum = (nums...) -> 
	result = 0
	nums.forEach (n) -> result += n
	result


trigger = (event...) -> 
	events.splice(1,0,this)
	this.constructor.trigger.apply(events)


calledString  = "i am a calledString"
alert a
alert inspect(a)


###
=>
###
this.clickHander = -> alert "clicked"
element.addEventListener "click", (e) => this.clickHandler(e)

###
The objetct
### 

object1 = {one: 1, two: 2}
object2 = one: 1, two: 2
object3 =
one: 1
two: 2

User.create(name: "John Smith")


array1 = [1, 2, 3]

array2 = [
	1
	2
	3
]

array3 = [1,2,3, ]

###
switch language
###

if  true == true
	alert "We are ok"

if true != true then "Panic"

if 1>0 then "ok" else "not ok"

alert "amazing coffee!" if i < 5

if not true then "oh my god"  

### unless true "Panic"  ###

if true is 1 
	"do something"

if true isnt 0 
	"do something"

value1 = "absdasd"
appendValue = "head #{value1}"



for name in ["a", "b", "c"]
	alert "for each the value in array #{name}"


for name, i in ["Roger the pickpocket", "Roderick the robber"]
	alert "#{i} - Release #{name}"

release prisoner for prisoner in ["Roger", "Roderick","Brian"]

### 
prisoners = ["Roger", "Roderick", "Brian"]
	release prisoner for prisoner in prisoners when prisoner[0] is "R"

names = sam: seaborn, donna: moss
	alert("#{first} #{last}") for first, last of names
###

range = [1 ... 5]
firstTwo = ["one", "two", "three"][0..1]

numbers = [0..9]
numbers[3..5] = [-3, -4, -5]
for value in numbers
  console.log value

 my = "my string"[0..2]

 words = ["rattled", "roudy", "rebbles", "ranks"]
	alert "Stop wagging me" if "ranks" in words

@saviour = true
User::first = -> @records[0]
praise if brian?
velocity = southern ? 40


blackKnight.getLegs()?.kick()

blackKnight.getLegs().kick?()
