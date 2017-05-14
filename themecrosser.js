(function(window) {
  var old$=window.jQuery;
  (function(new$) {
    if (window.$==window.jQuery) {
      window.$=new$;
    }
    window.jQuery=new$;
  })((function($) {
    var classMap=[
      "rounded-top,ui-corner-top,ui-accordion-header",
      "rounded,ui-corner-all,ui-accordion-header-collapsed",
      "rounded-bottom,ui-corner-bottom,ui-accordion-content"
    ]
    $.fn.addClass=function(theclasses,and,other,varubles) {
      var classes=theclasses;
      
      old$(this).addClass(classes,and,other,varubles);
    }
    return $;
  })(window.jQuery))
})(this)
