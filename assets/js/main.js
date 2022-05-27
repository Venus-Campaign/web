/**
* Template Name: Selecao - v2.1.0
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

})(jQuery);

//For showing selected button's form part
const lookbook = document.querySelector(".lookbook")
        const shetales = document.querySelector(".shetales")
        const shexplores = document.querySelector(".shexplores")
        const designing = document.querySelector(".designing")
        const webDevelopment = document.querySelector(".web_development")
        const communityFormation = document.querySelector(".community_formation")
        const sections = [lookbook, shetales, shexplores, designing, webDevelopment, communityFormation];
        // console.log(lookbook, shetales, shexplores, designing, webDevelopment, communityFormation);
        
        function view_section(name) {
          if(name==="lookbook") {
            lookbook.style.display = "block"
            sections.forEach(section => section != lookbook ? section.style.display = "none" : null)
          }
          if(name==="shetales") {
            shetales.style.display = "block"
            sections.forEach(section => section != shetales ? section.style.display = "none" : null)
          }
          if(name==="shexplores") {
            shexplores.style.display = "block"
            sections.forEach(section => section != shexplores ? section.style.display = "none" : null)
          }
          if(name==="designing") {
            designing.style.display = "block"
            sections.forEach(section => section != designing ? section.style.display = "none" : null)
          }
          if(name==="web_development") {
            webDevelopment.style.display = "block"
            sections.forEach(section => section != webDevelopment ? section.style.display = "none" : null)
          }
          if(name==="community_formation") {
            communityFormation.style.display = "block"
            sections.forEach(section => section != communityFormation ? section.style.display = "none" : null)
          }
        }

          lookbook.style.display = "none"
          shetales.style.display = "none"
          shexplores.style.display = "none"
          designing.style.display = "none"
          webDevelopment.style.display = "none"
          communityFormation.style.display = "none"

          const inputs = Array.from(document.querySelectorAll(".requirements input"))
          inputs.forEach(input => {
            input.addEventListener("change", () => {
              inputs.forEach(i => {
                if(i.checked) {
                  // console.log(i.value)
                  view_section(i.value)
                }
              })
            })
          })

          
          let myform =document.getElementById("myForm")
          let closebutton = document.getElementById("close-msg")
          let alertmsg = document.getElementById("success-alert")
          alertmsg.style.display="none"
        
          async function formsubmit(e) {
              e.preventDefault()
              const data = new FormData(myform);
              const res = await fetch("https://script.google.com/macros/s/AKfycbxinVCiId2kUWLwxxkliHWFru3sC_ecpdUtQy09nNu2C_JXqQ89F01aVKF10lrcIr7j/exec",
                {method:'post',body:data})
              if(res.ok){
                const resdata = await res.json()
                //console.log(resdata)
                if(resdata.result === "success"){
                  alertmsg.style.display="block"
                  }
                }
              }

        myform.addEventListener('submit',formsubmit)