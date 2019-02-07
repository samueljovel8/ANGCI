//Funcion para ordenar las notas de los cuadros de acuerdo a la nomina del sirai.

function ordenar(){
	 
	finalLenguajeG.length=0;
	finalMatematicasG.length=0;
	finalCienciasG.length=0;
	finalSocialesG.length=0;
	finalInglesG.length=0;
	
	var nombreSirai = document.getElementById('nombresSirai').value;
	var arrayNombreSirai = nombreSirai.split("\n");
	
	var nombresCuadrosText = document.getElementById('nombresCuadros').value;
	var nombresCuadrosTextSinComas = nombresCuadrosText.replace(/,/g,"-");
	var arrayNombresCuadros = nombresCuadrosTextSinComas.split("\n");
	
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
	
	var finalCuadrosDeNotas=[];
	var finalLenguaje=[];
	var finalMatematicas=[];
	var finalCiencias=[];
	var finalSociales=[];
	var finalIngles=[];
	
	
	for(i=0;i<=arrayNombreSirai.length-1;i++){
		for(j=0;j<=arrayNombresCuadros.length-1;j++){
			var sinComaSiari = arrayNombreSirai[i].replace(/,/g,"");
			var sinComaCuadros = arrayNombresCuadros[j].replace(/-/g,"");
			
			sinComaSiari=sinComaSiari.replace(/[ÀÁÂÃÄÅ]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[ÈÉÊË]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[ÌÍÎÏ]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[ÒÓÔÕÖ]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[ÙÚÛÜ]/g,"U");
			//sinComaSiari=sinComaSiari.replace(/,/g,"");
			
			sinComaSiari=sinComaSiari.replace(/[aàáâãäå]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[eèéêë]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[iìíîï]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[oòóôõö]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[uùúûü]/g,"U");
			
			sinComaCuadros=sinComaCuadros.replace(/[ÀÁÂÃÄÅ]/g,"A");
			sinComaCuadros=sinComaCuadros.replace(/[ÈÉÊË]/g,"E");
		    sinComaCuadros=sinComaCuadros.replace(/[ÌÍÎÏ]/g,"I");
		    sinComaCuadros=sinComaCuadros.replace(/[ÒÓÔÕÖ]/g,"O");
		    sinComaCuadros=sinComaCuadros.replace(/[ÙÚÛÜ]/g,"U");
			
			sinComaCuadros=sinComaCuadros.replace(/[aàáâãäå]/g,"A");
			sinComaCuadros=sinComaCuadros.replace(/[eèéêë]/g,"E");
		    sinComaCuadros=sinComaCuadros.replace(/[iìíîï]/g,"I");
		    sinComaCuadros=sinComaCuadros.replace(/[oòóôõö]/g,"O");
		    sinComaCuadros=sinComaCuadros.replace(/[uùúûü]/g,"U");
			//sinComaCuadros=sinComaCuadros.replace(/,/g,"");
			
			if(sinComaSiari == sinComaCuadros){
				if(j == arrayNombresCuadros.length-1)
				{
					finalCuadrosDeNotas.push(arrayNombresCuadros[j]);
					//HACER UN IF PARA COMPARAR EL ELEMENTO DE CADA ARRAY DE LAS MATERIAS PARA COMPARARLO CON EL VALOR VACIO, SI ES VACIO QUE NO SE AGREGUE AL VECTOR GLOBAL
					if(arrayLenguaje[j]!="" && arrayMatematicas[j]!="" && arrayCiencias[j]!="" && arraySociales[j]!=="" && arrayIngles[j]!=""){
						finalLenguaje.push(Math.round(arrayLenguaje[j]));
						finalMatematicas.push(Math.round(arrayMatematicas[j])); 
						finalCiencias.push(Math.round(arrayCiencias[j]));
						finalSociales.push(Math.round(arraySociales[j]));
						finalIngles.push(Math.round(arrayIngles[j]));	
						
						finalLenguajeG.push(arrayLenguaje[j]);
						finalMatematicasG.push(arrayMatematicas[j]);
						finalCienciasG.push(arrayCiencias[j]);
						finalSocialesG.push(arraySociales[j]);
						finalInglesG.push(arrayIngles[j]);
					}
				}else{
					finalCuadrosDeNotas.push(arrayNombresCuadros[j] + "\n");
					if(arrayLenguaje[j]!="" && arrayMatematicas[j]!="" && arrayCiencias[j]!="" && arraySociales[j]!=="" && arrayIngles[j]!=""){
						finalLenguaje.push(Math.round(arrayLenguaje[j]) + "\n");
						finalMatematicas.push(Math.round(arrayMatematicas[j]) + "\n");
						finalCiencias.push(Math.round(arrayCiencias[j]) + "\n");
						finalSociales.push(Math.round(arraySociales[j]) + "\n");
						finalIngles.push(Math.round(arrayIngles[j]) + "\n");
						
						finalLenguajeG.push(arrayLenguaje[j] + "\n");
						finalMatematicasG.push(arrayMatematicas[j] + "\n");
						finalCienciasG.push(arrayCiencias[j] + "\n");
						finalSocialesG.push(arraySociales[j] + "\n");
						finalInglesG.push(arrayIngles[j] + "\n");
					}
				}
			}
		}
	}
	//finalLenguaje.pop();
	//finalMatematicas.pop();
	//finalCiencias.pop();
	//finalSociales.pop();
	//finalIngles.pop();
	
	
	
	document.getElementById('nombresCuadros').value = finalCuadrosDeNotas;
	var finalcuadrosDeNotas1=document.getElementById('nombresCuadros').value;
	var finalcuadrosDeNotas2 = finalcuadrosDeNotas1.replace(/,/g,"");
	var finalcuadrosDeNotas3 = finalcuadrosDeNotas2.replace(/-/g,",");
	document.getElementById('nombresCuadros').value = finalcuadrosDeNotas3;
	
	document.getElementById('lenguaje').value = finalLenguaje;
	var finallenguaje1=document.getElementById('lenguaje').value;
	var finallenguaje2 = finallenguaje1.replace(/,/g,"");
	document.getElementById('lenguaje').value = finallenguaje2;
		
	document.getElementById('matematicas').value = finalMatematicas;
	var finalmatematicas1=document.getElementById('matematicas').value;
	var finalmatematicas2 = finalmatematicas1.replace(/,/g,"");
	document.getElementById('matematicas').value = finalmatematicas2;
	
	document.getElementById('ciencias').value = finalCiencias;
	var finalciencias1=document.getElementById('ciencias').value;
	var finalciencias2 = finalciencias1.replace(/,/g,"");
	document.getElementById('ciencias').value = finalciencias2;
	
	document.getElementById('sociales').value = finalSociales;
	var finalsociales1=document.getElementById('sociales').value;
	var finalsociales2 = finalsociales1.replace(/,/g,"");
	document.getElementById('sociales').value = finalsociales2;
	
	document.getElementById('ingles').value = finalIngles;
	var finalingles1=document.getElementById('ingles').value;
	var finalingles2 = finalingles1.replace(/,/g,"");
	document.getElementById('ingles').value = finalingles2;	
	
	document.getElementById('botonTransformar').disabled=false;
	document.getElementById('botonTransformar').classList.remove('boton21');
	document.getElementById('botonTransformar').classList.add('boton222');
	cambiarImg('img2');
	cambiarImg('img3');
	
	calcularDatos();
	
	if(secciones==1){
		guardarHeadMultiplesSessiones();
		document.getElementById('habilitarSeccionesMas').checked=true;
		cosasDeSecciones();
	}
	
	//secciones=0;
	
	guardarHeadPersistencia();
}