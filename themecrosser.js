(function(window) {
  var old$=window.jQuery;
  (function(new$) {
    if (window.$==window.jQuery) {
      window.$=new$;
    }
    window.jQuery=new$;
  })((function($) {
    var classMap={
		//Widget-card
			"ui-widget":"card",
			"ui-widget-header":"card-header",
			"ui-widget-content":"card-block",

			"card":"ui-widget",
			"card-header":"ui-widget-header",
			"card-block":"ui-widget-content",
		//sr
			"ui-helper-hidden-accessible":"sr-only",
			
			"sr-only":"ui-helper-hidden-accessible",
		//corners
			"ui-corner-all":"rounded",
			"ui-corner-top":"rounded-top",
			"ui-corner-bottom":"rounded-bottom",
			"ui-corner-left":"rounded-left",
			"ui-corner-right":"rounded-right",

			"rounded":"ui-corner-all",
			"rounded-top":"ui-corner-top",
			"rounded-bottom":"ui-corner-bottom",
			"rounded-left":"ui-corner-left",
			"rounded-right":"ui-corner-right",
		//accordion
			"ui-accordion-header":"card-header",
			"ui-accordion-header-collapsed":"rounded",
			"ui-accordion-content":"card-block",
		//btn
			"btn":"ui-button",
			
			"ui-button":"btn",
	};// change to "class-name":"new classes"
    function mod(classes) {
		for (var ii in classMap) {
			var q=ii.split(/[\,\s]/g);
			for (var iii=0; iii<q.length; iii++) {
				var qq=q[iii].split(/&/g),
					total=0;
				for (var iiii=0; iiii<qq.length; iiii++) {
					var input=classes.split(/[\,\s]/g);
					for (var i=0; i<input.length; i++) {
						if (input[i]===q[iiii]) {
							total++;
						}
					}
				}
				if (total=qq.length) {
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
