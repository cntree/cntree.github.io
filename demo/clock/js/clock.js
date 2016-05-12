(function ( $ ) {
  $.fn.extend({
    Clock: function (opt) {
      var elem = this;

      /*parse digit*/
      function parseDigit(digit) {
        var Digits = [
          [1, 0, 1, 1, 1, 1, 1],// 0
          [0, 0, 0, 0, 1, 0, 1],// 1
          [1, 1, 1, 0, 1, 1, 0],// 2
          [1, 1, 1, 0, 1, 0, 1],// 3
          [0, 1, 0, 1, 1, 0, 1],// 4
          [1, 1, 1, 1, 0, 0, 1],// 5
          [1, 1, 1, 1, 0, 1, 1],// 6
          [1, 0, 0, 0, 1, 0, 1],// 7
          [1, 1, 1, 1, 1, 1, 1],// 8
          [1, 1, 1, 1, 1, 0, 1],// 9
        ];
        switch (digit) {
          case 0:
            return Digits[0];
            break;
          case 1:
            return Digits[1];
          case 2:
            return Digits[2];
          case 3:
            return Digits[3];
          case 4:
            return Digits[4];
          case 5:
            return Digits[5];
          case 6:
            return Digits[6];
          case 7:
            return Digits[7];
          case 8:
            return Digits[8];
          case 9:
            return Digits[9];
          default:
            return Digits[8];
        }
      };
      /*control digital display mode: 0 none,1 display */
      function displayDigit(elem, digit) {
        for (var i = 0; i < digit.length; i++) {
          if (digit[i] == 0) {
            $(elem).children('.d' + (i+1)).css({display:'none'});
          } else {
            $(elem).children('.d' + (i+1)).css({display:'block'});
          }
        }
      }
      /*control hour display mode*/
      function disHour(hour) {
        if (hour < 10) {
          displayDigit('.hour .decade',parseDigit('0'));
          displayDigit('.hour .unit',parseDigit(hour));
        } else {
          var h = hour.toString();
          displayDigit('.hour .decade',parseDigit(parseInt(h.charAt(0))));
          displayDigit('.hour .unit',parseDigit(parseInt(h.charAt(1))));
        }
      }
      /*control minute display mode*/
      function disMinute(minute) {
        if (minute < 10) {
          displayDigit('.minute .decade',parseDigit(0));
          displayDigit('.minute .unit',parseDigit(minute));
        } else {
          var h = minute.toString();
          displayDigit('.minute .decade',parseDigit(parseInt(h.charAt(0))));
          displayDigit('.minute .unit',parseDigit(parseInt(h.charAt(1))));
        }
      }
      /*control second display mode*/
      function disSecond(second) {
        if (second < 10) {
          displayDigit('.second .decade',parseDigit(0));
          displayDigit('.second .unit',parseDigit(second));
        } else {
          var h = second.toString();
          displayDigit('.second .decade',parseDigit(parseInt(h.charAt(0))));
          displayDigit('.second .unit',parseDigit(parseInt(h.charAt(1))));
        }
      }
      /*run the clock*/
      function runClock() {
        var date = new Date();
        disHour(date.getHours());
        disMinute(date.getMinutes());
        disSecond(date.getSeconds());
      }
      /*set interval let the clock run*/
      setInterval(runClock, 500);

      return elem;
    }
  });
})( jQuery )
