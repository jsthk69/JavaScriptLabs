function resh() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let c = parseFloat(document.getElementById("c").value);

	let min;
	(a < b) && (a < c) ? min = a : ((b < a) && (b < c) ? min = b: min = c);
	
	document.getElementById("result").innerHTML = min;
}
