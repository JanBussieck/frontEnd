<script type="text/javascript">
<!-- case 1 -->

$("#clickme").click(function(){
	$('#book').animate({
		opacity:0.25,
		left: '+50',
		height: 'toggle'
	}, 5000, function(){

	});
});

<!-- case 2 -->
$('li').animate({
	opacity: .5,
	height: '50%'
},
{
	step: function(now, fx) {
		var data = fx.elem.id+' '+fx.prop+':'+now;
		$('body').append('<div>'+data+'</div>');
	}
});

// case 3
$('#clickme').click(function(){
	$('#book').animate({
		width: 'toggle',
		height: 'toggle'
	}, {
		duration: 5000,
		specialEasing: {
			width: 'linear',
			height: 'easeOutBounce'
		},
		complete: function(){
			$(this)after('<div> Animation complete. </div>');
		}
	});
});

// case 4
$('#go').click(function(){
	$('#block').animate({
		width: "70%",
		opacity: 0.4,
		marginLeft: "0.6in",
		fontSize: "3em",
		borderWidth: "10px"
	}, 1500);
});

// case  5
$('#right').click(function(){
	$('.block').animate({'left': '+=50px'}, 'slow');
});

$("#left").click(function(){
  $(".block").animate({"left": "-=50px"}, "slow");
});

// case 6
$("#go1").click(function(){
	$("#block1").animate({ width: "90%"}, { queue: false, duration:3000 }).animate({ fontSize: "24px"}, 1500)
			   .animate({ borderRightWidth: "15px"}, 1500);
});

$("#go2").click(function(){
	$( "#block2" ).animate({ width: "90%" }, 1000 )
     .animate({ fontSize: "24px" }, 1000 )
     .animate({ borderLeftWidth: "15px" }, 1000 );
 });

$( "#go3" ).click(function(){
  $( "#go1" ).add( "#go2" ).click();
});

$( "#go4" ).click(function(){
  $( "div" ).css({ width: "", fontSize: "", borderWidth: "" });
});

// case 7
$("#go").click(function(){
	$(".block:first").animate({
		left: 100
	}, {
		duration: 1000,
		step: function(now, fx){
			$('.block:gt(0)'),css("left", now);
		}
	});
});
</script>
