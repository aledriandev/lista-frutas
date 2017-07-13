var frutas = [];

function agregarFruta(){
	var frutaIngresada=document.getElementById('ingresoFruta').value;
	var respuestaFrutal = document.getElementById('frutaNueva');
	
	var muchasFrutas = "";
	frutas.push(frutaIngresada);
	for ( i=0 ; i<frutas.length ; i++){
		muchasFrutas += i+1 + ". " + frutas[i] + "<br>";
	}

	respuestaFrutal.innerHTML = muchasFrutas;
	document.getElementById('ingresoFruta').value = "";
}