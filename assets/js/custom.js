/* -----------------------------------

  # Template Name: Coinbase
  # Author: tophive
  # Version: 1.0

-------------------------------------*/

/*
-----------------------------------------
Index
-----------------------------------------
# 01. counter
# 02. bootstrap menu effect
# 03. client carousel
# 04. payment carousel
# 05. scroll to top
# 06. wow
# 07. page loader

*/


(function($) {
  'use strict';

  /* document ready all function here */
  $(document).ready(function() {

    /* -----------------------------------
            01. counter
        -------------------------------------*/
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    /* -----------------------------------
         02. bootstrap menu effect
     -------------------------------------*/
    $('.dropdown').on('show.bs.dropdown', function(e) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function(e) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    $(".dropdown-menu-coin1 a").on('click', function() {
      $("#dropdowncoin1 .selected-coin1").text($(this).text());
    });

    $(".dropdown-menu-coin2 a").on('click', function() {
      $("#dropdowncoin2 .selected-coin2").text($(this).text());
    });

    $(".dropdown-menu-coin3 a").on('click', function() {
      $("#dropdowncoin3 .selected-coin3").text($(this).text());
    });

    $(".dropdwon-language a").on('click', function() {
      $("#dropdownlanguage .selected-language").html($(this).html());
    });

    /* -----------------------------------
        03. client carousel
    -------------------------------------*/
    $('.client-carousel').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });

    /* -----------------------------------
        04. payment carousel
    -------------------------------------*/
    $('.payment-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 5
        },
        1000: {
          items: 7
        }
      }
    });

    /* -----------------------------------
        05. scroll to top
    -------------------------------------*/
    $('#go-to-top').each(function() {
      $(this).on('click', function() {
        $('html,body').animate({
          scrollTop: 0
        }, 'slow');
        return false;
      });
    });

  /* window on load all function here */
  $(window).on('load', function() {

    /* -----------------------------------
        07. page loader
    -------------------------------------*/
    $('.page-loading').fadeOut();
    var full_height = $(window).height();
    $(".full-bg").css({ "height": full_height });

    /* -----------------------------------
        06. wow
    -------------------------------------*/
   if($('.wow').length){
        var wow=new WOW( {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {}
            , scrollContainer: true // optional scroll container selector, otherwise use window
        }
        );
        wow.init();
    }

  });

  });

})(jQuery)