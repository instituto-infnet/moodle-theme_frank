console.info('Profile');

function removeDeleteEvidenceIcon() {
  var linksApagarEvidencia = document.querySelectorAll('a[data-action="delete-evidence"]');
  for (var i = 0; i < linksApagarEvidencia.length; i++) {
    linksApagarEvidencia[i].style.display = 'none';
  }
}

function hideLearningPlansCols() {
  var planHead = document.querySelector('div[data-region="plans"] table thead');
  planHead.style.display = 'none';
  var planNode = document.querySelectorAll('tr[data-region="plan-node"]');
  for (var i = 0; i < planNode.length; i++) {
    var cols = planNode[i].children;
    for (var j = cols.length-1; j > 0; j--) {
      planNode[i].removeChild(cols[j]);
    }
    planNode[i].childNodes[1].setAttribute('colspan','4');
  }
}

function hideLinksPlans() {
  var links = document.querySelectorAll('div[data-region="plans"] .pull-left');
  for (var i = 0; i < links.length; i++) {
    links[i].style.display = 'none';
  }
}

hideLinksPlans();
hideLearningPlansCols();

require(['jquery'], function($) {

});
