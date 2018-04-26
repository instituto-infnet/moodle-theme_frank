console.info('Incourse');

require(['jquery'], function($) {
  $('<div class="caption-terceiros"><i class="fa fa-info-circle" aria-hidden="true"></i> Recursos de terceiros podem estar indisponívels ou "quebrados". Caso este recursos não esteja funcionando, entre em contato com a <a href="mailto:design.educacional@infnet.edu.br">equipe de DE</a></div>').insertAfter('.pl-embed-video');
});

(function(){
  //Aplica a classe pai do framework para a view dos recursos página e tarefa
  var assignView = document.querySelector('#page-mod-assign-view');
  var pageView = document.querySelector('#page-mod-page-view');

  if(assignView || pageView) {
    var regionMain = document.querySelector('#region-main');
    regionMain.classList.add('pl-ra');
  }

  function indicacaoFundamental() {
    var main = document.querySelectorAll("#region-main .generalbox .no-overflow p");
    for (var i = 0; i < main.length; i++) {
      main[i].outerHTML = main[i].outerHTML.replace(/<p>É fundamental que você acesse (?:o|os) recurs(?:o|os) abaixo:<\/p>/gi,'<p class="pl-resource-fundamental"><span>'+main[i].textContent+'</span></p>');
    }
  }

  function indicacaoComplementar() {
    var main = document.querySelectorAll("#region-main .generalbox .no-overflow p");
    for (var i = 0; i < main.length; i++) {
      main[i].outerHTML = main[i].outerHTML.replace(/<p>Se você quiser complementar seus conhecimentos, acesse (?:o|os) recurs(?:o|os) abaixo:<\/p>/gi,'<p class="pl-resource-complementar">'+main[i].textContent+'</p>');
    }
  }

  indicacaoFundamental();
  indicacaoComplementar();
})();
