//Funcion para ordenar las notas de los cuadros de acuerdo a la nomina del sirai.

function ordenar(){
	guardarHeadPersistenciaINI();
	/*
	localStorage.removeItem('niesVecL');
	localStorage.removeItem('nombresSiraiVecL');
	
	localStorage.removeItem('lenguajeVecLM1');
	localStorage.removeItem('matematicasVecLM1');
	localStorage.removeItem('cienciasVecLM1');
	localStorage.removeItem('socialesVecLM1');
	localStorage.removeItem('inglesVecLM1');
	
	localStorage.removeItem('lenguajeVecLM2');
	localStorage.removeItem('matematicasVecLM2');
	localStorage.removeItem('cienciasVecLM2');
	localStorage.removeItem('socialesVecLM2');
	localStorage.removeItem('inglesVecLM2');
	
	localStorage.removeItem('lenguajeVecLM3');
	localStorage.removeItem('matematicasVecLM3');
	localStorage.removeItem('cienciasVecLM3');
	localStorage.removeItem('socialesVecLM3');
	localStorage.removeItem('inglesVecLM3');
	
	localStorage.removeItem('lenguajeVecLM4');
	localStorage.removeItem('matematicasVecLM4');
	localStorage.removeItem('cienciasVecLM4');
	localStorage.removeItem('socialesVecLM4');
	localStorage.removeItem('inglesVecLM4');
	
	localStorage.removeItem('lenguajeVecLM5');
	localStorage.removeItem('matematicasVecLM5');
	localStorage.removeItem('cienciasVecLM5');
	localStorage.removeItem('socialesVecLM5');
	localStorage.removeItem('inglesVecLM5');
	 */
	 
	 
	finalLenguajeGM1.length=0;
	finalMatematicasGM1.length=0;
	finalCienciasGM1.length=0;
	finalSocialesGM1.length=0;
	finalInglesGM1.length=0;
	
	finalLenguajeGM2.length=0;
	finalMatematicasGM2.length=0;
	finalCienciasGM2.length=0;
	finalSocialesGM2.length=0;
	finalInglesGM2.length=0;
	
	finalLenguajeGM3.length=0;
	finalMatematicasGM3.length=0;
	finalCienciasGM3.length=0;
	finalSocialesGM3.length=0;
	finalInglesGM3.length=0;
	
	finalLenguajeGM4.length=0;
	finalMatematicasGM4.length=0;
	finalCienciasGM4.length=0;
	finalSocialesGM4.length=0;
	finalInglesGM4.length=0;
	
	finalLenguajeGM5.length=0;
	finalMatematicasGM5.length=0;
	finalCienciasGM5.length=0;
	finalSocialesGM5.length=0;
	finalInglesGM5.length=0;
	
	
	/*
	finalLenguajeGPE.length=0;
	finalMatematicasGPE.length=0;
	finalCienciasGPE.length=0;
	finalSocialesGPE.length=0;
	*/
	var nombreSirai = document.getElementById('nombresSirai').value;
	var arrayNombreSirai = nombreSirai.split("\n");
	
	var nombresCuadrosText = document.getElementById('nombresCuadros').value;
	var nombresCuadrosTextSinComas = nombresCuadrosText.replace(/,/g,"-");
	var arrayNombresCuadros = nombresCuadrosTextSinComas.split("\n");
	// **********************************************************************************
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
	/*
	var lenguajeTextPE = document.getElementById('lenguajePE').value;
	var arrayLenguajePE = lenguajeTextPE.split("\n");
	var matematicasTextPE = document.getElementById('matematicasPE').value;
	var arrayMatematicasPE = matematicasTextPE.split("\n");
	var cienciasTextPE = document.getElementById('cienciasPE').value;
	var arrayCienciasPE = cienciasTextPE.split("\n");
	var socialesTextPE = document.getElementById('socialesPE').value;
	var arraySocialesPE = socialesTextPE.split("\n");
	*/
	//************************************************************************************
	
	var finalCuadrosDeNotas=[];
	//*****************************************
	var finalLenguajeM1=[];
	var finalMatematicasM1=[];
	var finalCienciasM1=[];
	var finalSocialesM1=[];
	var finalInglesM1=[];
	
	var finalLenguajeM2=[];
	var finalMatematicasM2=[];
	var finalCienciasM2=[];
	var finalSocialesM2=[];
	var finalInglesM2=[];
	
	var finalLenguajeM3=[];
	var finalMatematicasM3=[];
	var finalCienciasM3=[];
	var finalSocialesM3=[];
	var finalInglesM3=[];
	
	var finalLenguajeM4=[];
	var finalMatematicasM4=[];
	var finalCienciasM4=[];
	var finalSocialesM4=[];
	var finalInglesM4=[];
	
	var finalLenguajeM5=[];
	var finalMatematicasM5=[];
	var finalCienciasM5=[];
	var finalSocialesM5=[];
	var finalInglesM5=[];
	/*
	var finalLenguajePE=[];
	var finalMatematicasPE=[];
	var finalCienciasPE=[];
	var finalSocialesPE=[];
	*/
	//*****************************************
	
	
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
					if(arrayLenguajeM1[j]!="" && arrayMatematicasM1[j]!="" && arrayCienciasM1[j]!="" && arraySocialesM1[j]!=="" && arrayInglesM1[j]!=""){
						//---------------------------------------------------------------------
						finalLenguajeM1.push(Math.round(arrayLenguajeM1[j]));
						finalMatematicasM1.push(Math.round(arrayMatematicasM1[j])); 
						finalCienciasM1.push(Math.round(arrayCienciasM1[j]));
						finalSocialesM1.push(Math.round(arraySocialesM1[j]));
						finalInglesM1.push(Math.round(arrayInglesM1[j]));

						finalLenguajeM2.push(Math.round(arrayLenguajeM2[j]));
						finalMatematicasM2.push(Math.round(arrayMatematicasM2[j])); 
						finalCienciasM2.push(Math.round(arrayCienciasM2[j]));
						finalSocialesM2.push(Math.round(arraySocialesM2[j]));
						finalInglesM2.push(Math.round(arrayInglesM2[j]));	
						
						finalLenguajeM3.push(Math.round(arrayLenguajeM3[j]));
						finalMatematicasM3.push(Math.round(arrayMatematicasM3[j])); 
						finalCienciasM3.push(Math.round(arrayCienciasM3[j]));
						finalSocialesM3.push(Math.round(arraySocialesM3[j]));
						finalInglesM3.push(Math.round(arrayInglesM3[j]));

						finalLenguajeM4.push(Math.round(arrayLenguajeM4[j]));
						finalMatematicasM4.push(Math.round(arrayMatematicasM4[j])); 
						finalCienciasM4.push(Math.round(arrayCienciasM4[j]));
						finalSocialesM4.push(Math.round(arraySocialesM4[j]));
						finalInglesM4.push(Math.round(arrayInglesM4[j]));
						
						finalLenguajeM5.push(Math.round(arrayLenguajeM5[j]));
						finalMatematicasM5.push(Math.round(arrayMatematicasM5[j])); 
						finalCienciasM5.push(Math.round(arrayCienciasM5[j]));
						finalSocialesM5.push(Math.round(arraySocialesM5[j]));
						finalInglesM5.push(Math.round(arrayInglesM5[j]));
						/*
						finalLenguajePE.push(Math.round(arrayLenguajePE[j]));
						finalMatematicasPE.push(Math.round(arrayMatematicasPE[j])); 
						finalCienciasPE.push(Math.round(arrayCienciasPE[j]));
						finalSocialesPE.push(Math.round(arraySocialesPE[j]));
						*/
						//---------------------------------------------------------------------
						
						finalLenguajeGM1.push(arrayLenguajeM1[j]);
						finalMatematicasGM1.push(arrayMatematicasM1[j]);
						finalCienciasGM1.push(arrayCienciasM1[j]);
						finalSocialesGM1.push(arraySocialesM1[j]);
						finalInglesGM1.push(arrayInglesM1[j]);
						
						finalLenguajeGM2.push(arrayLenguajeM2[j]);
						finalMatematicasGM2.push(arrayMatematicasM2[j]);
						finalCienciasGM2.push(arrayCienciasM2[j]);
						finalSocialesGM2.push(arraySocialesM2[j]);
						finalInglesGM2.push(arrayInglesM2[j]);
						
						finalLenguajeGM3.push(arrayLenguajeM3[j]);
						finalMatematicasGM3.push(arrayMatematicasM3[j]);
						finalCienciasGM3.push(arrayCienciasM3[j]);
						finalSocialesGM3.push(arraySocialesM3[j]);
						finalInglesGM3.push(arrayInglesM3[j]);
						
						finalLenguajeGM4.push(arrayLenguajeM4[j]);
						finalMatematicasGM4.push(arrayMatematicasM4[j]);
						finalCienciasGM4.push(arrayCienciasM4[j]);
						finalSocialesGM4.push(arraySocialesM4[j]);
						finalInglesGM4.push(arrayInglesM4[j]);
						
						finalLenguajeGM5.push(arrayLenguajeM5[j]);
						finalMatematicasGM5.push(arrayMatematicasM5[j]);
						finalCienciasGM5.push(arrayCienciasM5[j]);
						finalSocialesGM5.push(arraySocialesM5[j]);
						finalInglesGM5.push(arrayInglesM5[j]);
						/*
						finalLenguajeGPE.push(arrayLenguajePe[j]);
						finalMatematicasGPE.push(arrayMatematicasPe[j]);
						finalCienciasGPE.push(arrayCienciasPE[j]);
						finalSocialesGPE.push(arraySocialesPe[j]);
						*/
						
						
					}
				}else{
					finalCuadrosDeNotas.push(arrayNombresCuadros[j] + "\n");
					if(arrayLenguajeM1[j]!="" && arrayMatematicasM1[j]!="" && arrayCienciasM1[j]!="" && arraySocialesM1[j]!=="" && arrayInglesM1[j]!=""){
						//---------------------------------------------------------------------
						finalLenguajeM1.push(Math.round(arrayLenguajeM1[j]) + "\n");
						finalMatematicasM1.push(Math.round(arrayMatematicasM1[j]) + "\n");
						finalCienciasM1.push(Math.round(arrayCienciasM1[j]) + "\n");
						finalSocialesM1.push(Math.round(arraySocialesM1[j]) + "\n");
						finalInglesM1.push(Math.round(arrayInglesM1[j]) + "\n");
						
						finalLenguajeM2.push(Math.round(arrayLenguajeM2[j]) + "\n");
						finalMatematicasM2.push(Math.round(arrayMatematicasM2[j]) + "\n");
						finalCienciasM2.push(Math.round(arrayCienciasM2[j]) + "\n");
						finalSocialesM2.push(Math.round(arraySocialesM2[j]) + "\n");
						finalInglesM2.push(Math.round(arrayInglesM2[j]) + "\n");
						
						finalLenguajeM3.push(Math.round(arrayLenguajeM3[j]) + "\n");
						finalMatematicasM3.push(Math.round(arrayMatematicasM3[j]) + "\n");
						finalCienciasM3.push(Math.round(arrayCienciasM3[j]) + "\n");
						finalSocialesM3.push(Math.round(arraySocialesM3[j]) + "\n");
						finalInglesM3.push(Math.round(arrayInglesM3[j]) + "\n");
						
						finalLenguajeM4.push(Math.round(arrayLenguajeM4[j]) + "\n");
						finalMatematicasM4.push(Math.round(arrayMatematicasM4[j]) + "\n");
						finalCienciasM4.push(Math.round(arrayCienciasM4[j]) + "\n");
						finalSocialesM4.push(Math.round(arraySocialesM4[j]) + "\n");
						finalInglesM4.push(Math.round(arrayInglesM4[j]) + "\n");
						
						finalLenguajeM5.push(Math.round(arrayLenguajeM5[j]) + "\n");
						finalMatematicasM5.push(Math.round(arrayMatematicasM5[j]) + "\n");
						finalCienciasM5.push(Math.round(arrayCienciasM5[j]) + "\n");
						finalSocialesM5.push(Math.round(arraySocialesM5[j]) + "\n");
						finalInglesM5.push(Math.round(arrayInglesM5[j]) + "\n");
						/*
						finalLenguajePE.push(Math.round(arrayLenguajePE[j]) + "\n");
						finalMatematicasPE.push(Math.round(arrayMatematicasPE[j]) + "\n");
						finalCienciasPE.push(Math.round(arrayCienciasPE[j]) + "\n");
						finalSocialesPE.push(Math.round(arraySocialesPE[j]) + "\n");
							*/					
						//---------------------------------------------------------------------
						
						finalLenguajeGM1.push(arrayLenguajeM1[j] + "\n");
						finalMatematicasGM1.push(arrayMatematicasM1[j] + "\n");
						finalCienciasGM1.push(arrayCienciasM1[j] + "\n");
						finalSocialesGM1.push(arraySocialesM1[j] + "\n");
						finalInglesGM1.push(arrayInglesM1[j] + "\n");
						
						finalLenguajeGM2.push(arrayLenguajeM2[j] + "\n");
						finalMatematicasGM2.push(arrayMatematicasM2[j] + "\n");
						finalCienciasGM2.push(arrayCienciasM2[j] + "\n");
						finalSocialesGM2.push(arraySocialesM2[j] + "\n");
						finalInglesGM2.push(arrayInglesM2[j] + "\n");
						
						finalLenguajeGM3.push(arrayLenguajeM3[j] + "\n");
						finalMatematicasGM3.push(arrayMatematicasM3[j] + "\n");
						finalCienciasGM3.push(arrayCienciasM3[j] + "\n");
						finalSocialesGM3.push(arraySocialesM3[j] + "\n");
						finalInglesGM3.push(arrayInglesM3[j] + "\n");
						
						finalLenguajeGM4.push(arrayLenguajeM4[j] + "\n");
						finalMatematicasGM4.push(arrayMatematicasM4[j] + "\n");
						finalCienciasGM4.push(arrayCienciasM4[j] + "\n");
						finalSocialesGM4.push(arraySocialesM4[j] + "\n");
						finalInglesGM4.push(arrayInglesM4[j] + "\n");
						
						finalLenguajeGM5.push(arrayLenguajeM5[j] + "\n");
						finalMatematicasGM5.push(arrayMatematicasM5[j] + "\n");
						finalCienciasGM5.push(arrayCienciasM5[j] + "\n");
						finalSocialesGM5.push(arraySocialesM5[j] + "\n");
						finalInglesGM5.push(arrayInglesM5[j] + "\n");
						/*
						finalLenguajeGPE.push(arrayLenguajePE[j] + "\n");
						finalMatematicasGPE.push(arrayMatematicasPE[j] + "\n");
						finalCienciasGPE.push(arrayCienciasPE[j] + "\n");
						finalSocialesGPE.push(arraySocialesPE[j] + "\n");
						*/
						
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
	
	
	//***********************************************************************************
	document.getElementById('lenguajeM1').value = finalLenguajeM1;
	var finallenguaje1M1 = document.getElementById('lenguajeM1').value;
	finallenguaje1M1 = finallenguaje1M1.replace(/,/g,"");
	document.getElementById('lenguajeM1').value = finallenguaje1M1;
	
	document.getElementById('lenguajeM2').value = finalLenguajeM2;
	var finallenguaje1M2 = document.getElementById('lenguajeM2').value;
	finallenguaje1M2 = finallenguaje1M2.replace(/,/g,"");
	document.getElementById('lenguajeM2').value = finallenguaje1M2;
	
	document.getElementById('lenguajeM3').value = finalLenguajeM3;
	var finallenguaje1M3 = document.getElementById('lenguajeM3').value;
	finallenguaje1M3 = finallenguaje1M3.replace(/,/g,"");
	document.getElementById('lenguajeM3').value = finallenguaje1M3;
	
	document.getElementById('lenguajeM4').value = finalLenguajeM4;
	var finallenguaje1M4 = document.getElementById('lenguajeM4').value;
	finallenguaje1M4 = finallenguaje1M4.replace(/,/g,"");
	document.getElementById('lenguajeM4').value = finallenguaje1M4;
	
	document.getElementById('lenguajeM5').value = finalLenguajeM5;
	var finallenguaje1M5 = document.getElementById('lenguajeM5').value;
	finallenguaje1M5 = finallenguaje1M5.replace(/,/g,"");
	document.getElementById('lenguajeM5').value = finallenguaje1M5;
	//***********************************************************************************
	//***********************************************************************************
	document.getElementById('matematicasM1').value = finalMatematicasM1;
	var finalmatematicas1M1 = document.getElementById('matematicasM1').value;
	finalmatematicas1M1 = finalmatematicas1M1.replace(/,/g,"");
	document.getElementById('matematicasM1').value = finalmatematicas1M1;
	
	document.getElementById('matematicasM2').value = finalMatematicasM2;
	var finalmatematicas1M2 = document.getElementById('matematicasM2').value;
	finalmatematicas1M2 = finalmatematicas1M2.replace(/,/g,"");
	document.getElementById('matematicasM2').value = finalmatematicas1M2;
	
	document.getElementById('matematicasM3').value = finalMatematicasM3;
	var finalmatematicas1M3 = document.getElementById('matematicasM3').value;
	finalmatematicas1M3 = finalmatematicas1M3.replace(/,/g,"");
	document.getElementById('matematicasM3').value = finalmatematicas1M3;
	
	document.getElementById('matematicasM4').value = finalMatematicasM4;
	var finalmatematicas1M4 = document.getElementById('matematicasM4').value;
	finalmatematicas1M4 = finalmatematicas1M4.replace(/,/g,"");
	document.getElementById('matematicasM4').value = finalmatematicas1M4;
	
	document.getElementById('matematicasM5').value = finalMatematicasM5;
	var finalmatematicas1M5 = document.getElementById('matematicasM5').value;
	finalmatematicas1M5 = finalmatematicas1M5.replace(/,/g,"");
	document.getElementById('matematicasM5').value = finalmatematicas1M5;
	//***********************************************************************************
	//***********************************************************************************
	document.getElementById('cienciasM1').value = finalCienciasM1;
	var finalciencias1M1 = document.getElementById('cienciasM1').value;
	finalciencias1M1 = finalciencias1M1.replace(/,/g,"");
	document.getElementById('cienciasM1').value = finalciencias1M1;
	
	document.getElementById('cienciasM2').value = finalCienciasM2;
	var finalciencias1M2 = document.getElementById('cienciasM2').value;
	finalciencias1M2 = finalciencias1M2.replace(/,/g,"");
	document.getElementById('cienciasM2').value = finalciencias1M2;
	
	document.getElementById('cienciasM3').value = finalCienciasM3;
	var finalciencias1M3 = document.getElementById('cienciasM3').value;
	finalciencias1M3 = finalciencias1M3.replace(/,/g,"");
	document.getElementById('cienciasM3').value = finalciencias1M3;
	
	document.getElementById('cienciasM4').value = finalCienciasM4;
	var finalciencias1M4 = document.getElementById('cienciasM4').value;
	finalciencias1M4 = finalciencias1M4.replace(/,/g,"");
	document.getElementById('cienciasM4').value = finalciencias1M4;
	
	document.getElementById('cienciasM5').value = finalCienciasM5;
	var finalciencias1M5 = document.getElementById('cienciasM5').value;
	finalciencias1M5 = finalciencias1M5.replace(/,/g,"");
	document.getElementById('cienciasM5').value = finalciencias1M5;
	//***********************************************************************************
	//***********************************************************************************
	document.getElementById('socialesM1').value = finalSocialesM1;
	var finalsociales1M1 = document.getElementById('socialesM1').value;
	finalsociales1M1 = finalsociales1M1.replace(/,/g,"");
	document.getElementById('socialesM1').value = finalsociales1M1;
	
	document.getElementById('socialesM2').value = finalSocialesM2;
	var finalsociales1M2 = document.getElementById('socialesM2').value;
	finalsociales1M2 = finalsociales1M2.replace(/,/g,"");
	document.getElementById('socialesM2').value = finalsociales1M2;
	
	document.getElementById('socialesM3').value = finalSocialesM3;
	var finalsociales1M3 = document.getElementById('socialesM3').value;
	finalsociales1M3 = finalsociales1M3.replace(/,/g,"");
	document.getElementById('socialesM3').value = finalsociales1M3;
	
	document.getElementById('socialesM4').value = finalSocialesM4;
	var finalsociales1M4 = document.getElementById('socialesM4').value;
	finalsociales1M4 = finalsociales1M4.replace(/,/g,"");
	document.getElementById('socialesM4').value = finalsociales1M4;
	
	document.getElementById('socialesM5').value = finalSocialesM5;
	var finalsociales1M5 = document.getElementById('socialesM5').value;
	finalsociales1M5 = finalsociales1M5.replace(/,/g,"");
	document.getElementById('socialesM5').value = finalsociales1M5;
	//***********************************************************************************
	//***********************************************************************************
	document.getElementById('inglesM1').value = finalInglesM1;
	var finalingles1M1 = document.getElementById('inglesM1').value;
	finalingles1M1 = finalingles1M1.replace(/,/g,"");
	document.getElementById('inglesM1').value = finalingles1M1;
	
	document.getElementById('inglesM2').value = finalInglesM2;
	var finalingles1M2 = document.getElementById('inglesM2').value;
	finalingles1M2 = finalingles1M2.replace(/,/g,"");
	document.getElementById('inglesM2').value = finalingles1M2;
	
	document.getElementById('inglesM3').value = finalInglesM3;
	var finalingles1M3 = document.getElementById('inglesM3').value;
	finalingles1M3 = finalingles1M3.replace(/,/g,"");
	document.getElementById('inglesM3').value = finalingles1M3;
	
	document.getElementById('inglesM4').value = finalInglesM4;
	var finalingles1M4 = document.getElementById('inglesM4').value;
	finalingles1M4 = finalingles1M4.replace(/,/g,"");
	document.getElementById('inglesM4').value = finalingles1M4;
	
	document.getElementById('inglesM5').value = finalInglesM5;
	var finalingles1M5 = document.getElementById('inglesM5').value;
	finalingles1M5 = finalingles1M5.replace(/,/g,"");
	document.getElementById('inglesM5').value = finalingles1M5;
	//***********************************************************************************
/*
	document.getElementById('lenguajePE').value = finalLenguajePE;
	var finallenguaje1PE = document.getElementById('lenguajePE').value;
	finallenguaje1PE = finallenguaje1PE.replace(/,/g,"");
	document.getElementById('lenguajePE').value = finallenguaje1PE;
	
	document.getElementById('matematicasPE').value = finalMatematicasPE;
	var finalmatematicas1PE = document.getElementById('matematicasPE').value;
	finalmatematicas1PE = finalmatematicas1PE.replace(/,/g,"");
	document.getElementById('matematicasPE').value = finalmatematicas1PE;
	
	document.getElementById('cienciasPE').value = finalCienciasPE;
	var finalciencias1PE = document.getElementById('cienciasPE').value;
	finalciencias1PE = finalciencias1PE.replace(/,/g,"");
	document.getElementById('cienciasPE').value = finalciencias1PE;
	
	document.getElementById('socialesPE').value = finalSocialesPE;
	var finalsociales1PE = document.getElementById('socialesPE').value;
	finalsociales1PE = finalsociales1PE.replace(/,/g,"");
	document.getElementById('socialesPE').value = finalsociales1PE;
	*/
	
	/*
	document.getElementById('ingles').value = finalIngles;
	var finalingles1=document.getElementById('ingles').value;
	var finalingles2 = finalingles1.replace(/,/g,"");
	document.getElementById('ingles').value = finalingles2;	
	*/
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