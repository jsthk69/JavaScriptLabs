function resh() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let x = parseFloat(document.getElementById("x").value);
	let f;
	
	if (x < -1) {f = 0;}
	else if (-1 <= x <= 1) {f = a + b;}	
	if (x > 1) {f = 1;}
	
	document.getElementById("result").innerHTML = f.toFixed(3);
		document.getElementById("result").style.color = "blue";
}
