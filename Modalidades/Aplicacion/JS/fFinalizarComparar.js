
function finalizarComparar()
{
	var nombresC1 = document.getElementById('nombresSirai').value;
	var arrayNombresC1 = nombresC1.split("\n");
	var nombresC2 = document.getElementById('nombresCuadros').value;
	var arrayNombresC2 = nombresC2.split("\n");
	
	var deberianNoEncontrarse = arrayNombresC1.length - arrayNombresC2.length; 
	
	var noEncontrados = Object.keys(dicNoEncontradosN1).length;
	
	
	if(noEncontrados == deberianNoEncontrarse){
		document.getElementById('nies').value = "";
		document.getElementById('nombresSirai').value = "";
		document.getElementById('nombresCuadros').value = "";
		
		var vecNoEncontradosTemp = [];
		var vecNiesNoEncontradosTemp = [];
		for(key in dicNoEncontradosN1)
		{
			if(key == Object.keys(dicNoEncontradosN1).length-1){
				vecNoEncontradosTemp.push(dicNoEncontradosN1[key].replace(/,/g,"-").trim());
			}else{
				vecNoEncontradosTemp.push(dicNoEncontradosN1[key].replace(/,/g,"-").trim() + '\n');
			}
		}
		for(key in dicNiesNoEncontrados)
		{
			if(key == Object.keys(dicNiesNoEncontrados).length-1){
				vecNiesNoEncontradosTemp.push(dicNiesNoEncontrados[key].replace(/,/g,"-").trim());
			}else{
				vecNiesNoEncontradosTemp.push(dicNiesNoEncontrados[key].replace(/,/g,"-").trim() + '\n');
			}
		}
		
		document.getElementById('nies').value = vecNiesNoEncontradosTemp;
		document.getElementById('nombresSirai').value = vecNoEncontradosTemp;
		
		var t1=document.getElementById('nies').value;
		var t2=document.getElementById('nombresSirai').value;
		t1=t1.replace(/,/g,"");
		t2=t2.replace(/,/g,"");
		t1=t1.replace(/-/g,",");
		t2=t2.replace(/-/g,",");
		document.getElementById('nies').value = t1;
		document.getElementById('nombresSirai').value = t2;
	}else if(noEncontrados != deberianNoEncontrarse){
		cerrarModal('modalComparar');
		quitarComas();
		ar('1');
	
	}
}