function resh() {
	var firstNum = parseInt(document.getElementById("firstNum").value);
	var secondNum = parseInt(document.getElementById("secondNum").value);
	var m = parseInt(document.getElementById("m").value);

	var b = 0;
	var i;
	for (i = firstNum; i <= secondNum; i++) {
			var soten = parseInt(i / 100);
			if (soten % 2 == 1) {
				var res = Math.pow(soten, 2) * m;
			}
			if (res > 0 && res != predRes) {
			document.getElementById("result").innerHTML += res + "<br />";
			var predRes = res;	
			}
	}
}

function clear() {
	document.getElementById("result").innerHTML = "";
}
