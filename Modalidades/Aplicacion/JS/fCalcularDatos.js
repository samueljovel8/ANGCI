//Funcion que calcula el tamaño de los vectores para proteger de errores de usuario
function calcularDatos(){
	//alert("calcular datos");
	var niesSirai = document.getElementById('nies').value;
	var arrayNiesSirai = niesSirai.split("\n");
	
	var nombreSirai = document.getElementById('nombresSirai').value;
	var arrayNombreSirai = nombreSirai.split("\n");
	
	var nombresCuadrosText = document.getElementById('nombresCuadros').value;
	var arrayNombresCuadros = nombresCuadrosText.split("\n");
	
	// ***************************************************************************************************
	var lenguajeTextM1 = document.getElementById('lenguajeM1').value;
	var arrayLenguajeM1 = lenguajeTextM1.split("\n");
	var matematicasTextM1 = document.getElementById('matematicasM1').value;
	var arrayMatematicasM1 = matematicasTextM1.split("\n");
	var cienciasTextM1 = document.getElementById('cienciasM1').value;
	var arrayCienciasM1 = cienciasTextM1.split("\n");
	var socialesTextM1 = document.getElementById('socialesM1').value;
	var arraySocialesM1 = socialesTextM1.split("\n");
	var inglesTextM1 = document.getElementById('inglesM1').value;
	var arrayInglesM1 = inglesTextM1.split("\n");
	
	var lenguajeTextM2 = document.getElementById('lenguajeM2').value;
	var arrayLenguajeM2 = lenguajeTextM2.split("\n");
	var matematicasTextM2 = document.getElementById('matematicasM2').value;
	var arrayMatematicasM2 = matematicasTextM2.split("\n");
	var cienciasTextM2 = document.getElementById('cienciasM2').value;
	var arrayCienciasM2 = cienciasTextM2.split("\n");
	var socialesTextM2 = document.getElementById('socialesM2').value;
	var arraySocialesM2 = socialesTextM2.split("\n");
	var inglesTextM2 = document.getElementById('inglesM2').value;
	var arrayInglesM2 = inglesTextM2.split("\n");
	
	var lenguajeTextM3 = document.getElementById('lenguajeM3').value;
	var arrayLenguajeM3 = lenguajeTextM3.split("\n");
	var matematicasTextM3 = document.getElementById('matematicasM3').value;
	var arrayMatematicasM3 = matematicasTextM3.split("\n");
	var cienciasTextM3 = document.getElementById('cienciasM3').value;
	var arrayCienciasM3 = cienciasTextM3.split("\n");
	var socialesTextM3 = document.getElementById('socialesM3').value;
	var arraySocialesM3 = socialesTextM3.split("\n");
	var inglesTextM3 = document.getElementById('inglesM3').value;
	var arrayInglesM3 = inglesTextM3.split("\n");
	
	var lenguajeTextM4 = document.getElementById('lenguajeM4').value;
	var arrayLenguajeM4 = lenguajeTextM4.split("\n");
	var matematicasTextM4 = document.getElementById('matematicasM4').value;
	var arrayMatematicasM4 = matematicasTextM4.split("\n");
	var cienciasTextM4 = document.getElementById('cienciasM4').value;
	var arrayCienciasM4 = cienciasTextM4.split("\n");
	var socialesTextM4 = document.getElementById('socialesM4').value;
	var arraySocialesM4 = socialesTextM4.split("\n");
	var inglesTextM4 = document.getElementById('inglesM4').value;
	var arrayInglesM4 = inglesTextM4.split("\n");
	
	var lenguajeTextM5 = document.getElementById('lenguajeM5').value;
	var arrayLenguajeM5 = lenguajeTextM5.split("\n");
	var matematicasTextM5 = document.getElementById('matematicasM5').value;
	var arrayMatematicasM5 = matematicasTextM5.split("\n");
	var cienciasTextM5 = document.getElementById('cienciasM5').value;
	var arrayCienciasM5 = cienciasTextM5.split("\n");
	var socialesTextM5 = document.getElementById('socialesM5').value;
	var arraySocialesM5 = socialesTextM5.split("\n");
	var inglesTextM5 = document.getElementById('inglesM5').value;
	var arrayInglesM5 = inglesTextM5.split("\n");
	
	// *************************************************************************************************
	
	var totalNiesSirai = arrayNiesSirai.length-1;
	var totalNombresSirai = arrayNombreSirai.length-1;
	var totalnombresCuadros = arrayNombresCuadros.length-1;
	
	// *****************************************************
	var totalLenguajeM1 = arrayLenguajeM1.length-1;
	var totalMatematicasM1 = arrayMatematicasM1.length-1;
	var totalCienciasM1 = arrayCienciasM1.length-1;
	var totalSocialesM1 = arraySocialesM1.length-1;
	var totalInglesM1 = arrayInglesM1.length-1;
	
	var totalLenguajeM2 = arrayLenguajeM2.length-1;
	var totalMatematicasM2 = arrayMatematicasM2.length-1;
	var totalCienciasM2 = arrayCienciasM2.length-1;
	var totalSocialesM2 = arraySocialesM2.length-1;
	var totalInglesM2 = arrayInglesM2.length-1;
	
	var totalLenguajeM3 = arrayLenguajeM3.length-1;
	var totalMatematicasM3 = arrayMatematicasM3.length-1;
	var totalCienciasM3 = arrayCienciasM3.length-1;
	var totalSocialesM3 = arraySocialesM3.length-1;
	var totalInglesM3 = arrayInglesM3.length-1;
	
	var totalLenguajeM4 = arrayLenguajeM4.length-1;
	var totalMatematicasM4 = arrayMatematicasM4.length-1;
	var totalCienciasM4 = arrayCienciasM4.length-1;
	var totalSocialesM4 = arraySocialesM4.length-1;
	var totalInglesM4 = arrayInglesM4.length-1;
	
	var totalLenguajeM5 = arrayLenguajeM5.length-1;
	var totalMatematicasM5 = arrayMatematicasM5.length-1;
	var totalCienciasM5 = arrayCienciasM5.length-1;
	var totalSocialesM5 = arraySocialesM5.length-1;
	var totalInglesM5 = arrayInglesM5.length-1;
	
	// *****************************************************
	
	document.getElementById('labelNiesSirai').innerHTML = totalNiesSirai;
	document.getElementById('labelNombresSirai').innerHTML = "Total:" + " " +  totalNombresSirai;
	document.getElementById('labelNombresCuadros').innerHTML = "Total:" + " " +  totalnombresCuadros;
	document.getElementById('labelLenguaje').innerHTML = "Total:" + " " +  totalLenguajeM1;
	document.getElementById('labelMatematicas').innerHTML = "Total:" + " " +  totalMatematicasM1;
	document.getElementById('labelCiencias').innerHTML = "Total:" + " " +  totalCienciasM1;
	document.getElementById('labelSociales').innerHTML = "Total:" + " " +  totalSocialesM1;
	document.getElementById('labelIngles').innerHTML = "Total:" + " " +  totalInglesM1;
	
	
	if(totalnombresCuadros==totalLenguajeM1 && totalnombresCuadros==totalMatematicasM1 && totalnombresCuadros==totalCienciasM1 && totalnombresCuadros==totalSocialesM1 && totalnombresCuadros==totalInglesM1 && totalNombresSirai>0){
		if(totalnombresCuadros>0){
			var estadoBoton = document.getElementById('botonTransformar').value;
			if(estadoBoton == "Transformar -- (3)"){
				document.getElementById('botonMejorarTexto').disabled=false;
				document.getElementById('botonMejorarTexto').classList.remove('boton21');
				document.getElementById('botonMejorarTexto').classList.add('boton222');
			}
		}
		
	}
	if(totalnombresCuadros!=totalLenguajeM1 || totalnombresCuadros!=totalMatematicasM1 || totalnombresCuadros!=totalCienciasM1 || totalnombresCuadros!=totalSocialesM1 || totalnombresCuadros!=totalInglesM1 || totalNombresSirai<=0){
		
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