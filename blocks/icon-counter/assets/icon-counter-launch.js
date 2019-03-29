/*lauch*/
(function($) {
  $( document ).ready(function() {
     window.addEventListener('scroll', iconcounterLaunch);

    // provides animation for the progress bar and the number with a multiplier
    function moveit(element, beginwidth ,maxwidth, multiplier) {
     var width = beginwidth;
     var innerBar = element.find(".innerBar");
     var counterNumber = element.find('.counter-number');
     innerBar.width(width + "%");
  //   console.log(element.css('width'));
     var id = setInterval(frame, 10);
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
    function iconcounterLaunch(){
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

      if(elementScrolled('.wp-block-achtvier-icon-counter-wrapper')) {

        $(".wp-block-achtvier-icon-counter-wrapper").each(function(index, element){
          var scrollspy = $(this).data("scrollspy");
          var innercounters = $(this).find('.wp-block-achtvier-icon-counter');

          innercounters.each(function(){
            console.log($(this).data("delay"));
            var barcounter = $(this);

            var iconsource = $(this).data("countericon");
            var iconwidth = $(this).data("countericonwidth");
            var iconmargin = $(this).data("iconmargin")
            var animationInterval = $(this).data('animationspeed');
            var counterbegin = $(this).data("counterbegin");
            var counterend = $(this).data("counterend");
            var counter = $(this).find(".icon-counter-inner");
            setTimeout(function(){
            var id = setInterval(frame, animationInterval);
            function frame() {
              if (counterbegin >= counterend) {
              clearInterval(id);
              } else {
              counterbegin++;
              var spanstyle = "style='margin-right: " + iconmargin + "px'";
              var iconstyle = "style='width: " + iconwidth + "px'";
              counter.append("<span " + spanstyle + " >" + "<img class='counter-icon' "+ iconstyle +" src='" + iconsource +  "'></span>");
             }
            }

            }, $(this).data("delay"));
          });
        });
      }
    }
});


})(jQuery);
