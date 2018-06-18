(function(window) {
  var old$=window.jQuery||{};
  (function(new$) {
	if (window.$==window.jQuery) {
		window.$=new$;
	}
	window.jQuery=new$;
  })((function($) {
	$.themecrosser={};
	$.themecrosser.mode="jQuery UI to Bootstrap";
	$.themecrosser.classMap={
		"Bootstrap to jQuery UI":{
			//btn
				"btn":"ui-button",
				"btn&btn-primary":"ui-button .ui-priority-primary",
				"btn&btn-secondary":"ui-button .ui-priority-secondary",
				"btn&btn-warning":"ui-button .ui-state-highlight",
				"btn&btn-danger":"ui-button .ui-state-error",
			//Widget-card
				"card":"ui-widget",
				"card-header":"ui-widget-header",
				"card-block":"ui-widget-content",
			//sr
				"sr-only":"ui-helper-hidden-accessible",
			//corners
				"rounded":"ui-corner-all",
				"rounded-top":"ui-corner-top",
				"rounded-bottom":"ui-corner-bottom",
				"rounded-left":"ui-corner-left",
				"rounded-right":"ui-corner-right",
		},
		"jQuery UI to Bootstrap":{
			//accordion
				"ui-accordion-header":"card-header",
				"ui-accordion-header-collapsed":"rounded",
				"ui-accordion-content":"card-block",
			//btn
				"ui-button":"btn btn-primary!card",
				"ui-button&.ui-state-highlight":"btn btn-warning!btn-primary",
				"ui-button&.ui-state-error":"btn btn-danger!btn-primary",
				//"ui-button&.ui-priority-primary":"btn btn-primary",
				"ui-button&.ui-priority-secondary":"btn btn-secondary!btn-primary",
			//btn-group
				"ui-controlgroup":"btn-group",
			//Widget-card
				"ui-widget":"card",
				"ui-widget-header":"card-header",
				"ui-widget-content":"card-block",
			//sr
				"ui-helper-hidden-accessible":"sr-only",
			//corners
				"ui-corner-all":"rounded",
				"ui-corner-top":"rounded-top",
				"ui-corner-bottom":"rounded-bottom",
				"ui-corner-left":"rounded-left",
				"ui-corner-right":"rounded-right",
			//states
				"ui-state-active":"active"
		},//"class-name&and-others or-others":"new classes!remove"
	};
	function uniqueArray(names) {
		//var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
		var uniqueNames = [];
		$.each(names, function(i, el){
			if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
		});
		return uniqueNames;
	}
    function mod(classes) {
	    	var i,
		    ii,
		    rlist=[],
			nClasses=classes.toString();
		for (ii in $.themecrosser.classMap[$.themecrosser.mode]) {
			var q=uniqueArray(ii.split(/[\,\s]/g));
			for (var iii=0; iii<q.length; iii++) {
				var qq=uniqueArray(q[iii].split(/&/g)),
					total=0;
				for (var iiii=0; iiii<qq.length; iiii++) {
					var input=uniqueArray(nClasses.split(/[\,\s]/g));
					for (i=0; i<input.length; i++) {
						if (input[i]===q[iiii]) {
							total++;
						}
					}
				}
				if (total===qq.length) {
					var thing=$.themecrosser.classMap[$.themecrosser.mode][ii].split("!");//does not need to be linted by uniqueArray()
					nClasses+=" "+thing[0];
					if (thing.length>1) {
						rlist.push.apply(rlist,uniqueArray(thing[1].split(/[\,\s]/g)));
					}
				}
			}
      	}
		rlist=uniqueArray(rlist);
		for (i=0; i<rlist.length; i++) {
			nClasses=nClasses.replace(new RegExp(rlist[i], "g"),"");//"g" is the global flag for dynamic regexps
		}
    	return nClasses;
    }
	$.themecrosser.classFilter=mod;
    $.fn.extend({
      toggleClass:( function( orig ) {
            return function(value,$switch,duration,easing,complete) {
              orig.call( this, mod(value),$switch,duration,easing,complete);
            };
       })( $.fn.toggleClass ),
      addClass:( function( orig ) {
            return function(value,duration,easing,complete) {
              orig.call( this, mod(value),duration,easing,complete);
            };
       })( $.fn.addClass ),
      removeClass:( function( orig ) {
            return function(value,duration,easing,complete) {
              orig.call( this, mod(value),duration,easing,complete);
            };
       })( $.fn.removeClass ),
      switchClass:( function( orig ) {
            return function(value1,value2,duration,easing,complete) {
              orig.call( this, mod(value1),mod(value2),duration,easing,complete);
            };
       })( $.fn.switchClass ),
    });
    return $;
  })(window.jQuery));
})(this);
