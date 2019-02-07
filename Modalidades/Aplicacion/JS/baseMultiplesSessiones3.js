//Esta base de datos se usara para guardar todos los datos procesados en caso de comparar varias secciones
//Aca se almacenara el resultado de comparar todas las secciones y con otra funcion se filtraran para
//mostrar las secciones por separado
function crearBaseMultiplesSessiones3() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseSess3 = indexedDB.open("multSessiones3", 1);
                
    dataBaseSess3.onupgradeneeded = function (e) {
                
        var active = dataBaseSess3.result;                    
        var multSessiones3 = active.createObjectStore('multSessionesDatos3', { keyPath : 'ids', autoIncrement : true });
            multSessiones3.createIndex('multNies3', 'multNiesC3', { unique : false });
            multSessiones3.createIndex('multNombresSirai3', 'multNombresC3', { unique : false});
			
           
        };
                
        dataBaseSess3.onsuccess = function (e) {
           // alert('dataBaseSess3 creada 3');
                   
        };
                
        dataBaseSess3.onerror = function (e) {
            alert('Error al crear base multiples sessiones 3');
        };
			
}
function guardarHeadMultiplesSessiones3(nombresP,niesP) {
    borrarHeadMultiplesSessiones3();          
    var active = dataBaseSess3.result;
    var data = active.transaction(["multSessionesDatos3"], "readwrite");
    var object = data.objectStore("multSessionesDatos3");
                
    var request = object.put({
        multNiesC3 : niesP,
		multNombresC3 : nombresP,
		
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados 3");
    };
	cargarHeadMultiplesSessiones3();			
}
function borrarHeadMultiplesSessiones3(){
	var active = dataBaseSess3.result;
    var data = active.transaction(["multSessionesDatos3"], "readwrite");
    var object = data.objectStore("multSessionesDatos3");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadMultiplesSessiones3(){
	var active = dataBaseSess3.result;
    var data = active.transaction(["multSessionesDatos3"], "readonly");
    var object = data.objectStore("multSessionesDatos3");
                
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
			document.querySelector("#nies3").value =elements[key].multNiesC3;
			document.querySelector("#nombresSirai3").value =elements[key].multNombresC3;
		}
    };
	
}

function getNies3(){
	cargarHeadMultiplesSessiones3();
	var niesOcultos = document.getElementById('nies3').value;
	return niesOcultos;
}

function getNombresSirai3(){
	cargarHeadMultiplesSessiones3();
	var nombresCuadrosOcultos = document.getElementById('nombresSirai3').value;
	return nombresCuadrosOcultos;
}

/*
function poner3(){
		
	document.getElementById('lenguaje').value  = getNies3();
	document.getElementById('nombresCuadros').value  = getNombresSirai3();
}
*/