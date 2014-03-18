1:  上下文选择器

由于我们限制这个span选择器的上下文为 this, 
只有在点击元素里的span将会被附加样式 -->

<script type="text/javascript">

$("div:foo").click(function(){
	$("span", this).addClass("bar");
});

// $('span', this) <=> $(this).find('span')

</script>
2: 

<script type="text/javascript">
$("div:foo").click(function(){
	$(this).slideUp();
});
</script>

3:
<script type="text/javascript">
$.post( "url.xml", function(data) {
  var $child = $(data).find("child");
})
</script> 


4: 
<script type="text/javascript">
var foo = {foo: "bar", hello: "world"};
// Pass it to the jQuery function
var $foo = $( foo );
// test accessing property values
var test1 = $foo.prop( "foo" ); // bar
// test setting property values
$foo.prop( "foo", "foobar" );
var test2 = $foo.prop( "foo" ); // foobar
// test using .data() as summarized above
$foo.data( "keyName", "someValue");
console.log( $foo ); // will now contain a jQuery{randomNumber} property
// test binding an event name and triggering
$foo.bind( "eventName", function () {
  console.log("eventName was called");
});
 
$foo.trigger( "eventName" ); // logs "eventName was called"
$foo.triggerHandler( "eventName" ); // also logs "eventName was called"
</script>


5: 
<script type="text/javascript">
$("input:radio", document.forms[0]);
$("div", xml.responseXML);
$(document.body).css( "background", "black" );
$(myForm.elements).hide();
</script>

6: 
<script type="text/javascript">

$( "<div><p>Hello</p></div>" ).appendTo( "body" );

$( "<div/>", {
  "class": "test",
  text: "Click me!",
  click: function() {
    $( this ).toggleClass( "test" );
  }
}).appendTo( "body" );

$( "<div></div>", {
  "class": "my-div",
  on: {
    touchstart: function( event ) {
      // do something
    }
  }
}).appendTo( "body" );


$( "<div></div>" )
.addClass( "my-div" )
.on({
  touchstart: function( event ) {
    // do something
  }
}).appendTo( "body" );

</script>