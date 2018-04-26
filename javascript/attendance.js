function checkAbsent() {
	var statusAnchors = document.querySelectorAll('table.takelist th.header');
	var statusLength = statusAnchors.length;
	var absentIndex;

	for (var i = 0; i < statusLength; i++) {
		var anchor = statusAnchors[i];

		if (anchor.innerText === 'Au') {
			absentIndex = i;
			break;
		}
	}

	if (typeof absentIndex === 'undefined') {
		return;
	}

	var tableRows = document.querySelectorAll('table.takelist tbody tr:not(.userwithoutenrol):not(.userwithoutdata)')
	var rowsLength = tableRows.length;

	for (i = 1; i < rowsLength; i++) {
		var row = tableRows[i];

		var rowFilled = false;

		var inputs = row.querySelectorAll('input[type=radio]');
		var inputsLength = inputs.length;

		for (var j = 0; j < inputsLength; j++) {
			if (inputs[j].checked === true) {
				rowFilled = true;
				break;
			}
		}

		if (rowFilled === false) {
			row.querySelector('td.c' + absentIndex + ' input[type=radio]').click();

			console.log(
				'Marcação automática de "Ausente" para ' +
				row.querySelector('td.c1 a:last-child').innerText
			);
		}
	}
}

// http://stackoverflow.com/questions/5997450/append-to-url-and-refresh-page
function URL_add_parameter(url, param, value){
	var hash       = {};
	var parser     = document.createElement('a');

	parser.href    = url;

	var parameters = parser.search.split(/\?|&/);

	for(var i=0; i < parameters.length; i++) {
		if(!parameters[i])
			continue;

		var ary      = parameters[i].split('=');
		hash[ary[0]] = ary[1];
	}

	hash[param] = value;

	var list = [];
	Object.keys(hash).forEach(function (key) {
		list.push(key + '=' + hash[key]);
	});

	parser.search = '?' + list.join('&');
	return parser.href;
}

function refreshNoPagination() {
	var pageCount = document.querySelectorAll('body#page-mod-attendance-take div.takecontrols span.attbtn');
	if (pageCount.length && pageCount[0].innerText.split('of ')[1] > 1) {
		location.href = URL_add_parameter(location.href, 'perpage', 0);
	}
}

refreshNoPagination();
checkAbsent();
