console.log('Modal!!');
require(['jquery'], function($) {

  $(".btnfechar").click(function() {
    $(".pl-modal").addClass("hide");
    $(".overlay").addClass("hide");
  });

  // Aviso

  function setMsg() {
    //localStorage.display = 'block';
    var modalDisplay = localStorage.display;
    console.log(modalDisplay);
    $('#modal').css('display',modalDisplay);
  }

  $('#check').change(function() {
    if($(this).is(":checked")) {
      console.log("Check!");
      localStorage.display = 'none';
    }
  });

  $('.fechar').click(function(){
    $('#modal').css('display','none');
  });

  setMsg();
});
