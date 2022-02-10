(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    });

    $(function () { $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); 
        if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active'); }); 
     
     $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); }); });
     

jQuery('.mean-menu').meanmenu({ 
    meanScreenWidth: "1199" 
  });
  
	

   $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); }); 
   $(".others-options .search-box").on("click", function () { $(".search-overlay").toggleClass("search-overlay-active"); });
    $(".search-overlay-close").on("click", function () { $(".search-overlay").removeClass("search-overlay-active"); });
     $(".language-option").each(function () {
      var each = $(this)
      each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
       var allOptions = $(".language-dropdown-menu").children('a'); 
       each.find(".language-dropdown-menu").on("click", "a", function () { allOptions.removeClass('selected'); $(this).addClass('selected');
        $(this).closest(".language-option").find(".lang-name").html($(this).text()); });
  })
    
    // Service Slider
    $('.service_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin:10,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items:2,
            },
            992: {
                items:3,
            },
            1200: {
                items:3
            }
        }
    });
    // Project Slider
    $('.project_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items:2,
            },
            992: {
                items:3,
            },
            1500: {
                items:4
            },
            1800: {
                items:5
            }
        }
    });
    // Testimonial Slider
    $('.testimonial_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items:1,
            },
            992: {
                items:1,
            },
            1200: {
                items:1
            }
        }
    });
    
    // Blog Slider
    $('.blog_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items:2,
            },
            992: {
                items:3,
            },
            1200: {
                items:3
            }
        }
    });
    // Partner Slider
    $('.partner_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items:3,
            },
            992: {
                items:4,
            },
            1200: {
                items:6
            }
        }
    });

$('.video_btn').magnificPopup({
    disableOn: 50,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});



// Time count 
function makeTimer() {
    var endTime = new Date("September 20, 2025 17:00:00 PDT"); var endTime = (Date.parse(endTime)) / 1000; var now = new Date();
     var now = (Date.parse(now) / 1000); var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400); var hours = Math.floor((timeLeft - (days * 86400)) / 3600); 
     var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
     var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60))); if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days + "<span>Days</span>");
     $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>"); 
      $("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () { makeTimer(); }, 0);

jQuery(window).on('load', function () { jQuery(".preloader").fadeOut(500); });


}(jQuery));
  