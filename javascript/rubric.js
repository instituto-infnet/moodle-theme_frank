console.info("Rubrica")

// Aplica o label obrigatorio nos itens de rubrica
function rubricRequired() {
  var itens = document.querySelectorAll(".description");
  var i;
  for (i = 0; i < itens.length; i++) {
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[competência obrigatória\]/gi,'<span class="obg-hl">Obrigatória</span>');
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[subcompetência obrigatória\]/gi,'<span class="obg-hl">Obrigatória</span>');
  }
}

// Aplica estilo para as subcompetencias dos itens de rubrica
function rubricComp() {
  var itens = document.querySelectorAll(".description");
  var i;
  for (i = 0; i < itens.length; i++) {
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[c\]/gi,'<span class="comp">');
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[\/c\]/gi,'</span>');
  }
}

// Aplica estilo para as subcompetencias dos itens de rubrica
function rubricTp() {
  var itens = document.querySelectorAll(".description");
  var i;
  for (i = 0; i < itens.length; i++) {
    var str = itens[i].innerHTML;
    var res = str.match(/(TP\d+)/g);
    if (res != null) {
      var lwrres = res.toString().toLowerCase();
    }
    itens[i].innerHTML = itens[i].innerHTML.replace(/\[(TP\d+)\]/gi,'<span class="tpn '+lwrres+'">' + res +'</span>');
  }
}

function removeCol() {
  var c0 = document.querySelectorAll(".submissionstatustable td.c0");
  c0[5].nextElementSibling.setAttribute("colspan", "2");
  c0[5].remove();
}

// Inverte a sequancia dos botoes
function btnInvert() {
  var botoesRubrica = document.querySelectorAll(".submissionstatustable > div");
  var btn1 = botoesRubrica[1].innerHTML;
  var btn2 = botoesRubrica[2].innerHTML;
  botoesRubrica[1].innerHTML = btn2;
  botoesRubrica[2].innerHTML = btn1;
}

function addLinha(table, index) {
  var tableRef = document.getElementsByClassName(table);
  var botoesRubrica = document.querySelectorAll(".submissionstatustable > div");
  var newRow = tableRef[1].insertRow(index);
  var newCell = newRow.insertCell(0);
  newCell.setAttribute('colspan','2');
  //add conteúdo e div para receber os botoes
  newContent = document.createElement('div');
  newContent.setAttribute('class','btns_submit');
  newContent.innerHTML = '';
  for (var i = 1; i < botoesRubrica.length; i++) {
    newContent.innerHTML = newContent.innerHTML + botoesRubrica[i].innerHTML;
  }
  newCell.appendChild(newContent);
}

// Inicia as funcoes
//removeCol();
rubricRequired();
rubricComp();
rubricTp();

