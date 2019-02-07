function generarCuadroProm(p){

	localStorage.removeItem('niesVecL');
	localStorage.removeItem('nombresSiraiVecL');
	localStorage.removeItem('lenguajeVecL');
	localStorage.removeItem('matematicasVecL');
	localStorage.removeItem('cienciasVecL');
	localStorage.removeItem('socialesVecL');
	localStorage.removeItem('inglesVecL');

	var nombreSiariVec2 = [];
	var niesSiariVec2 = [];
	
	var nombreSiraiVec = document.getElementById('nombresSirai').value;
	var ArrayNombreSiraiVec = nombreSiraiVec.split("\n");
	//alert(ArrayNombreSiraiVec.length);
	
	for(i=0;i<=ArrayNombreSiraiVec.length-1;i++)
	{
		nombreSiariVec2.push((ArrayNombreSiraiVec[i]));
		if(nombreSiariVec2[i] == ""){
			nombreSiariVec2.splice(i,1);
		}
		
	}
	
	//alert(nombreSiariVec2.length);
	localStorage.setItem('nombresSiraiVecL', JSON.stringify(nombreSiariVec2));
	
	var niesVec = document.getElementById('nies').value;
	var ArrayNiesVec = niesVec.split("\n");
	//alert(ArrayNiesVec.length);
	for(i=0;i<=ArrayNiesVec.length-1;i++)
	{
		niesSiariVec2.push((ArrayNiesVec[i]));
		if(niesSiariVec2[i] == ""){
			niesSiariVec2.splice(i,1);
		}
		
	}
	
	//alert(niesSiariVec2.length);
	localStorage.setItem('niesVecL', JSON.stringify(niesSiariVec2));
	
	//var lenguajeVec = document.getElementById('lenguaje').value;
	//var ArrayLenguajeVec = lenguajeVec.split("\n");
	localStorage.setItem('lenguajeVecL', JSON.stringify(finalLenguajeG));
	
	//var matematicasVec = document.getElementById('matematicas').value;
	//var ArrayMatematicasVec = matematicasVec.split("\n");
	localStorage.setItem('matematicasVecL', JSON.stringify(finalMatematicasG));
	
	//var cienciasVec = document.getElementById('ciencias').value;
	//var ArrayCienciasVec = cienciasVec.split("\n");
	localStorage.setItem('cienciasVecL', JSON.stringify(finalCienciasG));
	
	//var socialesVec = document.getElementById('sociales').value;
	//var ArraySocialesVec = socialesVec.split("\n");
	localStorage.setItem('socialesVecL', JSON.stringify(finalSocialesG));
	
	//var inglesVec = document.getElementById('ingles').value;
	//var ArrayInglesVec = inglesVec.split("\n");
	localStorage.setItem('inglesVecL', JSON.stringify(finalInglesG));
	/*
	finalLenguajeG.length=0;
	finalMatematicasG.length=0;
	finalCienciasG.length=0;
	finalSocialesG.length=0;
	finalInglesG.length=0;
	*/
	enviarEncabezado(p);
}