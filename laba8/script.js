function resh() {
	var num = parseInt(document.getElementById("first").value);
	
	var a = 0;
	var b = 0;
	for (i = 1; i <= num; i++) {
		a = (i * 10) + i;
		b = b + a;
	}
	var res = b;
	document.getElementById("result").innerHTML = res;
}
