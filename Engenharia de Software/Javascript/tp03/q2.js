function fatorial() {
 
	let tempo 	 = new Date().getTime(),
		fatorial = Number(document.querySelector('#fatorial').value),
		calculo  = 1;

	for (let i = 1; i <= fatorial; i++) {
		calculo = calculo * i;
	}

	document.getElementById('r2').innerHTML = (`${fatorial}! =  ${calculo} (${new Date().getTime() - tempo} milisegundos)`);
}