function resh() {
	var x = parseFloat(document.getElementById("x").value);
	var y = parseFloat(document.getElementById("y").value);
	
	//Проверка на пустую строку или символ не являющийся числом
	if(isNaN(x) == true) x = 0;
	if(isNaN(y) == true) y = 0;
	
	var f;
	if (document.getElementById('f1').checked == true) { f = parseInt(document.getElementById('f1').value); }
	if (document.getElementById('f2').checked == true) { f = parseInt(document.getElementById('f2').value); }
	if (document.getElementById('f3').checked == true) { f = parseInt(document.getElementById('f3').value); }

	var c;
	var z;
	var v;
		switch (f) { 
			case 1:
				c = Math.cos(y);
				z = Math.cos(Math.tan(y));
				v = Math.cos(x);
				break;
			case 2:
				c = Math.sqrt(y);
				z = Math.sqrt(Math.tan(y));
				v = Math.sqrt(x);
				break;
			case 3:
				c = Math.exp(y);
				z = Math.exp(Math.tan(y));
				v = Math.exp(x);
				break;
        }
		
	var m;
           if ((x / y) > 0) {
			   m = (1 / Math.tan(x)) + c;
		   }
		   if ((x / y) < 0) {
			   m = Math.log(x) + z;
		   }
		   else {
			   m = v * Math.pow(y, 3);
		   }
		 
	if (document.getElementById('round').checked)
            { m = Math.round(m); }

	document.getElementById("result").innerHTML = m;
}
