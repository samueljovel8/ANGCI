//En este archivo estan todas las funciones necesarioas para manipular las diferentes secciones con que se pueden trabajar





//la variable secciones cambiara cuando sean multiples secciones las que se procesaran, servira para indicar a la funcion ORDENAR cuando debe guardar los datos
//y cuando no.
//Si la variable vale 0 es porque solo hay una seccion y no se guardaran los datos en la base de MULTIPLES SECCIONES.
//Si la variable vale 1 es porque hay multiples secciones y debe guardar una sola vez los datos de todas las secciones
var secciones=0;
var totSessiones=0;
function pegadoEspecialnomSirai()
{
	
		var nombresDesordenados = document.getElementById('nombresSirai').value;
		var nombresDesordenadosVec = nombresDesordenados.split("<<<<<<<<");
		
		
		//alert(nombresDesordenadosVec.length-1);
		if(nombresDesordenadosVec.length-1 != 0 ){
			var niesDes="";
			var nombresDes="";
			
			for(i=1;i<=nombresDesordenadosVec.length-2;i+=2){
				niesDes += nombresDesordenadosVec[i];
			}
			for(i=0;i<=nombresDesordenadosVec.length-2;i+=2){
				nombresDes += nombresDesordenadosVec[i];
			}
			
			var nies1 = niesDes.replace(/>/g,"\n");
			document.getElementById('nies').value = nies1;
				
			var nomDes1 = nombresDes.replace(/>/g,"\n");
			document.getElementById('nombresSirai').value = nomDes1;
				
			//alert(nombresDesordenadosVec.length);
			if(nombresDesordenadosVec.length-1 > 2)
			{
				/*
				localStorage.setItem('nombresSeccion1', JSON.stringify(nombresDesordenadosVec[0]));
				localStorage.setItem('niesSeccion1', JSON.stringify(nombresDesordenadosVec[1]));
				localStorage.setItem('nombresSeccion2', JSON.stringify(nombresDesordenadosVec[2]));
				localStorage.setItem('niesSeccion2', JSON.stringify(nombresDesordenadosVec[3]));
				localStorage.setItem('nombresSeccion3', JSON.stringify(nombresDesordenadosVec[4]));
				localStorage.setItem('niesSeccion3', JSON.stringify(nombresDesordenadosVec[5]));
				*/
				var v=0;
				if(nombresDesordenadosVec.length>=1 && nombresDesordenadosVec.length<=2){
					v = 1;
					
				}else if(nombresDesordenadosVec.length>2 && nombresDesordenadosVec.length<=5){
					v = 2;
					
				}else if(nombresDesordenadosVec.length>5){
					v = 3;
				}
				localStorage.setItem('totalSeccioness', JSON.stringify(v));
				//alert(v);
				guardarHeadMultiplesSessiones1(nombresDesordenadosVec[0],nombresDesordenadosVec[1]);
				guardarHeadMultiplesSessiones2(nombresDesordenadosVec[2],nombresDesordenadosVec[3]);
				guardarHeadMultiplesSessiones3(nombresDesordenadosVec[4],nombresDesordenadosVec[5]);
				
				//totalSecciones();
				secciones=1;
				totSessiones=1;
				
			}
		document.getElementById("nombresSirai").readOnly  = true;	
		}
	
	calcularDatos();
	
}
/*
function totalSecciones()
{
	var nombresSeccionUno= localStorage.getItem("nombresSeccion1");
	var niesSeccionUno= localStorage.getItem("niesSeccion1");
	
	nombresSeccionUno = nombresSeccionUno.replace(/>/g,"\n");
	nombresSeccionUno = nombresSeccionUno.replace(/"/g,"");
	
	niesSeccionUno = niesSeccionUno.replace(/>/g,"\n");
	niesSeccionUno = niesSeccionUno.replace(/"/g,"");
	
	var vecNombresSeccionUno = nombresSeccionUno.split("\n");
	var vecNiesSeccionUno = niesSeccionUno.split("\n");
	//--------------------------------------------------------------------------------
	var nombresSeccionDos= localStorage.getItem("nombresSeccion2");
	var niesSeccionDos= localStorage.getItem("niesSeccion2");
	
	nombresSeccionDos = nombresSeccionDos.replace(/>/g,"\n");
	nombresSeccionDos = nombresSeccionDos.replace(/"/g,"");
	
	niesSeccionDos = niesSeccionDos.replace(/>/g,"\n");
	niesSeccionDos = niesSeccionDos.replace(/"/g,"");
	
	var vecNombresSeccionDos = nombresSeccionDos.split("\n");
	var vecNiesSeccionDos = niesSeccionDos.split("\n");
	//--------------------------------------------------------------------------------
	var nombresSeccionTres= localStorage.getItem("nombresSeccion3");
	var niesSeccionTres= localStorage.getItem("niesSeccion3");
	
	nombresSeccionTres = nombresSeccionTres.replace(/>/g,"\n");
	nombresSeccionTres = nombresSeccionTres.replace(/"/g,"");
	
	niesSeccionTres = niesSeccionTres.replace(/>/g,"\n");
	niesSeccionTres = niesSeccionTres.replace(/"/g,"");
	
	var vecNombresSeccionTres = nombresSeccionTres.split("\n");
	var vecNiesSeccionTres = niesSeccionTres.split("\n");
		
	localStorage.setItem('totalSeccion1', JSON.stringify(vecNombresSeccionUno.length-1));
	localStorage.setItem('totalSeccion2', JSON.stringify(vecNombresSeccionDos.length-1));
	localStorage.setItem('totalSeccion3', JSON.stringify(vecNombresSeccionTres.length-1));
	
	/*
	alert(localStorage.getItem("totalSeccion1"));
	alert(localStorage.getItem("totalSeccion2"));
	alert(localStorage.getItem("totalSeccion3"));	
	*/
	/*
}

function siguienteSeccion(tot)
{
	
		
	var seccionNies = document.getElementById('nies').value;
	var seccionNombresSirai = document.getElementById('nombresSirai').value;
	var seccionNombresCuadros = document.getElementById('nombresCuadros').value;
	var seccionLenguaje = document.getElementById('lenguaje').value;
	var seccionMatematicas = document.getElementById('matematicas').value;
	var seccionCiencias = document.getElementById('ciencias').value;
	var seccionSociales = document.getElementById('sociales').value;
	var seccionIngles = document.getElementById('ingles').value;
	
	var vecSeccionNies = seccionNies.split("\n");
	var vecSeccionNombresSirais = seccionNombresSirai.split("\n");
	var vecSeccionNombresCuadros = seccionNombresCuadros.split("\n");
	var vecSeccionLenguaje = seccionLenguaje.split("\n");
	var vecSeccionMatematicas = seccionMatematicas.split("\n");
	var vecSeccionCiencias = seccionCiencias.split("\n");
	var vecSeccionSociales = seccionSociales.split("\n");
	var vecSeccionIngles = seccionIngles.split("\n");
	
	var vecUnicaSeccionNies = [];
	var vecUnicaSeccionNombresSirai = [];
	var vecUnicaSeccionNombresCuadros = [];
	var vecUnicaSeccionLenguaje = [];
	var vecUnicaSeccionMatematicas = [];
	var vecUnicaSeccionCiencias = [];
	var vecUnicaSeccionSociales = [];
	var vecUnicaSeccionIngles = [];
	//******************************************************************
	if(tot=='1'){
		var total = parseInt(localStorage.getItem("totalSeccion1"));
		var inicio = 0;
	}else if(tot=='2'){
		var total = parseInt(localStorage.getItem("totalSeccion1")) + parseInt(localStorage.getItem("totalSeccion2"));
		var inicio = parseInt(localStorage.getItem("totalSeccion1"));
	}else if(tot=='3'){
		var total = parseInt(localStorage.getItem("totalSeccion1")) + parseInt(localStorage.getItem("totalSeccion2")) + parseInt(localStorage.getItem("totalSeccion3"));
		var inicio = parseInt(localStorage.getItem("totalSeccion1")) + parseInt(localStorage.getItem("totalSeccion2"));
	}
	//alert(inicio);
	//******************************************************************
	for(i=inicio;i<=total-1;i++){
		if(i == total-1){
			vecUnicaSeccionNies.push(vecSeccionNies[i] + "\n");
			vecUnicaSeccionNombresSirai.push(vecSeccionNombresSirais[i] + "\n");
			vecUnicaSeccionNombresCuadros.push(vecSeccionNombresCuadros[i] + "\n");
			vecUnicaSeccionLenguaje.push(vecSeccionLenguaje[i] + "\n");
			vecUnicaSeccionMatematicas.push(vecSeccionMatematicas[i] + "\n");
			vecUnicaSeccionCiencias.push(vecSeccionCiencias[i] + "\n");
			vecUnicaSeccionSociales.push(vecSeccionSociales[i] + "\n");
			vecUnicaSeccionIngles.push(vecSeccionIngles[i] + "\n");
		}else{
			vecUnicaSeccionNies.push(vecSeccionNies[i] + "\n");
			vecUnicaSeccionNombresSirai.push(vecSeccionNombresSirais[i] + "\n");
			vecUnicaSeccionNombresCuadros.push(vecSeccionNombresCuadros[i] + "\n");
			vecUnicaSeccionLenguaje.push(vecSeccionLenguaje[i] + "\n");
			vecUnicaSeccionMatematicas.push(vecSeccionMatematicas[i] + "\n");
			vecUnicaSeccionCiencias.push(vecSeccionCiencias[i] + "\n");
			vecUnicaSeccionSociales.push(vecSeccionSociales[i] + "\n");
			vecUnicaSeccionIngles.push(vecSeccionIngles[i] + "\n");
		}
	}
	//.replace(/,/g,"")
	document.getElementById('nies').value = vecUnicaSeccionNies;
	document.getElementById('nombresSirai').value = vecUnicaSeccionNombresSirai;
	document.getElementById('nombresCuadros').value = vecUnicaSeccionNombresCuadros;
	document.getElementById('lenguaje').value = vecUnicaSeccionLenguaje;
	document.getElementById('matematicas').value = vecUnicaSeccionMatematicas;
	document.getElementById('ciencias').value = vecUnicaSeccionCiencias;
	document.getElementById('sociales').value = vecUnicaSeccionSociales;
	document.getElementById('ingles').value = vecUnicaSeccionIngles;
	
	var seccionNies1 = document.getElementById('nies').value;
	var seccionNombresSirai1 = document.getElementById('nombresSirai').value;
	var seccionNombresCuadros1 = document.getElementById('nombresCuadros').value;
	var seccionLenguaje1 = document.getElementById('lenguaje').value;
	var seccionMatematicas1 = document.getElementById('matematicas').value;
	var seccionCiencias1 = document.getElementById('ciencias').value;
	var seccionSociales1 = document.getElementById('sociales').value;
	var seccionIngles1 = document.getElementById('ingles').value;
	
	seccionNies1 = seccionNies1.replace(/,/g,"");
	seccionNombresSirai1 = seccionNombresSirai1.replace(/,/g,"");
	seccionNombresCuadros1 = seccionNombresCuadros1.replace(/,/g,"");
	seccionLenguaje1 = seccionLenguaje1.replace(/,/g,"");
	seccionMatematicas1 = seccionMatematicas1.replace(/,/g,"");
	seccionCiencias1 = seccionCiencias1.replace(/,/g,"");
	seccionSociales1 = seccionSociales1.replace(/,/g,"");
	seccionIngles1 = seccionIngles1.replace(/,/g,"");
	
	document.getElementById('nies').value = seccionNies1;
	document.getElementById('nombresSirai').value = seccionNombresSirai1;
	document.getElementById('nombresCuadros').value = seccionNombresCuadros1;
	document.getElementById('lenguaje').value = seccionLenguaje1;
	document.getElementById('matematicas').value = seccionMatematicas1;
	document.getElementById('ciencias').value = seccionCiencias1;
	document.getElementById('sociales').value = seccionSociales1;
	document.getElementById('ingles').value = seccionIngles1;
	calcularDatos();
}
*/