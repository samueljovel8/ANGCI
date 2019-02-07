//Funcion que llena los vectores de los nombres no encontrados


function ar(val){
  var dicNombreSirai={};
  dicNoEncontrados={};
  dicNombresCuadros={};
  var ids1=[];
  var ids2=[];
  var nombreSirai = document.getElementById('nombresSirai').value;
  var nombresCuadrosText = document.getElementById('nombresCuadros').value;
  //si la variable val es igual a 0 (cero), los datos los toma en el orden correcto: del textArea nombresSirai llena el vector arrayNombreSirai y lo mismo con el textArea nombresCuadros.
  //si la variable val es igual a 1 (uno), los datos los toma en orden cambiado: del textArea nombresSirai llena el vector arrayNombresCuadros y vicenversa con el textArea nombresCuadros.
  if(val==0){
	var arrayNombreSirai = nombreSirai.split("\n");
	var arrayNombresCuadros = nombresCuadrosText.split("\n");
  }else if(val==1){
	var arrayNombreSirai = nombresCuadrosText.split("\n");
	var arrayNombresCuadros = nombreSirai.split("\n");  
  }
  
  //var arrayNombreSirai = ["Marcos Barillas","karla maria","samuel jovel", "selina hernandez", "oso adolfo","Humberto Jovel","Emerson Bonifacio","MArta Gonzales"];
  //var arrayNombresCuadros = ["Emerson pote","Emerson pancracio","karla","barillas","selina hernandez", "Gloria Ninfa", "oso adolfo", "Blanca elizabeth","umberto Jovel moreno","Diego","Fernandez","carlos","samuel","oswaldo garcia","daniela barillas"];
  //var ids = document.getElementById('id').value;
  //Se crean los items para generar el diccionario, de acuerdo al tamaño de el vector arrayNombreSirai
  for(j=0;j<=arrayNombreSirai.length-1;j++){
  	var itemsVec1 ='v'+j;
    ids1.push(itemsVec1);
  }
  //Se crean los items para generar el diccionario, de acuerdo al tamaño de el vector arrayNombresCuadros
  for(j=0;j<=arrayNombresCuadros.length-1;j++){
  	var itemsVec2 ='v'+j;
    ids2.push(itemsVec2);
  }
  //Se agregan los nombres al diccionario en los items correspondientes, se crea un diccionario de acuerdo al vector arrayNombreSirai
  for(i=0;i<=arrayNombreSirai.length-1;i++){
  	dicNombreSirai[ids1[i]]=arrayNombreSirai[i];
  }
  //Se agregan los nombres al diccionario en los items correspondientes, se crea un diccionario de acuerdo al vector arrayNombresCuadros
  for(i=0;i<=arrayNombresCuadros.length-1;i++){
  	dicNombresCuadros[ids2[i]]=arrayNombresCuadros[i];
  }
  //Se crea
  var dicEncontrados={};
  var totalEncontrados = 0;
  var totalNoEncontrados = 0;
  //Se compara un elemento del diccionario dicNombreSirai con todos los del diccionario dicNombresCuadros.
  // se contabilizan los nombres encontrados y los no encontrados.
  for(i=0;i<=Object.keys(dicNombreSirai).length-1;i++){
		var siE = 0;
		var noE = 0;
		for(j=0;j<=Object.keys(dicNombresCuadros).length-1;j++){
			var textSirai = dicNombreSirai[ids1[i]];
			var textCuadros = dicNombresCuadros[ids2[j]];
			
			textSirai=textSirai.replace(/[ÀÁÂÃÄÅ]/g,"A");
			textSirai=textSirai.replace(/[ÈÉÊË]/g,"E");
		    textSirai=textSirai.replace(/[ÌÍÎÏ]/g,"I");
		    textSirai=textSirai.replace(/[ÒÓÔÕÖ]/g,"O");
		    textSirai=textSirai.replace(/[ÙÚÛÜ]/g,"U");
			
			textSirai=textSirai.replace(/[aàáâãäå]/g,"A");
			textSirai=textSirai.replace(/[eèéêë]/g,"E");
		    textSirai=textSirai.replace(/[iìíîï]/g,"I");
		    textSirai=textSirai.replace(/[oòóôõö]/g,"O");
		    textSirai=textSirai.replace(/[uùúûü]/g,"U");
			
			textCuadros=textCuadros.replace(/[ÀÁÂÃÄÅ]/g,"A");
			textCuadros=textCuadros.replace(/[ÈÉÊË]/g,"E");
		    textCuadros=textCuadros.replace(/[ÌÍÎÏ]/g,"I");
		    textCuadros=textCuadros.replace(/[ÒÓÔÕÖ]/g,"O");
		    textCuadros=textCuadros.replace(/[ÙÚÛÜ]/g,"U");
			
			textCuadros=textCuadros.replace(/[aàáâãäå]/g,"A");
			textCuadros=textCuadros.replace(/[eèéêë]/g,"E");
		    textCuadros=textCuadros.replace(/[iìíîï]/g,"I");
		    textCuadros=textCuadros.replace(/[oòóôõö]/g,"O");
		    textCuadros=textCuadros.replace(/[uùúûü]/g,"U");
			
			if(textSirai == textCuadros){
				siE++;
			}else{
				noE++;
			}
		}
		if(siE>0){
			totalEncontrados++;
			dicEncontrados[ids1[i]]=arrayNombreSirai[i];
			
		}else if(noE>0){
			totalNoEncontrados++;
			dicNoEncontrados[ids1[i]]=arrayNombreSirai[i];
		}
	}
	
  document.getElementById('sola').innerHTML = Object.keys(dicNoEncontrados).length + '  NOMBRES NO ENCONTRADOS';
  //var nomEncontrados="";
  //var nomNoEncontrados="";
 //for(key in dicEncontrados){
//	nomEncontrados += key + " " +  dicEncontrados[key]+"\n";
 
// }
 //for(key in dicNoEncontrados){
//	nomNoEncontrados += key + " " + dicNoEncontrados[key]+"\n";
// }
	if(totalNoEncontrados>0){
	  document.location.href = "#openModal"; 
	  abrirModal('openModal');
	  habilitarTerminar();
	  mostrar(val);
	}
	
    document.getElementById('campoCero').innerHTML = "";
    botonCero = document.createElement('input');
	botonCero.type = 'button';
	botonCero.id = 'btnCero';
	botonCero.value = 'AGREGAR ALUMNO CON NOTAS DE CERO';	
	botonCero.className = 'boton2p';
	botonCero.title = "Presione dos veces para agregar un alumno al campo \n'NOMBRES DE CUADROS DE NOTAS' con notas de cero.";
	botonCero.disabled = "true"
		 
	res1=document.getElementById('campoCero').appendChild(botonCero);
	if (botonCero.addEventListener)
	{
		botonCero.addEventListener('dblclick', function(){agregarAlumno(this);ar('0');habilitarTerminar();desactivarAgregarAlumno();calcularDatos();}, true);
	} else {
		botonCero.attachEvent('dblclick', agregarAlumno);
	}
}