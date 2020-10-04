function resh() {
	var x = parseInt(document.getElementById("x").value);
	var r = parseInt(document.getElementById("r").value);
	var m = parseInt(document.getElementById("m").value);

	var f;
	if (document.getElementById('v1').checked == true) { f = parseInt(document.getElementById('v1').value); }
	if (document.getElementById('v2').checked == true) { f = parseInt(document.getElementById('v2').value); }

	var i, res;
	var b = 0;
	var a = 0;  
	switch (f) {
		case 1:
			while (a < Math.abs(r)) {
				a = x * (x + 1);
				b = b + a;
				x = x + 1;	
			}
			res = b;
		    break;
		case 2:
			for (i = x; i <= m; i++) {
				a = i * (i + 1);
				b = b + a;
			}
			res = b;
			break;
		default:
			res = "Не выбрано действие."
	}

	document.getElementById("result").innerHTML = res;
}
