(function(window) {
  (function(new$) {
    if (window.$==window.jQuery) {
      window.$=new$;
    }
    window.jQuery=new$;
  })((function($) {
    var classMap=[
      //""
    ]
    $.fn.addClass=function(class,and,other,varubles) {
      var classes=class;
      
      this.addClass(classes,and,other,varubles);
    }
    return $;
  })(window.jQuery))
})(this)
