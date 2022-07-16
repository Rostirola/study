function onBtnClicked() {

	let quantidade = parseInt(document.querySelector('#quantidade').value), 
	  	minimo 	   = parseInt(document.querySelector('#minimo').value), 
	 	maximo 	   = parseInt(document.querySelector('#maximo').value);
		numeros    = vetor(quantidade, minimo, maximo);

	document.querySelector('#r4').innerHTML = JSON.stringify(numeros);
  }
  
  function vetor(quantidade, minimo, maximo){
	
	let numeros = {},
		i	    =0;
	
	while( i < quantidade ){

		let random = Math.round( (Math.random()*(maximo-minimo)) + minimo );
  
		if( numeros[random] )
			continue;
		  numeros[random]=true;
		  i++;
	  }

	  return Object.keys(numeros);
  }