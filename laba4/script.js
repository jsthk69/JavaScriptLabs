function resh() {
	var x = parseFloat(document.getElementById("x").value);
	var y = parseFloat(document.getElementById("y").value);
	var z = parseFloat(document.getElementById("z").value);

	var a = y / x;
	var b = Math.cbrt(a);
	var c = Math.pow(x, a);
	var d = Math.abs(b - c);
	var f = y - x;
	var g = z / f;
	var h = Math.cos(y) - g;
	var j = Math.pow(f, 2);
	var j = j + 1;
	var k = h / j;
	var l = f * k;
	var u = d + l;

	document.getElementById("result").innerHTML = u.toFixed(4);
		document.getElementById("result").style.color = "blue";
}
