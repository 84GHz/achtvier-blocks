/*lauch*/
(function($) {
  $( document ).ready(function() {
     window.addEventListener('scroll', counterLaunch);

    // provides animation for the progress bar and the number with a multiplier
    function move(element, beginwidth ,maxwidth, multiplier, animationspeed) {
     var width = beginwidth;
     var innerBar = element.find(".innerBar");
     var counterNumber = element.find('.counter-number');
     innerBar.width(width + "%");
  //   console.log(element.css('width'));
     var id = setInterval(frame, animationspeed);
   function frame() {
     if (width >= maxwidth) {
     clearInterval(id);
     } else {
     width++;
     innerBar.width(width + "%");
     counterNumber.html(width * multiplier);
    }
   }
  }
    function counterLaunch(){
      // This is then function used to detect if the element is scrolled into view
      function elementScrolled(elem)
      {
        if($(elem).length) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          if((elemTop <= docViewBottom) && (elemTop >= docViewTop) && !($(elem).hasClass("anim-started"))) {
            $(elem).addClass("anim-started");
            return true;
          }
          else {return false}
        }
        else { return false }

      }

      if(elementScrolled('.wp-block-achtvier-counter-wrapper')) {

        $(".wp-block-achtvier-counter-wrapper").each(function(index, element){
          var scrollspy = $(this).data("scrollspy");
          var innercounters = $(this).find('.wp-block-achtvier-bar-counter');

          innercounters.each(function(){
            console.log($(this).data("delay"));
            var barcounter = $(this);
            setTimeout(function(){
              move(barcounter,barcounter.data('counterbegin'),barcounter.data('counterend'),barcounter.data('multplier'), barcounter.data('animationspeed'));
            }, barcounter.data("delay"));
          });
        });
      }
    }
});


})(jQuery);
