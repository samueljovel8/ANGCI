//Este archivo contiene las funciones necesarias para comparar los alumnos de la caja de texto de nombres cuadros y nombres sirai
//y tambien las funciones que reemplezan los alumnos en caso de encontrar un alumno mal escrito.


function mostrar(valM)
{
	limpiar('tablas');
	tablaBotonesSiraiNoEncontrados();
	tablaBotonesBusqueda();
	limpiar('tablaResultado');
	var botones=[];
	var nomNoEncontrados="";
	var i=1;
	for(key in dicNoEncontrados){
	
	nomNoEncontrados += key + " " + dicNoEncontrados[key] + "\n";
	
		 botones[i] = document.createElement('input');
		 botones[i].type = 'button';
		 //Se establece como id de cada boton la llave de cada registro del diccionario global.
		 botones[i].id = key;
		 //botones[i].value = values[i];
		 botones[i].value = dicNoEncontrados[key];
		 botones[i].title = "Presiona una vez para hacer una busqueda \nPresiona dos veces para agregar un alumno no encontrado";
		 botones[i].className = 'boton1';
		
		res=document.getElementById('B'+i).appendChild(botones[i]);
		//var valueBoton = document.getElementById('btn'+i).value;
		
		if (botones[i].addEventListener)
		{
			//botones[i].addEventListener('click', function(){mifuncion(this);}, true);
			//Se llama a la funcion mifuncion y se le envia de parametro los datos de el boton correspondiente a traves del parametro this.
			botones[i].addEventListener('click', function(){mifuncion(this,valM);limpiar('tablaResultado');desactivarAgregarAlumno();}, true);
		} else {
			botones[i].attachEvent('onclick', mifuncion);
		}
		
		if (botones[i].addEventListener)
		{
			//botones[i].addEventListener('click', function(){mifuncion(this);}, true);
			//Se llama a la funcion mifuncion y se le envia de parametro los datos de el boton correspondiente a traves del parametro this.
			botones[i].addEventListener('dblclick', function(){habilitarAgregarAlumno();}, true);
		} else {
			botones[i].attachEvent('dblclick', habilitarAgregarAlumno);
		}
	
	i++;
	}
	
}

//Se accede a cada elemento del diccionario general de forma dinamica por el parametro k, que contiene los datos de cada boton generado dinamicamente
	//e parametro k permite acceder a cada dato del boton poniendo .datoDeInteres (id, value, etc.)
	// k.id obtiene el id del objeto k, que es un boton generado dinamicamente.
    //alert("se ha realizado click " + " " + dicNoEncontrados[k.id]  );
function mifuncion(k,valF)
{ 
	nombreActual(k.value);
	document.getElementById('B0').innerHTML = "";
	var nombreTemp = dicNoEncontrados[k.id];
	var vecNombreTemp = nombreTemp.split(" ");
		
	var botones1 = [];
	for(i=0;i<=vecNombreTemp.length-1;i++){
		 	
	     botones1[i] = document.createElement('input');
		 botones1[i].type = 'button';
		 botones1[i].id = k.id;
		 botones1[i].value = vecNombreTemp[i];	
		 botones1[i].className = 'boton2';
		 botones1[i].title = "Presione para buscar";
		 
		 res1=document.getElementById('B0').appendChild(botones1[i]);
		if (botones1[i].addEventListener)
		{
			botones1[i].addEventListener('click', function(){busqueda(this,valF);}, true);
		} else {
			botones1[i].attachEvent('onclick', busqueda);
		}
	}
}

//Funcion que inserta registros al diccionario global y hace la comparacion de los nombres encontrados y los no encontrados en los diccionarios de cuadros
//de notas y los de nombres sirai.
function reemplazar(t,valR){
	var aidi=t.id;
	var vecId=aidi.split("-");
	var keySirai=vecId[0];
	var keyCuadross=vecId[1];
	
	var nombresCuadrosN=[];
	//alert(keySirai + '/' + keyCuadross);
	dicNombresCuadros[keyCuadross] = dicNoEncontrados[keySirai];
	
	var i=0;
	for(key in dicNombresCuadros)
	{
		nombresCuadrosN.push(dicNombresCuadros[key].replace(/,/g,"-")+"\n");
		if(nombresCuadrosN[i].length == 1){
			nombresCuadrosN.splice(i,1);
		}
	i++;
	}
	if(valR==0){
		document.getElementById('nombresCuadros').value = nombresCuadrosN;
		var nomCuadrosNCG=document.getElementById('nombresCuadros').value;
		var nomCuadrosNSC=nomCuadrosNCG.replace(/,/g,"");
		document.getElementById('nombresCuadros').value = nomCuadrosNSC;
		var nomCuadrosNCG1=document.getElementById('nombresCuadros').value;
		var nomCuadrosNSC1=nomCuadrosNCG1.replace(/-/g,",");
		document.getElementById('nombresCuadros').value = nomCuadrosNSC1;
	}else if(valR==1){
		document.getElementById('nombresSirai').value = nombresCuadrosN;
		var nomCuadrosNCG=document.getElementById('nombresSirai').value;
		var nomCuadrosNSC=nomCuadrosNCG.replace(/,/g,"");
		document.getElementById('nombresSirai').value = nomCuadrosNSC;
		var nomCuadrosNCG1=document.getElementById('nombresSirai').value;
		var nomCuadrosNSC1=nomCuadrosNCG1.replace(/-/g,",");
		document.getElementById('nombresSirai').value = nomCuadrosNSC1;
	}
	
}























function tablaBotonesSiraiNoEncontrados()
{
    var tabla = '<table border=1 width=100%>';	
    for(i=1;i<=Object.keys(dicNoEncontrados).length;i++)
    {
     tabla += '<tr><td id=B'+ i +'>	</td></tr>';
	 
	}
 	tabla += '</table>';
    document.getElementById('tablas').innerHTML = tabla;
	
}

function tablaBotonesBusqueda()
{
    var tabla1 = '<table border=0 HEIGHT=10% WIDTH=100%>';	
    for(i=0;i<=0;i++)
    {
     tabla1 += '<tr><td id=B0  valign="top" align="center">	</td></tr>';
	}
 	tabla1 += '</table>';
    document.getElementById('tablaBusqueda').innerHTML = tabla1;
	
}

function tablaDeResultadosBusqueda(m)
{
   	var tabla2 = '<table border=1 width=100%>';	
    for(i=0;i<=m;i++)
    {
     tabla2 += '<tr><td id=R'+ i +'></td></tr>';
	 
	}
	tabla2 += '</table>';
	document.getElementById('tablaResultado').innerHTML = tabla2;
}