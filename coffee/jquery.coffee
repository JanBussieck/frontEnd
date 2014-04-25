# Use local alias
$ = jQuery
$ ->
# DOMContentLoaded
$(".el").click ->
alert("Clicked!")


type = do ->classToType = {}
for name in "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")
   classToType["[object " + name + "]"] = name.toLowerCase()
(obj) -> strType = Object::toString.call(obj)
