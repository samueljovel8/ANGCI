//funcion que convierte las notas obtenidoas en vectores para ingresar al sirai.
function transformar(){
	var d=0;
	finalLenguaje1M1=[];
	finalMatematicas1M1=[];
	finalCiencias1M1=[];
	finalSociales1M1=[];
	finalIngles1M1=[];
	
	finalLenguaje1M2=[];
	finalMatematicas1M2=[];
	finalCiencias1M2=[];
	finalSociales1M2=[];
	finalIngles1M2=[];
	
	finalLenguaje1M3=[];
	finalMatematicas1M3=[];
	finalCiencias1M3=[];
	finalSociales1M3=[];
	finalIngles1M3=[];
	
	finalLenguaje1M4=[];
	finalMatematicas1M4=[];
	finalCiencias1M4=[];
	finalSociales1M4=[];
	finalIngles1M4=[];
	
	finalLenguaje1M5=[];
	finalMatematicas1M5=[];
	finalCiencias1M5=[];
	finalSociales1M5=[];
	finalIngles1M5=[];
	
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
			for(h=0;h<=finalLenguajeGM1.length-1;h++){
				if(finalLenguajeGM1[h]!=""){
					if(h == finalLenguajeGM1.length-1){
						finalLenguaje1M1.push("\"" + Math.round(finalLenguajeGM1[h]) + "\"" + "\n");
						finalLenguaje1M2.push("\"" + Math.round(finalLenguajeGM2[h]) + "\"" + "\n");
						finalLenguaje1M3.push("\"" + Math.round(finalLenguajeGM3[h]) + "\"" + "\n");
						finalLenguaje1M4.push("\"" + Math.round(finalLenguajeGM4[h]) + "\"" + "\n");
						finalLenguaje1M5.push("\"" + Math.round(finalLenguajeGM5[h]) + "\"" + "\n");
					}else{
						finalLenguaje1M1.push("\"" + Math.round(finalLenguajeGM1[h]) + "\"");
						finalLenguaje1M2.push("\"" + Math.round(finalLenguajeGM2[h]) + "\"");
						finalLenguaje1M3.push("\"" + Math.round(finalLenguajeGM3[h]) + "\"");
						finalLenguaje1M4.push("\"" + Math.round(finalLenguajeGM4[h]) + "\"");
						finalLenguaje1M5.push("\"" + Math.round(finalLenguajeGM5[h]) + "\"");
					}
				}
			}
		
			for(h=0;h<=finalMatematicasGM1.length-1;h++){
				if(finalMatematicasGM1[h]!=""){
					if(h == finalMatematicasGM1.length-1){
						finalMatematicas1M1.push("\"" + Math.round(finalMatematicasGM1[h]) + "\"" + "\n");
						finalMatematicas1M2.push("\"" + Math.round(finalMatematicasGM2[h]) + "\"" + "\n");
						finalMatematicas1M3.push("\"" + Math.round(finalMatematicasGM3[h]) + "\"" + "\n");
						finalMatematicas1M4.push("\"" + Math.round(finalMatematicasGM4[h]) + "\"" + "\n");
						finalMatematicas1M5.push("\"" + Math.round(finalMatematicasGM5[h]) + "\"" + "\n");
					}else{
						finalMatematicas1M1.push("\"" + Math.round(finalMatematicasGM1[h]) + "\"");
						finalMatematicas1M2.push("\"" + Math.round(finalMatematicasGM2[h]) + "\"");
						finalMatematicas1M3.push("\"" + Math.round(finalMatematicasGM3[h]) + "\"");
						finalMatematicas1M4.push("\"" + Math.round(finalMatematicasGM4[h]) + "\"");
						finalMatematicas1M5.push("\"" + Math.round(finalMatematicasGM5[h]) + "\"");
					}
				}
			}
			for(h=0;h<=finalCienciasGM1.length-1;h++){
				if(finalCienciasGM1[h]!=""){
					if(h == finalCienciasGM1.length-1){
						finalCiencias1M1.push("\"" + Math.round(finalCienciasGM1[h]) + "\"" + "\n");
						finalCiencias1M2.push("\"" + Math.round(finalCienciasGM2[h]) + "\"" + "\n");
						finalCiencias1M3.push("\"" + Math.round(finalCienciasGM3[h]) + "\"" + "\n");
						finalCiencias1M4.push("\"" + Math.round(finalCienciasGM4[h]) + "\"" + "\n");
						finalCiencias1M5.push("\"" + Math.round(finalCienciasGM5[h]) + "\"" + "\n");
					}else{	
						finalCiencias1M1.push("\"" + Math.round(finalCienciasGM1[h]) + "\"" );
						finalCiencias1M2.push("\"" + Math.round(finalCienciasGM2[h]) + "\"" );
						finalCiencias1M3.push("\"" + Math.round(finalCienciasGM3[h]) + "\"" );
						finalCiencias1M4.push("\"" + Math.round(finalCienciasGM4[h]) + "\"" );
						finalCiencias1M5.push("\"" + Math.round(finalCienciasGM5[h]) + "\"" );
					}
				}
			}
			for(h=0;h<=finalSocialesGM1.length-1;h++){
				if(finalSocialesGM1[h]!==""){
					if(h == finalSocialesGM1.length-1){
						finalSociales1M1.push("\"" + Math.round(finalSocialesGM1[h]) + "\"" + "\n");
						finalSociales1M2.push("\"" + Math.round(finalSocialesGM2[h]) + "\"" + "\n");
						finalSociales1M3.push("\"" + Math.round(finalSocialesGM3[h]) + "\"" + "\n");
						finalSociales1M4.push("\"" + Math.round(finalSocialesGM4[h]) + "\"" + "\n");
						finalSociales1M5.push("\"" + Math.round(finalSocialesGM5[h]) + "\"" + "\n");
					}else{
						finalSociales1M1.push("\"" + Math.round(finalSocialesGM1[h]) + "\"" );
						finalSociales1M2.push("\"" + Math.round(finalSocialesGM2[h]) + "\"" );
						finalSociales1M3.push("\"" + Math.round(finalSocialesGM3[h]) + "\"" );
						finalSociales1M4.push("\"" + Math.round(finalSocialesGM4[h]) + "\"" );
						finalSociales1M5.push("\"" + Math.round(finalSocialesGM5[h]) + "\"" );
					}
				}
			}
			for(h=0;h<=finalInglesGM1.length-1;h++){
				if(finalInglesGM1[h]!=""){
					if(h == finalInglesGM1.length-1){
						finalIngles1M1.push("\"" + Math.round(finalInglesGM1[h]) + "\"" + "\n");
						finalIngles1M2.push("\"" + Math.round(finalInglesGM2[h]) + "\"" + "\n");
						finalIngles1M3.push("\"" + Math.round(finalInglesGM3[h]) + "\"" + "\n");
						finalIngles1M4.push("\"" + Math.round(finalInglesGM4[h]) + "\"" + "\n");
						finalIngles1M5.push("\"" + Math.round(finalInglesGM5[h]) + "\"" + "\n");
					}else{
						finalIngles1M1.push("\"" + Math.round(finalInglesGM1[h]) + "\"" );
						finalIngles1M2.push("\"" + Math.round(finalInglesGM2[h]) + "\"" );
						finalIngles1M3.push("\"" + Math.round(finalInglesGM3[h]) + "\"" );
						finalIngles1M4.push("\"" + Math.round(finalInglesGM4[h]) + "\"" );
						finalIngles1M5.push("\"" + Math.round(finalInglesGM5[h]) + "\"" );
						
					}
				}
			}
		//***************************************************************************************************************
		document.getElementById('lenguajeM1').value = finalLenguaje1M1;
		document.getElementById('matematicasM1').value = finalMatematicas1M1;
		document.getElementById('cienciasM1').value = finalCiencias1M1;
		document.getElementById('socialesM1').value = finalSociales1M1;
		document.getElementById('inglesM1').value = finalIngles1M1;
		
		document.getElementById('lenguajeM2').value = finalLenguaje1M2;
		document.getElementById('matematicasM2').value = finalMatematicas1M2;
		document.getElementById('cienciasM2').value = finalCiencias1M2;
		document.getElementById('socialesM2').value = finalSociales1M2;
		document.getElementById('inglesM2').value = finalIngles1M2;
		
		document.getElementById('lenguajeM3').value = finalLenguaje1M3;
		document.getElementById('matematicasM3').value = finalMatematicas1M3;
		document.getElementById('cienciasM3').value = finalCiencias1M3;
		document.getElementById('socialesM3').value = finalSociales1M3;
		document.getElementById('inglesM3').value = finalIngles1M3;
		
		document.getElementById('lenguajeM4').value = finalLenguaje1M4;
		document.getElementById('matematicasM4').value = finalMatematicas1M4;
		document.getElementById('cienciasM4').value = finalCiencias1M4;
		document.getElementById('socialesM4').value = finalSociales1M4;
		document.getElementById('inglesM4').value = finalIngles1M4;
		
		document.getElementById('lenguajeM5').value = finalLenguaje1M5;
		document.getElementById('matematicasM5').value = finalMatematicas1M5;
		document.getElementById('cienciasM5').value = finalCiencias1M5;
		document.getElementById('socialesM5').value = finalSociales1M5;
		document.getElementById('inglesM5').value = finalIngles1M5;
		//***************************************************************************************************************
		//***************************************************************************************************************
		
		for(i=1;i<=5;i++){	
			var finarlVariable = 'M'+i;
			var finalLenguaje2 = document.getElementById('lenguaje'+finarlVariable).value;
			finalLenguaje2 = finalLenguaje2.replace(/,/g,","+"\n");
			document.getElementById('lenguaje'+finarlVariable).value = finalLenguaje2;
			
			var finalMatematicas2 = document.getElementById('matematicas'+finarlVariable).value;
			finalMatematicas2 = finalMatematicas2.replace(/,/g,","+"\n");
			document.getElementById('matematicas'+finarlVariable).value = finalMatematicas2;
			
			var finalCiencias2 = document.getElementById('ciencias'+finarlVariable).value;
			finalCiencias2 = finalCiencias2.replace(/,/g,","+"\n");
			document.getElementById('ciencias'+finarlVariable).value = finalCiencias2;
			
			var finalSociales2 = document.getElementById('sociales'+finarlVariable).value;
			finalSociales2 = finalSociales2.replace(/,/g,","+"\n");
			document.getElementById('sociales'+finarlVariable).value = finalSociales2;
			
			var finalIngles2 = document.getElementById('ingles'+finarlVariable).value;
			finalIngles2 = finalIngles2.replace(/,/g,","+"\n");
			document.getElementById('ingles'+finarlVariable).value = finalIngles2;
		}
		//***************************************************************************************************************
		
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
		for(i=1;i<=5;i++){	
			var finarlVariable = 'M'+i;
			var originalLenguaje = document.getElementById('lenguaje'+finarlVariable).value;
			var originalLenguaje2 = originalLenguaje.replace(/"/g,"");
			document.getElementById('lenguaje'+finarlVariable).value = originalLenguaje2;
			var originalLenguaje3 = document.getElementById('lenguaje'+finarlVariable).value;
			var originalLenguaje4 = originalLenguaje3.replace(/,/g,"");
			document.getElementById('lenguaje'+finarlVariable).value = originalLenguaje4;
			
			var originalMatematicas = document.getElementById('matematicas'+finarlVariable).value;
			var originalMatematicas2 = originalMatematicas.replace(/"/g,"");
			document.getElementById('matematicas'+finarlVariable).value = originalMatematicas2;
			var originalMatematicas3 = document.getElementById('matematicas'+finarlVariable).value;
			var originalMatematicas4 = originalMatematicas3.replace(/,/g,"");
			document.getElementById('matematicas'+finarlVariable).value = originalMatematicas4;
			
			var originalCiencia = document.getElementById('ciencias'+finarlVariable).value;
			var originalCiencia2 = originalCiencia.replace(/"/g,"");
			document.getElementById('ciencias'+finarlVariable).value = originalCiencia2;
			var originalCiencia3 = document.getElementById('ciencias'+finarlVariable).value;
			var originalCiencia4 = originalCiencia3.replace(/,/g,"");
			document.getElementById('ciencias'+finarlVariable).value = originalCiencia4;
			
			var originalSociales = document.getElementById('sociales'+finarlVariable).value;
			var originalSociales2 = originalSociales.replace(/"/g,"");
			document.getElementById('sociales'+finarlVariable).value = originalSociales2;
			var originalSociales3 = document.getElementById('sociales'+finarlVariable).value;
			var originalSociales4 = originalSociales3.replace(/,/g,"");
			document.getElementById('sociales'+finarlVariable).value = originalSociales4;
			
			var originalIngles = document.getElementById('ingles'+finarlVariable).value;
			var originalIngles2 = originalIngles.replace(/"/g,"");
			document.getElementById('ingles'+finarlVariable).value = originalIngles2;
			var originalIngles3 = document.getElementById('ingles'+finarlVariable).value;
			var originalIngles4 = originalIngles3.replace(/,/g,"");
			document.getElementById('ingles'+finarlVariable).value = originalIngles4;
		}
		
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