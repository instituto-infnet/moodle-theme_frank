(function(){
  console.info('Course Competencies');

  function removeRequired() {
    var itens = document.querySelectorAll('.competency_activities_avaliable');
    var i;
    for (i = 0; i < itens.length; i++) {
      itens[i].innerHTML = itens[i].innerHTML.replace(/\[Obrigatório\]/gi,"");
    }
  }

  removeRequired();

  require(['jquery'], function($) {
    $.bigfoot({
      positionContent: false,
      buttonMarkup: "<div class='bigfoot-footnote__container'><button class=\"bigfoot-footnote__button no-btn\" id=\"{{SUP:data-footnote-backlink-ref}}\" data-footnote-number=\"{{FOOTNOTENUM}}\" data-footnote-identifier=\"{{FOOTNOTEID}}\" alt=\"See Footnote {{FOOTNOTENUM}}\" rel=\"footnote\" data-bigfoot-footnote=\"{{FOOTNOTECONTENT}}\">{{FOOTNOTEID}}</button></div>"
    });
  });

  setTimeout(function() {
    var btns = document.querySelectorAll('button[data-footnote-identifier]');
    var anchors = document.querySelectorAll('a.footnote-print-only');
    var len = btns.length;

    for (var i=0;i<len;i++) {
      btns[i].innerText = anchors[i].innerText;
    }
  }, 2000);
})();
