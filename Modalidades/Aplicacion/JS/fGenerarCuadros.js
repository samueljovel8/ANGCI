function generarCuadroProm(p){

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
	
	localStorage.removeItem('lenguajeVecLPE');
	localStorage.removeItem('matematicasVecLPE');
	localStorage.removeItem('cienciasVecLPE');
	localStorage.removeItem('socialesVecLPE');
	
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
	

	localStorage.setItem('niesVecL', JSON.stringify(niesSiariVec2));

	localStorage.setItem('lenguajeVecLM1', JSON.stringify(finalLenguajeGM1));
	localStorage.setItem('matematicasVecLM1', JSON.stringify(finalMatematicasGM1));
	localStorage.setItem('cienciasVecLM1', JSON.stringify(finalCienciasGM1));
	localStorage.setItem('socialesVecLM1', JSON.stringify(finalSocialesGM1));
	localStorage.setItem('inglesVecLM1', JSON.stringify(finalInglesGM1));
	
	localStorage.setItem('lenguajeVecLM2', JSON.stringify(finalLenguajeGM2));
	localStorage.setItem('matematicasVecLM2', JSON.stringify(finalMatematicasGM2));
	localStorage.setItem('cienciasVecLM2', JSON.stringify(finalCienciasGM2));
	localStorage.setItem('socialesVecLM2', JSON.stringify(finalSocialesGM2));
	localStorage.setItem('inglesVecLM2', JSON.stringify(finalInglesGM2));
	
	localStorage.setItem('lenguajeVecLM3', JSON.stringify(finalLenguajeGM3));
	localStorage.setItem('matematicasVecLM3', JSON.stringify(finalMatematicasGM3));
	localStorage.setItem('cienciasVecLM3', JSON.stringify(finalCienciasGM3));
	localStorage.setItem('socialesVecLM3', JSON.stringify(finalSocialesGM3));
	localStorage.setItem('inglesVecLM3', JSON.stringify(finalInglesGM3));
	
	localStorage.setItem('lenguajeVecLM4', JSON.stringify(finalLenguajeGM4));
	localStorage.setItem('matematicasVecLM4', JSON.stringify(finalMatematicasGM4));
	localStorage.setItem('cienciasVecLM4', JSON.stringify(finalCienciasGM4));
	localStorage.setItem('socialesVecLM4', JSON.stringify(finalSocialesGM4));
	localStorage.setItem('inglesVecLM4', JSON.stringify(finalInglesGM4));
	
	localStorage.setItem('lenguajeVecLM5', JSON.stringify(finalLenguajeGM5));
	localStorage.setItem('matematicasVecLM5', JSON.stringify(finalMatematicasGM5));
	localStorage.setItem('cienciasVecLM5', JSON.stringify(finalCienciasGM5));
	localStorage.setItem('socialesVecLM5', JSON.stringify(finalSocialesGM5));
	localStorage.setItem('inglesVecLM5', JSON.stringify(finalInglesGM5));
	
	localStorage.setItem('lenguajeVecLPE', JSON.stringify(finalLenguajeGPE));
	localStorage.setItem('matematicasVecLPE', JSON.stringify(finalMatematicasGPE));
	localStorage.setItem('cienciasVecLPE', JSON.stringify(finalCienciasGPE));
	localStorage.setItem('socialesVecLPE', JSON.stringify(finalSocialesGPE));
	
	/*
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
	
	finalLenguajeGPE.length=0;
	finalMatematicasGPE.length=0;
	finalCienciasGPE.length=0;
	finalSocialesGPE.length=0;
	*/
	enviarEncabezado(p);
	
}