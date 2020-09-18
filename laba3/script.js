function mult() {
	var	firstNum = parseInt(document.getElementById('firstNum').value);
	var	secondNum = parseInt(document.getElementById('secondNum').value);

	//в случае пустой строки значение = 0
	if(isNaN(firstNum) == true) firstNum = 0;
	if(isNaN(secondNum) == true) secondNum = 0;

	var mult = (firstNum / secondNum) * 2;

	document.getElementById('result').innerHTML = "(" + firstNum + " / " + secondNum + ")" + " * 2 " + " = " + mult;
}
function I() {
	var	r = parseInt(document.getElementById('r').value);
	var	u = parseInt(document.getElementById('u').value);

	//в случае пустой строки значение = 0
	if(isNaN(r) == true) r = 0;
	if(isNaN(u) == true) u = 0;

	var i = u / r;

	document.getElementById('result1').innerHTML = u + " / " + r + " = " + i + " Ампер";
}