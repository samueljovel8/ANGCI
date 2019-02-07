//Se extraen los datos almacenados en las bases de datos locales baseMultiplesSessiones, baseMultiplesSessiones1, baseMultiplesSessiones2, baseMultiplesSessiones3, y se convierten a vector
//para poder comparar los datos procesados con los nombres almacenados en cada base de cada seccion, de esta forma se extraen los datos de alumnos de cada seccion.
function seccionesVarias(secc,niveleEdu){
	var niesPro = getNies0();
	var nombresSiraiPro = getNombresSirai0();
	var nombresCuadrosPro = getNombresCuadros0();
	var lenguajePro = getLenguaje0();
	var matematicaPro = getMatematicas0();
	var cienciasPro = getCiencias0();
	var socialesPro = getSociales0();
	var inglesPro = getIngles0();
	
	var vecNiesPro = niesPro.split('\n');
	var vecNombresSiraiPro = nombresSiraiPro.split('\n');
	
	var vecNombresCuadrosPro = nombresCuadrosPro.split('\n');
	var vecLenguajePro = lenguajePro.split('\n');
	var vecMatematicasPro = matematicaPro.split('\n');
	var vecCienciasPro = cienciasPro.split('\n');
	var vecSocialesPro = socialesPro.split('\n');
	var vecInglesPro = inglesPro.split('\n');
	
	//alert(niesPro);alert(nombresSiraiPro);alert(nombresCuadrosPro);alert(lenguajePro);alert(matematicaPro);alert(cienciasPro);alert(socialesPro);alert(inglesPro);
	//var k=2;
	//alert(vecNiesPro[k]);alert(vecNombresSiraiPro[k]);alert(vecNombresCuadrosPro[k]);alert(vecLenguajePro[k]);alert(vecMatematicasPro[k]);alert(vecCienciasPro[k]);alert(vecSocialesPro[k]);alert(vecInglesPro[k]);
	
	//------------------------------------------------------------------------
	var nies1Pro = getNies1();
	var nombresSirai1Pro = getNombresSirai1();
	var vecNies1Pro = nies1Pro.split('>');
	var vecNombresSirai1Pro = nombresSirai1Pro.split('>');
	//------------------------------------------------------------------------
	var nies2Pro = getNies2();
	var nombresSirai2Pro = getNombresSirai2();
	var vecNies2Pro = nies2Pro.split('>');
	var vecNombresSirai2Pro = nombresSirai2Pro.split('>');
	//------------------------------------------------------------------------
	var nies3Pro = getNies3();
	var nombresSirai3Pro = getNombresSirai3();
	var vecNies3Pro = nies3Pro.split('>');
	var vecNombresSirai3Pro = nombresSirai3Pro.split('>');
	//------------------------------------------------------------------------
	//alert(vecNies1Pro[0]);alert(vecNombresSirai1Pro[0]);
	
	
	//variables con datos datos finales de la seccion 1
	var niesProFinal1 = [];
	var nombresSiraiProFinal1 = [];
	var lenguajeProFinal1 = [];
	var matematicasProFinal1 = [];
	var cienciasProFinal1 = [];
	var socialesProFinal1 = [];
	var inglesProFinal1 = [];
	
	//Proceso de filtro para seccion 1
	for(i=0;i<=vecNombresSiraiPro.length-1;i++){
		for(k=0;k<=vecNombresSirai1Pro.length-1;k++){
			var sinComaSiari = vecNombresSiraiPro[i];
			var sinComaCuadros = vecNombresSirai1Pro[k];
			
			sinComaSiari=sinComaSiari.replace(/[ÀÁÂÃÄÅ]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[ÈÉÊË]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[ÌÍÎÏ]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[ÒÓÔÕÖ]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[ÙÚÛÜ]/g,"U");
						
			sinComaSiari=sinComaSiari.replace(/[aàáâãäå]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[eèéêë]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[iìíîï]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[oòóôõö]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[uùúûü]/g,"U");
			sinComaSiari=sinComaSiari.replace(/\s/g,"");
			
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
			sinComaCuadros=sinComaCuadros.replace(/\s/g,"");
			
			if(sinComaSiari == sinComaCuadros){	
				if(k ==vecNombresSirai1Pro.length-1){
				
					niesProFinal1.push(vecNiesPro[i]);
					nombresSiraiProFinal1.push(vecNombresSiraiPro[i]);
					lenguajeProFinal1.push(vecLenguajePro[i]);
					matematicasProFinal1.push(vecMatematicasPro[i]);
					cienciasProFinal1.push(vecCienciasPro[i]);
					socialesProFinal1.push(vecSocialesPro[i]);
					inglesProFinal1.push(vecInglesPro[i]);
					
				}else{
					niesProFinal1.push(vecNiesPro[i] + "\n");
					nombresSiraiProFinal1.push(vecNombresSiraiPro[i] + "\n");
					lenguajeProFinal1.push(vecLenguajePro[i] + "\n");
					matematicasProFinal1.push(vecMatematicasPro[i] + "\n");
					cienciasProFinal1.push(vecCienciasPro[i] + "\n");
					socialesProFinal1.push(vecSocialesPro[i] + "\n");
					inglesProFinal1.push(vecInglesPro[i] + "\n");
				
				}
			}
		}
	}
	
	
	
/*
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************

*/
	//variables con datos datos finales de la seccion 2
	var niesProFinal2 = [];
	var nombresSiraiProFinal2 = [];
	var lenguajeProFinal2 = [];
	var matematicasProFinal2 = [];
	var cienciasProFinal2 = [];
	var socialesProFinal2 = [];
	var inglesProFinal2 = [];
	
	//Proceso de filtro para seccion 2
	for(i=0;i<=vecNombresSiraiPro.length-1;i++){
		for(k=0;k<=vecNombresSirai2Pro.length-1;k++){
			var sinComaSiari = vecNombresSiraiPro[i];
			var sinComaCuadros = vecNombresSirai2Pro[k];
			
			sinComaSiari=sinComaSiari.replace(/[ÀÁÂÃÄÅ]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[ÈÉÊË]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[ÌÍÎÏ]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[ÒÓÔÕÖ]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[ÙÚÛÜ]/g,"U");
						
			sinComaSiari=sinComaSiari.replace(/[aàáâãäå]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[eèéêë]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[iìíîï]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[oòóôõö]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[uùúûü]/g,"U");
			sinComaSiari=sinComaSiari.replace(/\s/g,"");
			
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
			sinComaCuadros=sinComaCuadros.replace(/\s/g,"");
			
			if(sinComaSiari == sinComaCuadros){	
				if(k ==vecNombresSirai2Pro.length-1){
				
					niesProFinal2.push(vecNiesPro[i]);
					nombresSiraiProFinal2.push(vecNombresSiraiPro[i]);
					lenguajeProFinal2.push(vecLenguajePro[i]);
					matematicasProFinal2.push(vecMatematicasPro[i]);
					cienciasProFinal2.push(vecCienciasPro[i]);
					socialesProFinal2.push(vecSocialesPro[i]);
					inglesProFinal2.push(vecInglesPro[i]);
					
				}else{
					niesProFinal2.push(vecNiesPro[i] + "\n");
					nombresSiraiProFinal2.push(vecNombresSiraiPro[i] + "\n");
					lenguajeProFinal2.push(vecLenguajePro[i] + "\n");
					matematicasProFinal2.push(vecMatematicasPro[i] + "\n");
					cienciasProFinal2.push(vecCienciasPro[i] + "\n");
					socialesProFinal2.push(vecSocialesPro[i] + "\n");
					inglesProFinal2.push(vecInglesPro[i] + "\n");
				
				}
			}
		}
	}
/*
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************
**********************************************************************************************************************************************************************************

*/
	//variables con datos datos finales de la seccion 3
	var niesProFinal3 = [];
	var nombresSiraiProFinal3 = [];
	var lenguajeProFinal3 = [];
	var matematicasProFinal3 = [];
	var cienciasProFinal3 = [];
	var socialesProFinal3 = [];
	var inglesProFinal3 = [];
	
	//Proceso de filtro para seccion 3
	for(i=0;i<=vecNombresSiraiPro.length-1;i++){
		for(k=0;k<=vecNombresSirai3Pro.length-1;k++){
			var sinComaSiari = vecNombresSiraiPro[i];
			var sinComaCuadros = vecNombresSirai3Pro[k];
			
			sinComaSiari=sinComaSiari.replace(/[ÀÁÂÃÄÅ]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[ÈÉÊË]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[ÌÍÎÏ]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[ÒÓÔÕÖ]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[ÙÚÛÜ]/g,"U");
						
			sinComaSiari=sinComaSiari.replace(/[aàáâãäå]/g,"A");
			sinComaSiari=sinComaSiari.replace(/[eèéêë]/g,"E");
		    sinComaSiari=sinComaSiari.replace(/[iìíîï]/g,"I");
		    sinComaSiari=sinComaSiari.replace(/[oòóôõö]/g,"O");
		    sinComaSiari=sinComaSiari.replace(/[uùúûü]/g,"U");
			sinComaSiari=sinComaSiari.replace(/\s/g,"");
			
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
			sinComaCuadros=sinComaCuadros.replace(/\s/g,"");
			
			if(sinComaSiari == sinComaCuadros){	
				if(k ==vecNombresSirai3Pro.length-1){
				
					niesProFinal3.push(vecNiesPro[i]);
					nombresSiraiProFinal3.push(vecNombresSiraiPro[i]);
					lenguajeProFinal3.push(vecLenguajePro[i]);
					matematicasProFinal3.push(vecMatematicasPro[i]);
					cienciasProFinal3.push(vecCienciasPro[i]);
					socialesProFinal3.push(vecSocialesPro[i]);
					inglesProFinal3.push(vecInglesPro[i]);
					
				}else{
					niesProFinal3.push(vecNiesPro[i] + "\n");
					nombresSiraiProFinal3.push(vecNombresSiraiPro[i] + "\n");
					lenguajeProFinal3.push(vecLenguajePro[i] + "\n");
					matematicasProFinal3.push(vecMatematicasPro[i] + "\n");
					cienciasProFinal3.push(vecCienciasPro[i] + "\n");
					socialesProFinal3.push(vecSocialesPro[i] + "\n");
					inglesProFinal3.push(vecInglesPro[i] + "\n");
				
				}
			}
		}
	}	
	//var niveleEdu = localStorage.getItem("parametro");
	var grado = document.getElementById("eb1").value;
	if(secc==1){
	
		localStorage.removeItem('niesStorage1');
		localStorage.removeItem('nombresSiraiStorage1');
		localStorage.removeItem('lenguajeStorage1');
		localStorage.removeItem('matematicasStorage1');
		localStorage.removeItem('cienciasStorage1');
		localStorage.removeItem('socialesStorage1');
		localStorage.removeItem('inglesStorage1');
		
		localStorage.setItem('niesStorage1', JSON.stringify(niesProFinal1));
		localStorage.setItem('nombresSiraiStorage1', JSON.stringify(nombresSiraiProFinal1));
		localStorage.setItem('lenguajeStorage1', JSON.stringify(lenguajeProFinal1));
		localStorage.setItem('matematicasStorage1', JSON.stringify(matematicasProFinal1));
		localStorage.setItem('cienciasStorage1', JSON.stringify(cienciasProFinal1));
		localStorage.setItem('socialesStorage1', JSON.stringify(socialesProFinal1));
		localStorage.setItem('inglesStorage1', JSON.stringify(inglesProFinal1));
		
		if(niveleEdu=='0'){
			window.open('cuadroSecciones/alfabetizacionSec.html');
		}else if(niveleEdu=='1'){
			if(grado==3 || grado==6){
				window.open('cuadroSecciones/BasicaSec36.html');
			}else if(grado==7 || grado==8 || grado==9){
				window.open('cuadroSecciones/BasicaSec.html');
			}
		}else if(niveleEdu=='2'){
			window.open('cuadroSecciones/primeranioSec.html');
		}else if(niveleEdu=='3'){
			window.open('cuadroSecciones/segundoanioSec.html');
		}else if(niveleEdu=='4'){
			window.open('cuadroSecciones/certificadosSec.html');
		}
	}else if(secc==2){
		
		localStorage.removeItem('niesStorage1');
		localStorage.removeItem('nombresSiraiStorage1');
		localStorage.removeItem('lenguajeStorage1');
		localStorage.removeItem('matematicasStorage1');
		localStorage.removeItem('cienciasStorage1');
		localStorage.removeItem('socialesStorage1');
		localStorage.removeItem('inglesStorage1');
			
		localStorage.setItem('niesStorage1', JSON.stringify(niesProFinal2));
		localStorage.setItem('nombresSiraiStorage1', JSON.stringify(nombresSiraiProFinal2));
		localStorage.setItem('lenguajeStorage1', JSON.stringify(lenguajeProFinal2));
		localStorage.setItem('matematicasStorage1', JSON.stringify(matematicasProFinal2));
		localStorage.setItem('cienciasStorage1', JSON.stringify(cienciasProFinal2));
		localStorage.setItem('socialesStorage1', JSON.stringify(socialesProFinal2));
		localStorage.setItem('inglesStorage1', JSON.stringify(inglesProFinal2));	
		
		if(niveleEdu=='0'){
			window.open('cuadroSecciones/alfabetizacionSec.html');
		}else if(niveleEdu=='1'){
			if(grado==3 || grado==6){
				window.open('cuadroSecciones/BasicaSec36.html');
			}else if(grado==7 || grado==8 || grado==9){
				window.open('cuadroSecciones/BasicaSec.html');
			}
		}else if(niveleEdu=='2'){
			window.open('cuadroSecciones/primeranioSec.html');
		}else if(niveleEdu=='3'){
			window.open('cuadroSecciones/segundoanioSec.html');
		}else if(niveleEdu=='4'){
			window.open('cuadroSecciones/certificadosSec.html');
		}
	}else if(secc==3){
		
		localStorage.removeItem('niesStorage1');
		localStorage.removeItem('nombresSiraiStorage1');
		localStorage.removeItem('lenguajeStorage1');
		localStorage.removeItem('matematicasStorage1');
		localStorage.removeItem('cienciasStorage1');
		localStorage.removeItem('socialesStorage1');
		localStorage.removeItem('inglesStorage1');
			
		localStorage.setItem('niesStorage1', JSON.stringify(niesProFinal3));
		localStorage.setItem('nombresSiraiStorage1', JSON.stringify(nombresSiraiProFinal3));
		localStorage.setItem('lenguajeStorage1', JSON.stringify(lenguajeProFinal3));
		localStorage.setItem('matematicasStorage1', JSON.stringify(matematicasProFinal3));
		localStorage.setItem('cienciasStorage1', JSON.stringify(cienciasProFinal3));
		localStorage.setItem('socialesStorage1', JSON.stringify(socialesProFinal3));
		localStorage.setItem('inglesStorage1', JSON.stringify(inglesProFinal3));	
		
		if(niveleEdu=='0'){
			window.open('cuadroSecciones/alfabetizacionSec.html');
		}else if(niveleEdu=='1'){
			if(grado==3 || grado==6){
				window.open('cuadroSecciones/BasicaSec36.html');
			}else if(grado==7 || grado==8 || grado==9){
				window.open('cuadroSecciones/BasicaSec.html');
			}
		}else if(niveleEdu=='2'){
			window.open('cuadroSecciones/primeranioSec.html');
		}else if(niveleEdu=='3'){
			window.open('cuadroSecciones/segundoanioSec.html');
		}else if(niveleEdu=='4'){
			window.open('cuadroSecciones/certificadosSec.html');
		}
	}

}
//localStorage.removeItem('totalSeccioness');
var cantSecciones=0;
function cosasDeSecciones()
{
	var estado = document.getElementById('habilitarSeccionesMas');
	if(estado.checked== true)
	{
		//document.getElementById('mostrarSecciones').innerHTML = "Ocultar Secciones";
		var totSecciones = localStorage.getItem('totalSeccioness');
		if(totSecciones == 1){
			document.getElementById('btnUno').style.display = 'none';
			document.getElementById('btnDos').style.display = 'none';
			document.getElementById('btnTres').style.display = 'none';
			
			document.getElementById('btnUno1').style.display = 'none';
			document.getElementById('btnDos1').style.display = 'none';
			document.getElementById('btnTres1').style.display = 'none';
			
			cantSecciones=1;
		}else if(totSecciones == 2){
			document.getElementById('btnUno').style.display = 'block';
			document.getElementById('btnDos').style.display = 'block';
			
			document.getElementById('btnUno1').style.display = 'block';
			document.getElementById('btnDos1').style.display = 'block';
			
			cantSecciones=1;
		}else if(totSecciones ==3){
			document.getElementById('btnUno').style.display = 'block';
			document.getElementById('btnDos').style.display = 'block';
			document.getElementById('btnTres').style.display = 'block';
			
			document.getElementById('btnUno1').style.display = 'block';
			document.getElementById('btnDos1').style.display = 'block';
			document.getElementById('btnTres1').style.display = 'block';
			
			cantSecciones=1;
		}
		//localStorage.removeItem('totalSecioness');
	}else
	{
		document.getElementById('mostrarSecciones').innerHTML = "Mostrar Secciones";
		document.getElementById('btnUno').style.display = 'none';
		document.getElementById('btnDos').style.display = 'none';
		document.getElementById('btnTres').style.display = 'none';
		
		document.getElementById('btnUno1').style.display = 'none';
		document.getElementById('btnDos1').style.display = 'none';
		document.getElementById('btnTres1').style.display = 'none';
		
	}

}