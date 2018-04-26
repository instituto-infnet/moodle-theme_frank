console.log('dashboard');

var lead =  document.querySelectorAll(".course-list .lead .fullname a");
var rgx = /\[([0-9]{2}[A-Z]{6}[0-9]{2}[A-Z]{3}[0-9]{3})\]\s(.{1,})\s\[([0-9]{2}E[0-9]{1}_[0-9]{1})\]/;

for (var i = 0; i <= lead.length-1; i++) {
  var fullname = lead[i].innerHTML;
  var groups = fullname.match(rgx);

  if (groups != null) {
    console.log(groups);
    lead[i].innerHTML = '<span class="disciplina-code">'+ groups[1] +'</span><span class="disciplina-code">'+ groups[3]+'</span><span class="disciplina-name">'+ groups[2] + '</span>';
  }
}
