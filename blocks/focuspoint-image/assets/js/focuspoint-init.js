

(function($) {
  $(document).ready(function(){
    //var imgEl = document.querySelector('img.focuspoint-pic');
    //var focusedImage = new imageFocus.FocusedImage(imgEl);
    function init_focuspoint(){
      var imgEls = document.getElementsByClassName("focuspoint-pic");
      for (i = 0; i < imgEls.length; i++) {

        var focusedImage = new imageFocus.FocusedImage(imgEls[i]);
        //imgEls[i].style.backgroundColor = "red";
      }
    }
    init_focuspoint();
    // we also reinitialize if we have owl-carousel - wrapper block
    $('.wp-block-achtvier-block-achtvier-guten-slider').on('initialized.owl.carousel',function(){
      init_focuspoint();

    });

  });
})(jQuery);
