(function(window) {
  var old$=window.jQuery||{};
  (function(new$) {
	if (window.$==window.jQuery) {
		window.$=new$;
	}
	window.jQuery=new$;
  })((function($) {
	$.themecrosser={};
	$.themecrosser.modes=["jQuery UI to Bootstrap","jQuery UI icons to FontAwesome"];
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
			//dialog
				"ui-dialog":"modal modal-dialog modal-content ml-0 mt-0",
				"ui-dialog-titlebar":"modal-header h5!card-header",
				"ui-dialog-title":"modal-title",
				//"ui-dialog-titlebar-close":"close!ui-button btn btn-primary card ui-corner-all rounded",
				"ui-dialog-content":"modal-body",
				"ui-dialog-buttonset":"modal-footer",
				
			//menu
			
				"ui-menu":"list-unstyled dropdown-menu position-static",
				"ui-menu&ui-front":"list-unstyled position-absolute ml-0!position-static",
				
				"ui-menu-item-wrapper":"dropdown-item",
				"ui-menu-item":"mh-25",
				"ui-menu-divider":"dropdown-divider",
				
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
				"ui-state-active":"active",
				
				
		},
		"jQuery UI icons to FontAwesome":{
			//"ui-icon":"fa",
			"ui-icon-triangle-1-s":"fa fa-caret-down fa-xs",	
			"ui-icon-triangle-1-e":"fa fa-caret-right fa-xs",
			"ui-icon-triangle-1-w":"fa fa-caret-left fa-xs",
			"ui-icon-triangle-1-n":"fa fa-caret-up fa-xs",
			"ui-icon-caret-1-e":"fas fa-angle-right",
			//"ui-corner-all&ui-icon-blank":"far fa-circle",
			//"ui-corner-all&ui-icon-blank&ui-state-active":"far fa-dot-circle",
		},
	};//"class-name&and-others or-others":"new classes!remove"
    function mod(classes) {
	    	var toBeRemoved=[],//array of classes to be removed
			stringifiedClasses=classes.toString();//the suggested classes to be changed about this element
		for (var themeMode=0; themeMode<$.themecrosser.modes.length; themeMode++) {
			for (var fullSelector in $.themecrosser.classMap[$.themecrosser.modes[themeMode]]) {
				var spaceQuery=fullSelector.split(/[\,\s]/g);
				for (var spaceSelector=0; spaceSelector<spaceQuery.length; spaceSelector++) {
					var andQuery=spaceQuery[spaceSelector].split(/&/g),
						total=0;
					for (var andSelector=0; andSelector<andQuery.length; andSelector++) {
						var input=stringifiedClasses.split(/[\,\s]/g);
						for (var inputItorator=0; inputItorator<input.length; inputItorator++) {
							if (input[inputItorator]===andQuery[andSelector]) {
								total++;
							}
						}
					}
					if (total===andQuery.length) {
						var thing=$.themecrosser.classMap[$.themecrosser.modes[themeMode]][fullSelector].split("!");
						stringifiedClasses+=" "+thing[0];
						if (thing.length>1) {
							toBeRemoved.push.apply(toBeRemoved,thing[1].split(/[\,\s]/g));
						}
					}
				}
			}
		}
		for (var removeItorator=0; removeItorator<toBeRemoved.length; removeItorator++) {
			stringifiedClasses=stringifiedClasses.replace(new RegExp(toBeRemoved[removeItorator], "g"),"");//"g" is the global flag for dynamic regexps
		}
    	return stringifiedClasses;
    }
	$.themecrosser.classFilter=mod;
    $.fn.extend({
      /*
	  toggleClass:( function( orig ) {
            return function(value,$switch,duration,easing,complete) {
              orig.call( this, mod(value),$switch,duration,easing,complete);
            };
       })( $.fn.toggleClass ),
	  //*/
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
	   /*
      switchClass:( function( orig ) {
            return function(value1,value2,duration,easing,complete) {
              orig.call( this, mod(value1),mod(value2),duration,easing,complete);
            };
       })( $.fn.switchClass ),
	   //*/
    });
    return $;
  })(window.jQuery));
})(this);
