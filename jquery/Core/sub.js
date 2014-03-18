<script type="text/javascript">
(function(){
  var sub$ = jQuery.sub();
 
  sub$.fn.myCustomMethod = function(){
    return 'just for me';
  };
 
  sub$(document).ready(function() {
    sub$('body').myCustomMethod() // 'just for me'
  });
})();
 
typeof jQuery('body').myCustomMethod // undefined

(function() {
  var myjQuery = jQuery.sub();
 
  myjQuery.fn.remove = function() {
    // New functionality: Trigger a remove event
    this.trigger("remove");
 
    // Be sure to call the original jQuery remove method
    return jQuery.fn.remove.apply( this, arguments );
  };
 
  myjQuery(function($) {
    $(".menu").click(function() {
      $(this).find(".submenu").remove();
    });
 
    // A new remove event is now triggered from this copy of jQuery
    $(document).bind("remove", function(e) {
      $(e.target).parent().hide();
    });
  });
})();

(function() {
  // Create a new copy of jQuery using sub()
  var plugin = jQuery.sub();
 
  // Extend that copy with the new plugin methods
  plugin.fn.extend({
    open: function() {
      return this.show();
    },
    close: function() {
      return this.hide();
    }
  });
 
  // Add our plugin to the original jQuery
  jQuery.fn.myplugin = function() {
    this.addClass("plugin");
 
    // Make sure our plugin returns our special plugin version of jQuery
    return plugin( this );
  };
})();
 
$(document).ready(function() {
  // Call the plugin, open method now exists
  $('#main').myplugin().open();
 
  // Note: Calling just $("#main").open() won't work as open doesn't exist!
});


</script>

