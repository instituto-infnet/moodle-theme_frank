console.info('Report Competency');

function removeElement(e) {
  var element = document.querySelector(e);
  if (element) {
    element.remove();
  }
}

removeElement('.header-button-group');
