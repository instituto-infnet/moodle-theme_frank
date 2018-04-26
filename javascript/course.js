console.info('Course');
// Controi as ancoras das etapas da disciplina
function stepsAnchor(stepsList, anchorNav) {
  var steps, nav, sectionsTitle, listLenght, lastSectionTitle, delay;

  steps = document.querySelector(stepsList).children;
  nav = document.querySelector(anchorNav);
  sectionsTitle = document.querySelectorAll('.section .content .sectionname');
  listLenght = steps.length;
  delay = 0.3;

  for (i = 1; i < steps.length; i++) {
    var sectionTagName = sectionsTitle[i].textContent.toLowerCase();

    if (sectionTagName == 'assessment') {
      nav.innerHTML += '<li class="assessment"><a data-wow-delay="'+delay+'s" href="#section-'+ i +'"><span>AT</span></a></li>';
    } else if (sectionTagName == 'apresentação de projeto') {
      nav.innerHTML += '<li class="assessment"><a data-wow-delay="'+delay+'s" href="#section-'+ i +'"><span>AP</a></li>';
    } else if (sectionTagName == 'enade') {
      nav.innerHTML += '<li class="enade"><a data-wow-delay="'+delay+'s" href="#section-'+ i +'"><span>EN</a></li>';
    } else {
      nav.innerHTML += '<li class="etapa"><a data-wow-delay="'+delay+'s" href="#section-'+ i +'"><span>'+ i +'</span></a></li>';
    };
    delay = (delay * 10 + 0.1 *10)/10;
  };
}

function codesHeader() {
  var header = document.querySelectorAll(".page-header-headings h1");
  var rgx = /\[([0-9]{2}[A-Z]{6}[0-9]{2}[A-Z]{3}[0-9]{3})\]\s(.{1,})\s\[([0-9]{2}E[0-9]{1}_[0-9]{1})\]/;

  for (var i = 0; i <= header.length-1; i++) {
    var fullname = header[i].innerHTML;
    var groups = fullname.match(rgx);

    if (groups != null) {
      console.log(groups);
      header[i].innerHTML = '<span class="page-header-course-code">'+ groups[1] +'</span><span class="page-header-period-code">'+ groups[3]+'</span><span class="disciplina-fullname">'+ groups[2] + '</span>';
    }
  }
}

// Identifica se o TP tem o label "Obrigatorio" e aplica o estilo
function rubricComp() {
  var itens = document.querySelectorAll('.modtype_assign');
  var i;
  for (i = 0; i < itens.length; i++) {
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[Obrigatório\]/gi,"<span class='required_assign'>Obrigatório</span>");
  }
}

stepsAnchor('.topics', '.trail ul');

require(['jquery'], function($) {
  // Mantém a naveção das etapas na lateral da tela quando retornar pelo navegador
  $(window).on('load', function() {
    if ($(window).scrollTop() > 450) {
      $('.trail').addClass('side');
      $('.trail li a').addClass('wow zoomIn');
    };
  });

  // Muda a navegação das etapas para a lateral ao rolar o documento
  $(window).bind('scroll', function() {
    $(window).scrollTop() > 100 ? $('.navbar').addClass('shadow') : $('.navbar').removeClass('shadow');
    $(window).scrollTop() > 450 ? $('.trail').addClass('side') : $('.trail').removeClass('side');
  });

});

rubricComp();
codesHeader();
