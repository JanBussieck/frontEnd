###

extend = (obj , mixin) ->
	obj[name] = method for name, method of mixin
	obj


include = (class, mixin) ->
	extend class.prototype, mixin

include Parrot,
	isDecreased: true

moduleKeywords = ['extends', 'include']

class Module 
	@extend: (obj) ->
		for key, value of obj when key not in moduleKeywords
			@[key] = value
			obj.extended?.apply(@)
			this
###