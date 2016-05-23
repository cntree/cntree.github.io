+function ( $ ) {
  'use strict';

  var resume = function () {

    var page = $('.page'),
        pageHeight = $(window).height(),
        doc = $('html, body'),
        first = $('.page').first();

    doc.animate({scrollTop: 0});
    first.addClass('active');
    activemenu(first);
    page.css({height: pageHeight});

    function activemenu (current) {
      var current = current;
      var attr = $(current).attr('data-scroll-to');
      var menu = {},
          menus = {};
      menus = $('[data-scroll]');
      if (attr) {
        if (menus) {
          menu = $('[data-scroll=' + attr + ']');
          menus.removeClass('active');
          menu.addClass('active');
        }
      }
    };

    page.each(function () {

      var $this = this;
      var next = $($this).next();
      var prev = $($this).prev();
      var nextoffset = next.offset();
      var prevoffset = prev.offset();

      this.onmousewheel =function (event) {

        event = event || window.event;

        function wheel(event) {

          if (event.deltaY < 0) {

            if (prevoffset) {
              prev.siblings().removeClass('active');
              prev.addClass('active');
              activemenu(prev);
              doc.animate({scrollTop: prevoffset.top});

            } else if(event.deltaY > 0) {
              first.siblings().removeClass('active');
              first.addClass('active');
              activemenu(first);
              doc.animate({scrollTop: 0});
            }
          } else {

            if (nextoffset) {
              next.siblings().removeClass('active');
              next.addClass('active');
              activemenu(next);
              doc.animate({scrollTop: nextoffset.top});

            } else {
              first.siblings().removeClass('active');
              first.addClass('active');
              activemenu(first);
              doc.animate({scrollTop: 0});

            }
          }
        }
        setTimeout(wheel(event),1000);
      };
    });
  };
  $(window).on('resize', resume);
  $(document).ready(resume);

}( jQuery )
