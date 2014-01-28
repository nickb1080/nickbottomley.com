// Generated by CoffeeScript 1.6.3
(function() {
  window.Nick = (function(nick, $) {
    nick.pageSetup = function() {
      var getBgImages;
      getBgImages = function() {
        return nick.el.$lazyBg.each(function() {
          var data;
          data = $(this).data("lazy-bg").split(";");
          return $(this).css({
            backgroundImage: data[0]
          });
        });
      };
      return getBgImages();
    };
    return nick;
  })(window.Nick || {}, jQuery);

}).call(this);
