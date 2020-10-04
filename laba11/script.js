function resh() {
	var firstNum = parseInt(document.getElementById("firstNum").value);
	var secondNum = parseInt(document.getElementById("secondNum").value);
	var b = 1;
	var res = 0;
	for (var i = 1; i <= firstNum; i++) {
		b = 1;
		for (var j = 1; j <= secondNum; j++) {
			b *= (3 * i - j)
		}
		res += b
	}

	document.getElementById("result").innerHTML = res;
}

function wiki() {
	var rad = document.getElementsByName('r1');
	k = document.getElementById('pht').src;

	for (var i = 0; i < rad.length; i++) {
		if (rad[i].checked) {
			i = i + 1;
			m = i;
		}
	}

	var wiki;
	switch (m) {
		case 1:
			wiki = "1.png"
			break;
		case 2:
			wiki = "2.png"
			break;
		case 3:
			wiki = "3.png"
			break;
	}

	document.getElementById('pht').src = wiki;
}