function agregarAlumno()
{
	var nombresCuadrosN = [];
	
	var nLenguajeTempM1 = [];
	var nMatematicaTempM1 = [];
	var nCienciasTempM1 = [];
	var nSocialesTempM1 = [];
	var nInglesTempM1 = [];
	
	var nLenguajeTempM2 = [];
	var nMatematicaTempM2 = [];
	var nCienciasTempM2 = [];
	var nSocialesTempM2 = [];
	var nInglesTempM2 = [];
	
	var nLenguajeTempM3 = [];
	var nMatematicaTempM3 = [];
	var nCienciasTempM3 = [];
	var nSocialesTempM3 = [];
	var nInglesTempM3 = [];
	
	var nLenguajeTempM4 = [];
	var nMatematicaTempM4 = [];
	var nCienciasTempM4 = [];
	var nSocialesTempM4 = [];
	var nInglesTempM4 = [];
	
	var nLenguajeTempM5 = [];
	var nMatematicaTempM5 = [];
	var nCienciasTempM5 = [];
	var nSocialesTempM5 = [];
	var nInglesTempM5 = [];
	
	var nLenguajeTempPE = [];
	var nMatematicaTempPE = [];
	var nCienciasTempPE = [];
	var nSocialesTempPE = [];
	var nNiesTempPE = [];
	
	
	var nombresCuadrosSecundario = [];
//************************************************************************************************************************
	var lenguajeTempNM1 = document.getElementById('lenguajeM1').value;
	var lenguajeVecTempNM1 = lenguajeTempNM1.split('\n');
	var matematicasTempNM1 = document.getElementById('matematicasM1').value;
	var matematicasVecTempNM1 = matematicasTempNM1.split('\n');
	var cienciasTempNM1 = document.getElementById('cienciasM1').value;
	var cienciasVecTempNM1 = cienciasTempNM1.split('\n');
	var socialesTempNM1 = document.getElementById('socialesM1').value;
	var socialesVecTempNM1 = socialesTempNM1.split('\n');
	var inglesTempNM1 = document.getElementById('inglesM1').value;
	var inglesVecTempNM1 = inglesTempNM1.split('\n');
	
	var lenguajeTempNM2 = document.getElementById('lenguajeM2').value;
	var lenguajeVecTempNM2 = lenguajeTempNM2.split('\n');
	var matematicasTempNM2 = document.getElementById('matematicasM2').value;
	var matematicasVecTempNM2 = matematicasTempNM2.split('\n');
	var cienciasTempNM2 = document.getElementById('cienciasM2').value;
	var cienciasVecTempNM2 = cienciasTempNM2.split('\n');
	var socialesTempNM2 = document.getElementById('socialesM2').value;
	var socialesVecTempNM2 = socialesTempNM2.split('\n');
	var inglesTempNM2 = document.getElementById('inglesM2').value;
	var inglesVecTempNM2 = inglesTempNM2.split('\n');
	
	var lenguajeTempNM3 = document.getElementById('lenguajeM3').value;
	var lenguajeVecTempNM3 = lenguajeTempNM3.split('\n');
	var matematicasTempNM3 = document.getElementById('matematicasM3').value;
	var matematicasVecTempNM3 = matematicasTempNM3.split('\n');
	var cienciasTempNM3 = document.getElementById('cienciasM3').value;
	var cienciasVecTempNM3 = cienciasTempNM3.split('\n');
	var socialesTempNM3 = document.getElementById('socialesM3').value;
	var socialesVecTempNM3 = socialesTempNM3.split('\n');
	var inglesTempNM3 = document.getElementById('inglesM3').value;
	var inglesVecTempNM3 = inglesTempNM3.split('\n');
	
	var lenguajeTempNM4 = document.getElementById('lenguajeM4').value;
	var lenguajeVecTempNM4 = lenguajeTempNM4.split('\n');
	var matematicasTempNM4 = document.getElementById('matematicasM4').value;
	var matematicasVecTempNM4 = matematicasTempNM4.split('\n');
	var cienciasTempNM4 = document.getElementById('cienciasM4').value;
	var cienciasVecTempNM4 = cienciasTempNM4.split('\n');
	var socialesTempNM4 = document.getElementById('socialesM4').value;
	var socialesVecTempNM4 = socialesTempNM4.split('\n');
	var inglesTempNM4 = document.getElementById('inglesM4').value;
	var inglesVecTempNM4 = inglesTempNM4.split('\n');
	
	var lenguajeTempNM5 = document.getElementById('lenguajeM5').value;
	var lenguajeVecTempNM5 = lenguajeTempNM5.split('\n');
	var matematicasTempNM5 = document.getElementById('matematicasM5').value;
	var matematicasVecTempNM5 = matematicasTempNM5.split('\n');
	var cienciasTempNM5 = document.getElementById('cienciasM5').value;
	var cienciasVecTempNM5 = cienciasTempNM5.split('\n');
	var socialesTempNM5 = document.getElementById('socialesM5').value;
	var socialesVecTempNM5 = socialesTempNM5.split('\n');
	var inglesTempNM5 = document.getElementById('inglesM5').value;
	var inglesVecTempNM5 = inglesTempNM5.split('\n');
	
	var lenguajeTempNPE = document.getElementById('lenguajePE').value;
	var lenguajeVecTempNPE = lenguajeTempNPE.split('\n');
	var matematicasTempNPE = document.getElementById('matematicasPE').value;
	var matematicasVecTempNPE = matematicasTempNPE.split('\n');
	var cienciasTempNPE = document.getElementById('cienciasPE').value;
	var cienciasVecTempNPE = cienciasTempNPE.split('\n');
	var socialesTempNPE = document.getElementById('socialesPE').value;
	var socialesVecTempNPE = socialesTempNPE.split('\n');
	var niesTempNPE = document.getElementById('niesPE').value;
	var niesVecTempNPE = niesTempNPE.split('\n');
//************************************************************************************************************************	
	lenguajeVecTempNM1.push('0.000'+'\n');
	matematicasVecTempNM1.push('0.000'+'\n');
	cienciasVecTempNM1.push('0.000'+'\n');
	socialesVecTempNM1.push('0.000'+'\n');
	inglesVecTempNM1.push('0.000'+'\n');
	
	lenguajeVecTempNM2.push('0.000'+'\n');
	matematicasVecTempNM2.push('0.000'+'\n');
	cienciasVecTempNM2.push('0.000'+'\n');
	socialesVecTempNM2.push('0.000'+'\n');
	inglesVecTempNM2.push('0.000'+'\n');
	
	lenguajeVecTempNM3.push('0.000'+'\n');
	matematicasVecTempNM3.push('0.000'+'\n');
	cienciasVecTempNM3.push('0.000'+'\n');
	socialesVecTempNM3.push('0.000'+'\n');
	inglesVecTempNM3.push('0.000'+'\n');
	
	lenguajeVecTempNM4.push('0.000'+'\n');
	matematicasVecTempNM4.push('0.000'+'\n');
	cienciasVecTempNM4.push('0.000'+'\n');
	socialesVecTempNM4.push('0.000'+'\n');
	inglesVecTempNM4.push('0.000'+'\n');
	
	lenguajeVecTempNM5.push('0.000'+'\n');
	matematicasVecTempNM5.push('0.000'+'\n');
	cienciasVecTempNM5.push('0.000'+'\n');
	socialesVecTempNM5.push('0.000'+'\n');
	inglesVecTempNM5.push('0.000'+'\n');
	
	lenguajeVecTempNPE.push('0.000'+'\n');
	matematicasVecTempNPE.push('0.000'+'\n');
	cienciasVecTempNPE.push('0.000'+'\n');
	socialesVecTempNPE.push('0.000'+'\n');
	niesVecTempNPE.push('0.000'+'\n');
	
//************************************************************************************************************************	
	var totalCuadros = Object.keys(dicNombresCuadros).length;
	dicNombresCuadros['v' + totalCuadros + 1] = nombreActualPresionado;
	//finalLenguajeG.push(0.0 + "\n");
	var i=0;
	for(key in dicNombresCuadros)
	{
		nombresCuadrosN.push(dicNombresCuadros[key].replace(/,/g,"-")+"\n");
		if(nombresCuadrosN[i] == ''){
			nombresCuadrosN.splice(i,1);
		}
		
	i++;
	}
	document.getElementById('nombresCuadros').value = nombresCuadrosN;
	var nomCuadrosNCG=document.getElementById('nombresCuadros').value;
	var nomCuadrosNSC=nomCuadrosNCG.replace(/,/g,"");
	document.getElementById('nombresCuadros').value = nomCuadrosNSC;
	var nomCuadrosNCG1=document.getElementById('nombresCuadros').value;
	var nomCuadrosNSC1=nomCuadrosNCG1.replace(/-/g,",");
	document.getElementById('nombresCuadros').value = nomCuadrosNSC1;
	
	//--------------ESTABLACER CUADROS------------------------------------------------------
	
	var nombresCuadrosTemp = document.getElementById('nombresCuadros').value;
	var nombresCuadrosTempVec = nombresCuadrosTemp.split('\n');
	
	for(i=0;i<=nombresCuadrosTempVec.length-1;i++)
	{
		nombresCuadrosSecundario.push((nombresCuadrosTempVec[i]).replace(/,/g,"-"));
		if(nombresCuadrosTempVec[i] == ""){
			nombresCuadrosSecundario.splice(i,1);
		}
		
	}
	document.getElementById('nombresCuadros').value = nombresCuadrosSecundario;
	var nomCuadros1=document.getElementById('nombresCuadros').value;
	var nomCuadros2 = nomCuadros1.replace(/,/g,"\n");
	document.getElementById('nombresCuadros').value = nomCuadros2;
	var nomCuadros3=document.getElementById('nombresCuadros').value;
	var nomCuadros4 = nomCuadros3.replace(/-/g,",");
	document.getElementById('nombresCuadros').value = nomCuadros4;
	/*
	document.getElementById('lenguaje').value = nLenguajeTemp;
	var finallenguaje1=document.getElementById('lenguaje').value;
	var finallenguaje2 = finallenguaje1.replace(/,/g,"\n");
	document.getElementById('lenguaje').value = finallenguaje2;
	*/
	
	//--------------ESTABLACER LENGUAJE------------------------------------------------------
	for(i=0;i<=lenguajeVecTempNM1.length-1;i++)
	{
		nLenguajeTempM1.push(lenguajeVecTempNM1[i]);
		nLenguajeTempM2.push(lenguajeVecTempNM2[i]);
		nLenguajeTempM3.push(lenguajeVecTempNM3[i]);
		nLenguajeTempM4.push(lenguajeVecTempNM4[i]);
		nLenguajeTempM5.push(lenguajeVecTempNM5[i]);
		if(nLenguajeTempM1[i] == "" && nLenguajeTempM2[i] == "" && nLenguajeTempM3[i] == "" && nLenguajeTempM4[i] == "" && nLenguajeTempM5[i] == "" ){
			nLenguajeTempM1.splice(i,1);
			nLenguajeTempM2.splice(i,1);
			nLenguajeTempM3.splice(i,1);
			nLenguajeTempM4.splice(i,1);
			nLenguajeTempM5.splice(i,1);
		}
		
	}
	
	document.getElementById('lenguajeM1').value = nLenguajeTempM1;
	var finallenguaje1M1=document.getElementById('lenguajeM1').value;
	finallenguaje1M1 = finallenguaje1M1.replace(/,/g,"\n");
	document.getElementById('lenguajeM1').value = finallenguaje1M1;
	
	
	document.getElementById('lenguajeM2').value = nLenguajeTempM2;
	var finallenguaje1M2=document.getElementById('lenguajeM2').value;
	finallenguaje1M2 = finallenguaje1M2.replace(/,/g,"\n");
	document.getElementById('lenguajeM2').value = finallenguaje1M2;
	
	
	document.getElementById('lenguajeM3').value = nLenguajeTempM3;
	var finallenguaje1M3=document.getElementById('lenguajeM3').value;
	finallenguaje1M3 = finallenguaje1M3.replace(/,/g,"\n");
	document.getElementById('lenguajeM3').value = finallenguaje1M3;
	
	
	document.getElementById('lenguajeM4').value = nLenguajeTempM4;
	var finallenguaje1M4=document.getElementById('lenguajeM4').value;
	finallenguaje1M4 = finallenguaje1M4.replace(/,/g,"\n");
	document.getElementById('lenguajeM4').value = finallenguaje1M4;
	
	
	document.getElementById('lenguajeM5').value = nLenguajeTempM5;
	var finallenguaje1M5=document.getElementById('lenguajeM5').value;
	finallenguaje1M5 = finallenguaje1M5.replace(/,/g,"\n");
	document.getElementById('lenguajeM5').value = finallenguaje1M5;
	
	
	//--------------ESTABLACER MATEMATICAS------------------------------------------------------
	
	for(i=0;i<=matematicasVecTempNM1.length-1;i++)
	{
		nMatematicaTempM1.push(matematicasVecTempNM1[i]);
		nMatematicaTempM2.push(matematicasVecTempNM2[i]);
		nMatematicaTempM3.push(matematicasVecTempNM3[i]);
		nMatematicaTempM4.push(matematicasVecTempNM4[i]);
		nMatematicaTempM5.push(matematicasVecTempNM5[i]);
		if(nMatematicaTempM1[i] == "" && nMatematicaTempM2[i] == "" && nMatematicaTempM3[i] == "" && nMatematicaTempM4[i] == "" && nMatematicaTempM5[i] == ""){
			nMatematicaTempM1.splice(i,1);
			nMatematicaTempM2.splice(i,1);
			nMatematicaTempM3.splice(i,1);
			nMatematicaTempM4.splice(i,1);
			nMatematicaTempM5.splice(i,1);
		}
		
	}
	document.getElementById('matematicasM1').value = nMatematicaTempM1;
	var finalmatematica1M1=document.getElementById('matematicasM1').value;
	finalmatematica1M1 = finalmatematica1M1.replace(/,/g,"\n");
	document.getElementById('matematicasM1').value = finalmatematica1M1;
	
	document.getElementById('matematicasM2').value = nMatematicaTempM2;
	var finalmatematica1M2=document.getElementById('matematicasM2').value;
	finalmatematica1M2 = finalmatematica1M2.replace(/,/g,"\n");
	document.getElementById('matematicasM2').value = finalmatematica1M2;
	
	document.getElementById('matematicasM3').value = nMatematicaTempM3;
	var finalmatematica1M3=document.getElementById('matematicasM3').value;
	finalmatematica1M3 = finalmatematica1M3.replace(/,/g,"\n");
	document.getElementById('matematicasM3').value = finalmatematica1M3;
	
	document.getElementById('matematicasM4').value = nMatematicaTempM4;
	var finalmatematica1M4=document.getElementById('matematicasM4').value;
	finalmatematica1M4 = finalmatematica1M4.replace(/,/g,"\n");
	document.getElementById('matematicasM4').value = finalmatematica1M4;
	
	document.getElementById('matematicasM5').value = nMatematicaTempM5;
	var finalmatematica1M5=document.getElementById('matematicasM5').value;
	finalmatematica1M5 = finalmatematica1M5.replace(/,/g,"\n");
	document.getElementById('matematicasM5').value = finalmatematica1M5;
	
	//--------------ESTABLACER CIENCIAS------------------------------------------------------
	
	for(i=0;i<=cienciasVecTempNM1.length-1;i++)
	{
		nCienciasTempM1.push(cienciasVecTempNM1[i]);
		nCienciasTempM2.push(cienciasVecTempNM2[i]);
		nCienciasTempM3.push(cienciasVecTempNM3[i]);
		nCienciasTempM4.push(cienciasVecTempNM4[i]);
		nCienciasTempM5.push(cienciasVecTempNM5[i]);
		if(nCienciasTempM1[i] == "" && nCienciasTempM2[i] == "" && nCienciasTempM3[i] == "" && nCienciasTempM4[i] == "" && nCienciasTempM5[i] == ""){
			nCienciasTempM1.splice(i,1);
			nCienciasTempM2.splice(i,1);
			nCienciasTempM3.splice(i,1);
			nCienciasTempM4.splice(i,1);
			nCienciasTempM5.splice(i,1);
		}
		
	}
	document.getElementById('cienciasM1').value = nCienciasTempM1;
	var finalciencias1M1=document.getElementById('cienciasM1').value;
	finalciencias1M1 = finalciencias1M1.replace(/,/g,"\n");
	document.getElementById('cienciasM1').value = finalciencias1M1;
	
	document.getElementById('cienciasM2').value = nCienciasTempM2;
	var finalciencias1M2=document.getElementById('cienciasM2').value;
	finalciencias1M2 = finalciencias1M2.replace(/,/g,"\n");
	document.getElementById('cienciasM2').value = finalciencias1M2;
	
	document.getElementById('cienciasM3').value = nCienciasTempM3;
	var finalciencias1M3=document.getElementById('cienciasM3').value;
	finalciencias1M3 = finalciencias1M3.replace(/,/g,"\n");
	document.getElementById('cienciasM3').value = finalciencias1M3;
	
	document.getElementById('cienciasM4').value = nCienciasTempM4;
	var finalciencias1M4=document.getElementById('cienciasM4').value;
	finalciencias1M4 = finalciencias1M4.replace(/,/g,"\n");
	document.getElementById('cienciasM4').value = finalciencias1M4;
	
	document.getElementById('cienciasM5').value = nCienciasTempM5;
	var finalciencias1M5=document.getElementById('cienciasM5').value;
	finalciencias1M5 = finalciencias1M5.replace(/,/g,"\n");
	document.getElementById('cienciasM5').value = finalciencias1M5;
	
	//--------------ESTABLACER SOCIALES------------------------------------------------------
	
	for(i=0;i<=socialesVecTempNM1.length-1;i++)
	{
		nSocialesTempM1.push(socialesVecTempNM1[i]);
		nSocialesTempM2.push(socialesVecTempNM2[i]);
		nSocialesTempM3.push(socialesVecTempNM3[i]);
		nSocialesTempM4.push(socialesVecTempNM4[i]);
		nSocialesTempM5.push(socialesVecTempNM5[i]);
		if(nSocialesTempM1[i] == "" && nSocialesTempM2[i] == "" && nSocialesTempM3[i] == "" && nSocialesTempM4[i] == "" && nSocialesTempM5[i] == ""){
			nSocialesTempM1.splice(i,1);
			nSocialesTempM2.splice(i,1);
			nSocialesTempM3.splice(i,1);
			nSocialesTempM4.splice(i,1);
			nSocialesTempM5.splice(i,1);
		}
		
	}
	document.getElementById('socialesM1').value = nSocialesTempM1;
	var finalsociales1M1=document.getElementById('socialesM1').value;
	finalsociales1M1 = finalsociales1M1.replace(/,/g,"\n");
	document.getElementById('socialesM1').value = finalsociales1M1;
	
	document.getElementById('socialesM2').value = nSocialesTempM2;
	var finalsociales1M2=document.getElementById('socialesM2').value;
	finalsociales1M2 = finalsociales1M2.replace(/,/g,"\n");
	document.getElementById('socialesM2').value = finalsociales1M2;
	
	document.getElementById('socialesM3').value = nSocialesTempM3;
	var finalsociales1M3=document.getElementById('socialesM3').value;
	finalsociales1M3 = finalsociales1M3.replace(/,/g,"\n");
	document.getElementById('socialesM3').value = finalsociales1M3;
	
	document.getElementById('socialesM4').value = nSocialesTempM4;
	var finalsociales1M4=document.getElementById('socialesM4').value;
	finalsociales1M4 = finalsociales1M4.replace(/,/g,"\n");
	document.getElementById('socialesM4').value = finalsociales1M4;
	
	document.getElementById('socialesM5').value = nSocialesTempM5;
	var finalsociales1M5=document.getElementById('socialesM5').value;
	finalsociales1M5 = finalsociales1M5.replace(/,/g,"\n");
	document.getElementById('socialesM5').value = finalsociales1M5;
	
	//--------------ESTABLACER INGLES------------------------------------------------------
	
	for(i=0;i<=inglesVecTempNM1.length-1;i++)
	{
		nInglesTempM1.push(inglesVecTempNM1[i]);
		nInglesTempM2.push(inglesVecTempNM2[i]);
		nInglesTempM3.push(inglesVecTempNM3[i]);
		nInglesTempM4.push(inglesVecTempNM4[i]);
		nInglesTempM5.push(inglesVecTempNM5[i]);
		if(nInglesTempM1[i] == "" && nInglesTempM2[i] == "" && nInglesTempM3[i] == "" && nInglesTempM4[i] == "" && nInglesTempM5[i] == ""){
			nInglesTempM1.splice(i,1);
			nInglesTempM2.splice(i,1);
			nInglesTempM3.splice(i,1);
			nInglesTempM4.splice(i,1);
			nInglesTempM5.splice(i,1);
		}
		
	}
	document.getElementById('inglesM1').value = nInglesTempM1;
	var finalingles1M1=document.getElementById('inglesM1').value;
	finalingles1M1 = finalingles1M1.replace(/,/g,"\n");
	document.getElementById('inglesM1').value = finalingles1M1;
	
	document.getElementById('inglesM2').value = nInglesTempM2;
	var finalingles1M2=document.getElementById('inglesM2').value;
	finalingles1M2 = finalingles1M2.replace(/,/g,"\n");
	document.getElementById('inglesM2').value = finalingles1M2;
	
	document.getElementById('inglesM3').value = nInglesTempM3;
	var finalingles1M3=document.getElementById('inglesM3').value;
	finalingles1M3 = finalingles1M3.replace(/,/g,"\n");
	document.getElementById('inglesM3').value = finalingles1M3;
	
	document.getElementById('inglesM4').value = nInglesTempM4;
	var finalingles1M4=document.getElementById('inglesM4').value;
	finalingles1M4 = finalingles1M4.replace(/,/g,"\n");
	document.getElementById('inglesM4').value = finalingles1M4;
	
	document.getElementById('inglesM5').value = nInglesTempM5;
	var finalingles1M5=document.getElementById('inglesM5').value;
	finalingles1M5 = finalingles1M5.replace(/,/g,"\n");
	document.getElementById('inglesM5').value = finalingles1M5;
	
	
	//--------------ESTABLACER PRUEBA EXTERNA------------------------------------------------------
	
	for(i=0;i<=lenguajeVecTempNPE.length-1;i++)
	{
		nLenguajeTempPE.push(lenguajeVecTempNPE[i]);
		nMatematicaTempPE.push(matematicasVecTempNPE[i]);
		nCienciasTempPE.push(cienciasVecTempNPE[i]);
		nSocialesTempPE.push(socialesVecTempNPE[i]);
		nNiesTempPE.push(niesVecTempNPE[i]);
		if(nLenguajeTempPE[i] == "" && nMatematicaTempPE[i] == "" && nCienciasTempPE[i] == "" && nSocialesTempPE[i] == "" && nNiesTempPE[i] == ""){
			nLenguajeTempPE.splice(i,1);
			nMatematicaTempPE.splice(i,1);
			nCienciasTempPE.splice(i,1);
			nSocialesTempPE.splice(i,1);
			nNiesTempPE.splice(i,1);
		}
		
	}
	document.getElementById('lenguajePE').value = nLenguajeTempPE;
	var finallenguaje1PE=document.getElementById('lenguajePE').value;
	finallenguaje1PE = finallenguaje1PE.replace(/,/g,"\n");
	document.getElementById('lenguajePE').value = finallenguaje1PE;
	
	document.getElementById('matematicasPE').value = nMatematicaTempPE;
	var finalmatematicas1PE=document.getElementById('matematicasPE').value;
	finalmatematicas1PE = finalmatematicas1PE.replace(/,/g,"\n");
	document.getElementById('matematicasPE').value = finalmatematicas1PE;
	
	document.getElementById('cienciasPE').value = nCienciasTempPE;
	var finalciencias1PE=document.getElementById('cienciasPE').value;
	finalciencias1PE = finalciencias1PE.replace(/,/g,"\n");
	document.getElementById('cienciasPE').value = finalciencias1PE;
	
	document.getElementById('socialesPE').value = nSocialesTempPE;
	var finalsociales1PE=document.getElementById('socialesPE').value;
	finalsociales1PE = finalsociales1PE.replace(/,/g,"\n");
	document.getElementById('socialesPE').value = finalsociales1PE;
	
	document.getElementById('niesPE').value = nNiesTempPE;
	var finalnies1PE=document.getElementById('niesPE').value;
	finalnies1PE = finalnies1PE.replace(/,/g,"\n");
	document.getElementById('niesPE').value = finalnies1PE;
	
}