//funcion que convierte las notas obtenidoas en vectores para ingresar al sirai.
function transformar(){
	var d=0;
	finalLenguaje1=[];
	finalMatematicas1=[];
	finalCiencias1=[];
	finalSociales1=[];
	finalIngles1=[];
	
	/*
	var lenguajeText1 = document.getElementById('lenguaje').value;
	var arrayLenguaje1 = lenguajeText1.split("\n");
	
	var matematicasText1 = document.getElementById('matematicas').value;
	var arrayMatematicas1 = matematicasText1.split("\n");
	
	var cienciasText1 = document.getElementById('ciencias').value;
	var arrayCiencias1 = cienciasText1.split("\n");
	
	var socialesText1 = document.getElementById('sociales').value;
	var arraySociales1 = socialesText1.split("\n");
	
	var inglesText1 = document.getElementById('ingles').value;
	var arrayIngles1 = inglesText1.split("\n");
	*/
	
	var estadoBoton = document.getElementById('botonTransformar').value;
	if(estadoBoton == "Transformar -- (3)"){
		//if(arrayLenguaje1[j]!="" && arrayMatematicas1[j]!="" && arrayCiencias1[j]!="" && arraySociales1[j]!=="" && arrayIngles1[j]!=""){
			for(h=0;h<=finalLenguajeG.length-1;h++){
				if(finalLenguajeG[h]!=""){
					if(h == finalLenguajeG.length-1){
						finalLenguaje1.push("\"" + Math.round(finalLenguajeG[h]) + "\"" + "\n");
					}else{
						finalLenguaje1.push("\"" + Math.round(finalLenguajeG[h]) + "\"");
					}
				}
			}
		
			for(h=0;h<=finalMatematicasG.length-1;h++){
				if(finalMatematicasG[h]!=""){
					if(h == finalMatematicasG.length-1){
						finalMatematicas1.push("\"" + Math.round(finalMatematicasG[h]) + "\"" + "\n");
					}else{
						finalMatematicas1.push("\"" + Math.round(finalMatematicasG[h]) + "\"");
					}
				}
			}
			for(h=0;h<=finalCienciasG.length-1;h++){
				if(finalCienciasG[h]!=""){
					if(h == finalCienciasG.length-1){
						finalCiencias1.push("\"" + Math.round(finalCienciasG[h]) + "\"" + "\n");
					}else{	
						finalCiencias1.push("\"" + Math.round(finalCienciasG[h]) + "\"" );
					}
				}
			}
			for(h=0;h<=finalSocialesG.length-1;h++){
				if(finalSocialesG[h]!==""){
					if(h == finalSocialesG.length-1){
						finalSociales1.push("\"" + Math.round(finalSocialesG[h]) + "\"" + "\n");
					}else{
						finalSociales1.push("\"" + Math.round(finalSocialesG[h]) + "\"" );
					}
				}
			}
			for(h=0;h<=finalInglesG.length-1;h++){
				if(finalInglesG[h]!=""){
					if(h == finalInglesG.length-1){
						finalIngles1.push("\"" + Math.round(finalInglesG[h]) + "\"" + "\n");
					}else{
						finalIngles1.push("\"" + Math.round(finalInglesG[h]) + "\"" );
					}
				}
			}
		
		document.getElementById('lenguaje').value = finalLenguaje1;
		document.getElementById('matematicas').value = finalMatematicas1;
		document.getElementById('ciencias').value = finalCiencias1;
		document.getElementById('sociales').value = finalSociales1;
		document.getElementById('ingles').value = finalIngles1;
		
		var finalLenguaje2 = document.getElementById('lenguaje').value;
		var finalLenguaje3 = finalLenguaje2.replace(/,/g,","+"\n");
		document.getElementById('lenguaje').value = finalLenguaje3;
		
		var finalMatematicas2 = document.getElementById('matematicas').value;
		var finalMatematicas3 = finalMatematicas2.replace(/,/g,","+"\n");
		document.getElementById('matematicas').value = finalMatematicas3;
		
		var finalCiencias2 = document.getElementById('ciencias').value;
		var finalCiencias3 = finalCiencias2.replace(/,/g,","+"\n");
		document.getElementById('ciencias').value = finalCiencias3;
		
		var finalSociales2 = document.getElementById('sociales').value;
		var finalSociales3 = finalSociales2.replace(/,/g,","+"\n");
		document.getElementById('sociales').value = finalSociales3;
		
		var finalIngles2 = document.getElementById('ingles').value;
		var finalIngles3 = finalIngles2.replace(/,/g,","+"\n");
		document.getElementById('ingles').value = finalIngles3;
		
		document.getElementById('botonMejorarTexto').disabled=true;
		document.getElementById('botonMejorarTexto').classList.remove('boton222');
		document.getElementById('botonMejorarTexto').classList.add('boton21');
		
		document.getElementById('botonOrdenar').disabled=true;
		document.getElementById('botonOrdenar').classList.remove('boton222');
		document.getElementById('botonOrdenar').classList.add('boton21');
		
		document.getElementById('c1').disabled=false;
		document.getElementById('c1').classList.remove('boton211');
		document.getElementById('c1').classList.add('boton212');
		
		
		
		document.getElementById('botonTransformar').value = "Estado Anterior";
		volverImg('img1');
		volverImg('img2');
	
		
	}
	if(estadoBoton == "Estado Anterior"){
	
		var originalLenguaje = document.getElementById('lenguaje').value;
		var originalLenguaje2 = originalLenguaje.replace(/"/g,"");
		document.getElementById('lenguaje').value = originalLenguaje2;
		var originalLenguaje3 = document.getElementById('lenguaje').value;
		var originalLenguaje4 = originalLenguaje3.replace(/,/g,"");
		document.getElementById('lenguaje').value = originalLenguaje4;
		
		var originalMatematicas = document.getElementById('matematicas').value;
		var originalMatematicas2 = originalMatematicas.replace(/"/g,"");
		document.getElementById('matematicas').value = originalMatematicas2;
		var originalMatematicas3 = document.getElementById('matematicas').value;
		var originalMatematicas4 = originalMatematicas3.replace(/,/g,"");
		document.getElementById('matematicas').value = originalMatematicas4;
		
		var originalCiencia = document.getElementById('ciencias').value;
		var originalCiencia2 = originalCiencia.replace(/"/g,"");
		document.getElementById('ciencias').value = originalCiencia2;
		var originalCiencia3 = document.getElementById('ciencias').value;
		var originalCiencia4 = originalCiencia3.replace(/,/g,"");
		document.getElementById('ciencias').value = originalCiencia4;
		
		var originalSociales = document.getElementById('sociales').value;
		var originalSociales2 = originalSociales.replace(/"/g,"");
		document.getElementById('sociales').value = originalSociales2;
		var originalSociales3 = document.getElementById('sociales').value;
		var originalSociales4 = originalSociales3.replace(/,/g,"");
		document.getElementById('sociales').value = originalSociales4;
		
		var originalIngles = document.getElementById('ingles').value;
		var originalIngles2 = originalIngles.replace(/"/g,"");
		document.getElementById('ingles').value = originalIngles2;
		var originalIngles3 = document.getElementById('ingles').value;
		var originalIngles4 = originalIngles3.replace(/,/g,"");
		document.getElementById('ingles').value = originalIngles4;
		
		document.getElementById('botonMejorarTexto').disabled=false;
		document.getElementById('botonMejorarTexto').classList.remove('boton21');
		document.getElementById('botonMejorarTexto').classList.add('boton222');
		
		
		habilitarOrdenar();
		
		document.getElementById('c1').disabled=true;
		document.getElementById('c1').classList.remove('boton212');
		document.getElementById('c1').classList.add('boton211');
	
		document.getElementById('botonTransformar').value = "Transformar -- (3)";
		cambiarImg('img1');
		cambiarImg('img2');
		cambiarImg('img3');
	}

}