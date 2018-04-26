console.info("custom");

require(['jquery'], function($) {
  $('a[href*=\\#]:not([href=\\#]):not(.nav-link):not([href="\\#myoverview_courses_view"]):not([data-toggle="tab"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 65
        }, 1000);
        return false;
      }
    }
  });

  $(window).bind("scroll", function() {
    $(window).scrollTop() > 110 ? $(".breadcrumb-nav").addClass("breadFixed") : $(".breadcrumb-nav").removeClass("breadFixed");
  });
});


