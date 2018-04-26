console.info('incourse');

(function(){
  var assignView = document.querySelector('#page-mod-assign-view');
  var pageView = document.querySelector('#page-mod-page-view');

  if(assignView || pageView) {
    var regionMain = document.querySelector('#region-main');
    regionMain.classList.add('pl-ra');
  }
})();
