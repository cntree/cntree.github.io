(function ( $ ) {
  'use strict';

  $.fn.scrollTo = function (opt) {

    //extend options
    var options = $.extend(true, {
      scroll: "data-scroll",
      to: "data-scroll-to",
      speed: 500
    }, opt);

    //var value
    var elem = this,
        doc = $("html, body"),
        scrolls = $(elem).find("[" + options.scroll + "]");

    $(scrolls).each(function () {

      var $elem = this,
          attr = $($elem).attr( options.scroll ),
          to = $("[" + options.to + "]"),
          currentto = $("[" + options.to + "=" + attr + "]"),
          offset = $(currentto).offset();

      $($elem).click(function () {
        $(scrolls).removeClass('active');
        $($elem).addClass('active');
        $(to).removeClass('active');
        $(currentto).addClass('active');
        if (offset) {
          doc.animate({scrollTop: offset.top}, options.speed);
        } else {
          doc.animate({scrollTop: 0}, options.speed);
        }

      });
    });
  };
})( jQuery );
