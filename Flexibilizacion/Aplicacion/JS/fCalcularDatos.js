//Funcion que calcula el tamaño de los vectores para proteger de errores de usuario
function calcularDatos(){
	//alert("calcular datos");
	var niesSirai = document.getElementById('nies').value;
	var arrayNiesSirai = niesSirai.split("\n");
	
	var nombreSirai = document.getElementById('nombresSirai').value;
	var arrayNombreSirai = nombreSirai.split("\n");
	
	var nombresCuadrosText = document.getElementById('nombresCuadros').value;
	var arrayNombresCuadros = nombresCuadrosText.split("\n");
		
	var lenguajeText = document.getElementById('lenguaje').value;
	var arrayLenguaje = lenguajeText.split("\n");
	
	var matematicasText = document.getElementById('matematicas').value;
	var arrayMatematicas = matematicasText.split("\n");
	
	var cienciasText = document.getElementById('ciencias').value;
	var arrayCiencias = cienciasText.split("\n");
	
	var socialesText = document.getElementById('sociales').value;
	var arraySociales = socialesText.split("\n");
	
	var inglesText = document.getElementById('ingles').value;
	var arrayIngles = inglesText.split("\n");
	
	var totalNiesSirai = arrayNiesSirai.length-1;
	var totalNombresSirai = arrayNombreSirai.length-1;
	var totalnombresCuadros = arrayNombresCuadros.length-1;
	var totalLenguaje = arrayLenguaje.length-1;
	var totalMatematicas = arrayMatematicas.length-1;
	var totalCiencias = arrayCiencias.length-1;
	var totalSociales = arraySociales.length-1;
	var totalIngles = arrayIngles.length-1;
	
	document.getElementById('labelNiesSirai').innerHTML = totalNiesSirai;
	document.getElementById('labelNombresSirai').innerHTML = "Total:" + " " +  totalNombresSirai;
	document.getElementById('labelNombresCuadros').innerHTML = "Total:" + " " +  totalnombresCuadros;
	document.getElementById('labelLenguaje').innerHTML = "Total:" + " " +  totalLenguaje;
	document.getElementById('labelMatematicas').innerHTML = "Total:" + " " +  totalMatematicas;
	document.getElementById('labelCiencias').innerHTML = "Total:" + " " +  totalCiencias;
	document.getElementById('labelSociales').innerHTML = "Total:" + " " +  totalSociales;
	document.getElementById('labelIngles').innerHTML = "Total:" + " " +  totalIngles;
	
	
	if(totalnombresCuadros==totalLenguaje && totalnombresCuadros==totalMatematicas && totalnombresCuadros==totalCiencias && totalnombresCuadros==totalSociales && totalnombresCuadros==totalIngles && totalNombresSirai>0){
		if(totalnombresCuadros>0){
			var estadoBoton = document.getElementById('botonTransformar').value;
			if(estadoBoton == "Transformar -- (3)"){
				document.getElementById('botonMejorarTexto').disabled=false;
				document.getElementById('botonMejorarTexto').classList.remove('boton21');
				document.getElementById('botonMejorarTexto').classList.add('boton222');
			}
		}
		
	}
	if(totalnombresCuadros!=totalLenguaje || totalnombresCuadros!=totalMatematicas || totalnombresCuadros!=totalCiencias || totalnombresCuadros!=totalSociales || totalnombresCuadros!=totalIngles || totalNombresSirai<=0){
		
		document.getElementById('botonMejorarTexto').disabled=true;
		document.getElementById('botonMejorarTexto').classList.remove('boton222');
		document.getElementById('botonMejorarTexto').classList.add('boton21');
		
		document.getElementById('botonOrdenar').disabled=true;
		document.getElementById('botonOrdenar').classList.remove('boton222');
		document.getElementById('botonOrdenar').classList.add('boton21');
		volverImg('img1');
			
		document.getElementById('botonTransformar').disabled=true;
		document.getElementById('botonTransformar').classList.remove('boton222');
		document.getElementById('botonTransformar').classList.add('boton21');
		volverImg('img2');		
		volverImg('img3');
	}
	
}