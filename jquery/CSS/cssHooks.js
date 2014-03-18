(function($){
	if (!$.cssHooks) {
		throw ("jQuery 1.4.3 or above is required for this plugin to work");
		return;
	}
	$(function(){
		$.cssHooks["someCSSProp"] = {
      get: function( elem, computed, extra ) {
        // handle getting the CSS property
      },
      set: function( elem, value ) {
        // handle setting the CSS value
      }
    };
	});
})(jQuery);


(function($) {
  function styleSupport( prop ) {
    var vendorProp, supportedProp,
 
        // capitalize first character of the prop to test vendor prefix
        capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        prefixes = [ "Moz", "Webkit", "O", "ms" ],
        div = document.createElement( "div" );
 
    if ( prop in div.style ) {
 
      // browser supports standard CSS property name
      supportedProp = prop;
    } else {
 
      // otherwise test support for vendor-prefixed property names
      for ( var i = 0; i < prefixes.length; i++ ) {
        vendorProp = prefixes[i] + capProp;
        if ( vendorProp in div.style ) {
          supportedProp = vendorProp;
          break;
        }
      }
    }
 
    div = null;
 
    $.support[ prop ] = supportedProp;
 
    return supportedProp;
  }
 
  // call the function, e.g. testing for "border-radius" support:
  styleSupport( "borderRadius" );
})(jQuery);


(function($) {
  if ( !$.cssHooks ) {
    throw("jQuery 1.4.3+ is needed for this plugin to work");
    return;
  }
 
  function styleSupport( prop ) {
    var vendorProp, supportedProp,
        capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        prefixes = [ "Moz", "Webkit", "O", "ms" ],
        div = document.createElement( "div" );
 
    if ( prop in div.style ) {
      supportedProp = prop;
    } else {
      for ( var i = 0; i < prefixes.length; i++ ) {
        vendorProp = prefixes[i] + capProp;
        if ( vendorProp in div.style ) {
          supportedProp = vendorProp;
          break;
        }
      }
    }
 
    div = null;
    $.support[ prop ] = supportedProp
    return supportedProp;
  }
 
  var borderRadius = styleSupport( "borderRadius" );
 
  // Set cssHooks only for browsers that
  // support a vendor-prefixed border radius
  if ( borderRadius && borderRadius !== "borderRadius" ) {
    $.cssHooks.borderRadius = {
      get: function( elem, computed, extra ) {
        return $.css( elem, borderRadius );
      },
      set: function( elem, value) {
        elem.style[ borderRadius ] = value;
      }
    };
  }
})(jQuery);

(function($) {
 
 if ( $.support.someCSSProp && $.support.someCSSProp !== "someCSSProp" ) {
 
    $.cssHooks.someCSSProp = {
      get: function( elem, computed, extra ) {
        return $.css( elem, $.support.someCSSProp );
      },
      set: function( elem, value) {
        elem.style[ $.support.someCSSProp ] = value;
      }
    };
  } else if ( supportsProprietaryAlternative ) {
    $.cssHooks.someCSSProp = {
      get: function( elem, computed, extra ) {
      },
      set: function( elem, value ) {
      }
    }
  }
 
})(jQuery)