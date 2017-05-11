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
    $.fn.addClass=function(class) {
      
      this.addClass(class);
    }
    return $;
  })(window.jQuery))
})(this)
