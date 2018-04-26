console.info('Inits highlight!!');
/* HIGHLIGHT */
hljs.initHighlightingOnLoad();
/* FLUIDBOX */
require(['jquery'], function($) {
    //$('.pl-ra a').fluidbox();
    $.bigfoot({
      positionContent: true
    });
});
