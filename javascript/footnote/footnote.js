//FOOTNOTE JS
require(['jquery'], function($) {
  $( document ).ready(function() {
    $("a[rel=footnote]").each(function(){
      var link = $(this);
      console.log(link);
      var token = link.attr('href').substr(1);
      console.log(token);

      link.click(function(){
        var $currentFootnote = $(document.getElementById('overlay-' + token));
        console.log($currentFootnote);
        if ($currentFootnote.is(':visible')) {
          $currentFootnote.slideUp('fast');
        } else {
          $('.footnoteContent').hide();
          $currentFootnote.slideDown('fast');
        }
        return false;
      });
    });

    $('.footnoteContent a[rev=footnote]').remove();
    $('.footnoteContent').prepend('<a href="#" class="closeFootnote">x</a>');
    $('.closeFootnote').click(function(){
      $(this).closest('.footnoteContent').slideUp('fast');
      return false;
    });
  });
});
