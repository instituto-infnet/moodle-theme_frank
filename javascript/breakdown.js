console.info('Breakdown');

function removeDeleteEvidenceIcon() {
  var linksApagarEvidencia = document.querySelectorAll('a[data-action="delete-evidence"]');
  console.log(linksApagarEvidencia);
  for (var i = 0; i < linksApagarEvidencia.length; i++) {
    linksApagarEvidencia[i].style.display = 'none';
  }
}

function widthList() {
  var listaCompetencias = document.querySelector('div[data-region="competency-breakdown-report"] .span6');
  listaCompetencias.setAttribute('class','span12');
}

//widthList();

//removeDeleteEvidenceIcon();


