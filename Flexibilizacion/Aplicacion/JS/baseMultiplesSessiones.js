//Esta base de datos se usara para guardar todos los datos procesados en caso de comparar varias secciones
//Aca se almacenara el resultado de comparar todas las secciones y con otra funcion se filtraran para
//mostrar las secciones por separado
function crearBaseMultiplesSessiones() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseSess = indexedDB.open("multSessiones", 1);
                
    dataBaseSess.onupgradeneeded = function (e) {
                
        var active = dataBaseSess.result;                    
        var multSessiones = active.createObjectStore('multSessionesDatos', { keyPath : 'ids', autoIncrement : true });
            multSessiones.createIndex('multNies', 'multNiesC', { unique : false });
            multSessiones.createIndex('multNombresSirai', 'multNombresC', { unique : false});
			multSessiones.createIndex('multNombresCuadros', 'multNombresCuadrosC', { unique : false});
			multSessiones.createIndex('multNLenguaje', 'multLenguajeC', { unique : false });
            multSessiones.createIndex('multNMatematica', 'multMatematicaC', { unique : false});
			multSessiones.createIndex('multNCiencia', 'multCienciaC', { unique : false });
            multSessiones.createIndex('multNSociales', 'multSocialesC', { unique : false});
			multSessiones.createIndex('multNIngles', 'multInglesC', { unique : false });
           
        };
                
        dataBaseSess.onsuccess = function (e) {
            //alert('dataBaseSess creada');
                   
        };
                
        dataBaseSess.onerror = function (e) {
            alert('Error al crear base multiples sessiones');
        };
			
}
function guardarHeadMultiplesSessiones() {
	//alert("base multiples sesiones");
    borrarHeadMultiplesSessiones();          
    var active = dataBaseSess.result;
    var data = active.transaction(["multSessionesDatos"], "readwrite");
    var object = data.objectStore("multSessionesDatos");
                
    var request = object.put({
        multNiesC : document.querySelector("#nies").value,
		multNombresC : document.querySelector("#nombresSirai").value,
		multNombresCuadrosC : document.querySelector("#nombresCuadros").value,
		multLenguajeC : document.querySelector("#lenguaje").value,
		multMatematicaC : document.querySelector("#matematicas").value,
		multCienciaC : document.querySelector("#ciencias").value,
		multSocialesC : document.querySelector("#sociales").value,
		multInglesC : document.querySelector("#ingles").value,
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados");
    };
	cargarHeadMultiplesSessiones();			
}
function borrarHeadMultiplesSessiones(){
	var active = dataBaseSess.result;
    var data = active.transaction(["multSessionesDatos"], "readwrite");
    var object = data.objectStore("multSessionesDatos");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadMultiplesSessiones(){
	var active = dataBaseSess.result;
    var data = active.transaction(["multSessionesDatos"], "readonly");
    var object = data.objectStore("multSessionesDatos");
                
    var elements = [];
    object.openCursor().onsuccess = function (e) {
        var result = e.target.result;
                    
        if (result === null) {
            return;
        }
                    
		elements.push(result.value);
		result.continue();
    };
                
    data.oncomplete = function() {
		for (var key in elements) {
			document.querySelector("#nies0").value =elements[key].multNiesC;
			document.querySelector("#nombresSirai0").value =elements[key].multNombresC;
			document.querySelector("#nombresCuadros0").value =elements[key].multNombresCuadrosC;
			document.querySelector("#lenguaje0").value =elements[key].multLenguajeC;
			document.querySelector("#matematicas0").value =elements[key].multMatematicaC;
			document.querySelector("#ciencias0").value =elements[key].multCienciaC;
			document.querySelector("#sociales0").value =elements[key].multSocialesC;
			document.querySelector("#ingles0").value =elements[key].multInglesC;
		//siguienteSeccion(tt);
		}
    };
}


function getNies0(){
	cargarHeadMultiplesSessiones();
	var niesOcultos = document.getElementById('nies0').value;
	return niesOcultos;
}

function getNombresSirai0(){
	cargarHeadMultiplesSessiones();
	var nombresCuadrosOcultos = document.getElementById('nombresSirai0').value;
	return nombresCuadrosOcultos;
}
function getNombresCuadros0(){
	cargarHeadMultiplesSessiones();
	var niesOcultos = document.getElementById('nombresCuadros0').value;
	return niesOcultos;
}

function getLenguaje0(){
	cargarHeadMultiplesSessiones();
	var lenguajeOcultos = document.getElementById('lenguaje0').value;
	return lenguajeOcultos;
}
function getMatematicas0(){
	cargarHeadMultiplesSessiones();
	var matematicasOcultos = document.getElementById('matematicas0').value;
	return matematicasOcultos;
}

function getCiencias0(){
	cargarHeadMultiplesSessiones();
	var cienciasOcultos = document.getElementById('ciencias0').value;
	return cienciasOcultos;
}
function getSociales0(){
	cargarHeadMultiplesSessiones();
	var socialesOcultos = document.getElementById('sociales0').value;
	return socialesOcultos;
}

function getIngles0(){
	cargarHeadMultiplesSessiones();
	var inglesOcultos = document.getElementById('ingles0').value;
	return inglesOcultos;
}
/*

function poner0(){
	document.getElementById('nies').value  = getNies0();
	document.getElementById('nombresSirai').value  = getNombresSirai0();
	document.getElementById('nombresCuadros').value  = getNombresCuadros0();
	document.getElementById('lenguaje').value  = getLenguaje0();
	document.getElementById('matematicas').value  = getMatematicas0();
	document.getElementById('ciencias').value  = getCiencias0();
	document.getElementById('sociales').value  = getSociales0();
	document.getElementById('ingles').value  = getIngles0();
}
*/


















