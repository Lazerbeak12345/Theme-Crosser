(function(window) {
  var old$=window.jQuery;
  (function(new$) {
    if (window.$==window.jQuery) {
      window.$=new$;
    }
    window.jQuery=new$;
  })((function($) {
    var classMap=[
      "card ui-widget",
      "rounded-top ui-corner-top ui-accordion-header",
      "rounded ui-corner-all ui-accordion-header-collapsed",
      "rounded-bottom ui-corner-bottom ui-accordion-content"
    ];
    function mod(classes) {
      var input=classes.split(/[\,\s]/g);
      for (var i=0; i<input.length; i++) {
				for (var ii=0; ii<classMap.length; ii++) {
					if (classMap[ii].includes(input[i])) {
						classes+=" "+classMap[ii];
					}
				}
      }
      return classes;
    };
    //throw "pots at the neighbors' warbling cat for good measure";
    $.fn.extend({
      toggleClass:( function( orig ) {
            return function(value,$switch,duration,easing,complete) {
              var newVal=mod(value);
              orig.call( this, newVal,$switch,duration,easing,complete);
            }
       })( $.fn.toggleClass ),
      addClass:( function( orig ) {
            return function(value,duration,easing,complete) {
              var newVal=mod(value);
              orig.call( this, newVal,duration,easing,complete);
            }
       })( $.fn.addClass ),
      removeClass:( function( orig ) {
            return function(value,duration,easing,complete) {
              var newVal=mod(value);
              orig.call( this, newVal,duration,easing,complete);
            }
       })( $.fn.removeClass ),
      switchClass:( function( orig ) {
            return function(value1,value2,duration,easing,complete) {
              var newVal1=mod(value1),
                  newVal2=mod(value2);
              orig.call( this, newVal1,newVal2,duration,easing,complete);
            }
       })( $.fn.switchClass ),
    });
    return $;
  })(window.jQuery))
})(this)
