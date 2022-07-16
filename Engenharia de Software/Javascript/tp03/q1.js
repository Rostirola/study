function calculo() {
 
	let min = Number(document.querySelector('#min').value),
		max = Number(document.querySelector('#max').value);

	if (min < max) {

		let numero = 0;

		for (let i = min+1; i < max; i++) {

			if (i % 2 == 0 && i % 3 == 0) {

				numero++;
			}
		}
		document.getElementById('r1').innerHTML = (`Existem ${numero} multiplos de 2 e 3 simultaneamente entre ${min} e ${max}`)
	} else {
		alert(`O valor minimo deve ser menor que o valor maximo`);
	}}



