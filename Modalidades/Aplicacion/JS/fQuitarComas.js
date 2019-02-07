
//Funcion para ajustar el texto. Quita espacios en blanco dobles y quita todas las comas que se establencen a causa de la manipulacion de vectores.

function quitarComas(){
	
	notasSiraiSinComas=[];
	cuadrosNotasSinComas=[];
	
	cuadrosNotasTextoLimpio=[];
	notasSiraiTextoLimpio=[];
	
	
	var nombreSirai = document.getElementById('nombresSirai').value;
	var notasSiraiConComas = nombreSirai.split("\n");
	
	var nombresCuadrosText = document.getElementById('nombresCuadros').value;
	var cuadrosNotasConComas = nombresCuadrosText.split("\n");
	
	for(j=0;j<=notasSiraiConComas.length-1;j++){
		if(j==0){
			notasSiraiSinComas.push(notasSiraiConComas[j].replace(",","-"));
		}
		else{
			notasSiraiSinComas.push("\n" + notasSiraiConComas[j].replace(",","-"));
		}
	}
	
	for(j=0;j<=cuadrosNotasConComas.length-1;j++){
		if(j==0){
			cuadrosNotasSinComas.push(cuadrosNotasConComas[j].replace(",","-"));
		}
		else{
			cuadrosNotasSinComas.push("\n" + cuadrosNotasConComas[j].replace(",","-"));
		}
	}
	
	for(k=0;k<=cuadrosNotasSinComas.length-1;k++){
		var r2=cuadrosNotasSinComas[k].split("");
    
		var cadFinal = "";
		for(j=0; j<=r2.length-1; j++){
			var comas=0;
			if((/\s/.test(r2[j])) && (/\s/.test(r2[j+1]))){
				comas++;
			}
			if(comas==0){
				cadFinal = cadFinal + r2[j];
			}
	    }	
		if(k == cuadrosNotasSinComas.length-1){
			cuadrosNotasTextoLimpio.push(cadFinal.trim());
		}else{
			cuadrosNotasTextoLimpio.push(cadFinal.trim()+'\n');
		}
	}
	
	for(k=0;k<=notasSiraiSinComas.length-1;k++){
		var r2=notasSiraiSinComas[k].split("");
    
		var cadFinal = "";
		for(j=0; j<=r2.length-1; j++){
			var comas=0;
			if((/\s/.test(r2[j])) && (/\s/.test(r2[j+1]))){
				comas++;
			}
			if(comas==0){
				cadFinal = cadFinal + r2[j];
			}
	    }	
		if(k == notasSiraiSinComas.length-1){
			notasSiraiTextoLimpio.push(cadFinal.trim());
		}else{
			notasSiraiTextoLimpio.push(cadFinal.trim()+'\n');
		}
	}
	
	document.getElementById('nombresCuadros').value = cuadrosNotasTextoLimpio;
	document.getElementById('nombresSirai').value = notasSiraiTextoLimpio;
	
	var textoFinalCuadrosNotas1 = document.getElementById('nombresCuadros').value;
	var textoFinalCuadrosNotas2 = textoFinalCuadrosNotas1.replace(/,/g,"");
	var textoFinalCuadrosNotas3 = textoFinalCuadrosNotas2.replace(/-/g,",");
	document.getElementById('nombresCuadros').value = textoFinalCuadrosNotas3;
	
	var textoFinalNotasSirai1 = document.getElementById('nombresSirai').value;
	var textoFinalNotasSirai2 = textoFinalNotasSirai1.replace(/,/g,"");
	var textoFinalNotasSirai3 = textoFinalNotasSirai2.replace(/-/g,",");
	document.getElementById('nombresSirai').value = textoFinalNotasSirai3;
	
	
	habilitarOrdenar();
	
}