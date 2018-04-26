console.log('INITS!!');
/* HIGHLIGHT */
hljs.initHighlightingOnLoad();

/* FLUIDBOX */
require(['jquery'], function($) {
    $(".pl-ra img").addClass('pl-img-responsive').wrap(function() {
      return "<a href='" + $(this).attr('src') + "'></a>";
    });

    $('.pl-ra a').fluidbox({
      stackIndex: 1000
    });

    $.bigfoot({
      positionContent: false
    });
});


