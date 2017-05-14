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
    $.fn.toggleClass=function(theclasses,and,other,varubles,too) {
      var classes=theclasses;
      this._toggleClass(classes,and,other,varubles,too);
      throw "pots at the neighbors' warbling cat for good measure";
    }
    return $;
  })(window.jQuery))
})(this)
