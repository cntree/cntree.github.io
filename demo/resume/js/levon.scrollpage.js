(function ( $ ) {
  'use strict';

  var Scrollpage = function (el) {
    $(el).ready(this.init);
  }

  Scrollpage.prototype.init = function () {
    var doc = $('html, body');
    doc.css('box-sizing', 'border-box');
    if (true) {

    }
    this.height = $(window).height();
  };


})( jQuery )
