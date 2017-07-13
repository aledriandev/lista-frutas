# lista-frutas
## Resultado
![Alt-Text](front.png)
## Pasos

1 En HTML
  * Titulo: Frutas Master con tamaño de titilo h1
  * Comentario: **Frutas Master** es una empresa familiar de tercera generación que...
  * Insertar imagen (en este caso un gif).
  * Se puede hacer un div o un span para colocar la respuesta o el resultado que se desea al presionar el boton.
  * Agregar un input (para insertar el nombre de la nueva fruta) y un button (para realizar la accion de agragar la fruta insertada al hacer click)
  	```html
	<body>
		<h1>Frutas Master</h1>
		<p>
			<strong>Frutas Master</strong> es una empresa familiar de tercera generación que se dedica a la compra, venta y distribución de frutas al pormayor.
		</p>
		<p>
			En la actualidad, somos la empresa lider en el servicio de distribución de frutas
		</p>
		<img src="frutas_animadas.gif">
		<p>
			<strong>Catálogo: <br></strong>
		</p>
		<p>
			<span id="frutaNueva"></span>
		</p>
		<script src="js/javascript.js"></script>
		<p>
	        <input type="text" id="ingresoFruta"/>
	      	<button onclick="agregarFruta()">Agregar</button>
	    </p>
	</body>
  	```
2 En Javascript
	* Se creo un array vacio, llamado: frutas, que almacenara cada fruta que se agregue
	* Una vez ejecutado el boton "Agregar" se realizara la funcion agregarFruta(), ya especificada en el HTML, se efectuara lo siguiente:
		> Se crea una variable que almacenara la fruta insertada en el input (frutaIngresada).
		> Tambien se crea una variable que almacenara la respuesta que aparecera en el HTML.
		> Pusheamos en el array frutas cada nueva fruta agregada.
		> Recorremos el array y lo almacenamos como texto en una variable vacia, como queremos que se lea nuestro resultado.
		> Llevamos la respuesta almacenada al HTML usando innerHTML.
		> Al terminar de mostrar la respuesta, vaciamos el input.
			


			```javascript

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
		  	``` 
