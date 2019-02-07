function agregarAlumno()
{
	var nombresCuadrosN = [];
	
	var nLenguajeTemp = [];
	var nMatematicaTemp = [];
	var nCienciasTemp = [];
	var nSocialesTemp = [];
	var nInglesTemp = [];
	
	var nombresCuadrosSecundario = [];
		
	var lenguajeTempN = document.getElementById('lenguaje').value;
	var lenguajeVecTempN = lenguajeTempN.split('\n');
	
	var matematicasTempN = document.getElementById('matematicas').value;
	var matematicasVecTempN = matematicasTempN.split('\n');
	
	var cienciasTempN = document.getElementById('ciencias').value;
	var cienciasVecTempN = cienciasTempN.split('\n');
	
	var socialesTempN = document.getElementById('sociales').value;
	var socialesVecTempN = socialesTempN.split('\n');
	
	var inglesTempN = document.getElementById('ingles').value;
	var inglesVecTempN = inglesTempN.split('\n');
	
	lenguajeVecTempN.push('0'+'\n');
	matematicasVecTempN.push('0'+'\n');
	cienciasVecTempN.push('0'+'\n');
	socialesVecTempN.push('0'+'\n');
	inglesVecTempN.push('0'+'\n');
	
	
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
	for(i=0;i<=lenguajeVecTempN.length-1;i++)
	{
		nLenguajeTemp.push(lenguajeVecTempN[i]);
		if(nLenguajeTemp[i] == ""){
			nLenguajeTemp.splice(i,1);
		}
		
	}
	document.getElementById('lenguaje').value = nLenguajeTemp;
	var finallenguaje1=document.getElementById('lenguaje').value;
	var finallenguaje2 = finallenguaje1.replace(/,/g,"\n");
	document.getElementById('lenguaje').value = finallenguaje2;
	
	//--------------ESTABLACER MATEMATICAS------------------------------------------------------
	
	for(i=0;i<=matematicasVecTempN.length-1;i++)
	{
		nMatematicaTemp.push(matematicasVecTempN[i]);
		if(nMatematicaTemp[i] == ""){
			nMatematicaTemp.splice(i,1);
		}
		
	}
	document.getElementById('matematicas').value = nMatematicaTemp;
	var finalmatematica1=document.getElementById('matematicas').value;
	var finalmatematica2 = finalmatematica1.replace(/,/g,"\n");
	document.getElementById('matematicas').value = finalmatematica2;
	
	//--------------ESTABLACER CIENCIAS------------------------------------------------------
	
	for(i=0;i<=cienciasVecTempN.length-1;i++)
	{
		nCienciasTemp.push(cienciasVecTempN[i]);
		if(nCienciasTemp[i] == ""){
			nCienciasTemp.splice(i,1);
		}
		
	}
	document.getElementById('ciencias').value = nCienciasTemp;
	var finalciencias1=document.getElementById('ciencias').value;
	var finalciencias2 = finalciencias1.replace(/,/g,"\n");
	document.getElementById('ciencias').value = finalciencias2;
	
	//--------------ESTABLACER SOCIALES------------------------------------------------------
	
	for(i=0;i<=socialesVecTempN.length-1;i++)
	{
		nSocialesTemp.push(socialesVecTempN[i]);
		if(nSocialesTemp[i] == ""){
			nSocialesTemp.splice(i,1);
		}
		
	}
	document.getElementById('sociales').value = nSocialesTemp;
	var finalsociales1=document.getElementById('sociales').value;
	var finalsociales2 = finalsociales1.replace(/,/g,"\n");
	document.getElementById('sociales').value = finalsociales2;
	
	//--------------ESTABLACER INGLES------------------------------------------------------
	
	for(i=0;i<=inglesVecTempN.length-1;i++)
	{
		nInglesTemp.push(inglesVecTempN[i]);
		if(nInglesTemp[i] == ""){
			nInglesTemp.splice(i,1);
		}
		
	}
	document.getElementById('ingles').value = nInglesTemp;
	var finalingles1=document.getElementById('ingles').value;
	var finalingles2 = finalingles1.replace(/,/g,"\n");
	document.getElementById('ingles').value = finalingles2;
	
}