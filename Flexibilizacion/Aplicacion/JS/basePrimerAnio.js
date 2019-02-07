function crearBaseHeadPrimerAnio() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBase1 = indexedDB.open("encabezadoPrimerAnio", 1);
                
    dataBase1.onupgradeneeded = function (e) {
                
        var active = dataBase1.result;                    
        var encabezadoPrimerAnio = active.createObjectStore('encabezadoPrimerAnioBach', { keyPath : 'ids', autoIncrement : true });
            encabezadoPrimerAnio.createIndex('by_modalidad', 'modalidad', { unique : false });
            encabezadoPrimerAnio.createIndex('by_anioLectivo', 'anioLectivo', { unique : false});
			encabezadoPrimerAnio.createIndex('by_codigo', 'codigo', { unique : false });
            encabezadoPrimerAnio.createIndex('by_sede', 'sede', { unique : false});
			encabezadoPrimerAnio.createIndex('by_grado', 'grado', { unique : false });
            encabezadoPrimerAnio.createIndex('by_seccion', 'seccion', { unique : false});
			encabezadoPrimerAnio.createIndex('by_departamento', 'departamento', { unique : false });
            encabezadoPrimerAnio.createIndex('by_municipio', 'municipio', { unique : false});
			encabezadoPrimerAnio.createIndex('by_coordinador', 'coordinador', { unique : false });
            encabezadoPrimerAnio.createIndex('by_implementadora', 'implementadora', { unique : false});
        };
                
        dataBase1.onsuccess = function (e) {
            //alert('Database1 creada');
                   
        };
                
        dataBase1.onerror = function (e) {
            alert('Error al crear base temporal');
        };
			
}
function guardarHeadPrimerAnio() {
    borrarHeadPrimerAnio();          
    var active = dataBase1.result;
    var data = active.transaction(["encabezadoPrimerAnioBach"], "readwrite");
    var object = data.objectStore("encabezadoPrimerAnioBach");
                
    var request = object.put({
        modalidad : document.querySelector("#epa2").value,
		anioLectivo : document.querySelector("#epa3").value,
		codigo : document.querySelector("#epa4").value,
		sede : document.querySelector("#epa5").value,
		grado : document.querySelector("#epa6").value,
		seccion : document.querySelector("#epa7").value,
		departamento : document.querySelector("#epa8").value,
		municipio : document.querySelector("#epa9").value,
		coordinador : document.querySelector("#epa10").value,
		implementadora : document.querySelector("#epa11").value
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados");
    };
				
}
function borrarHeadPrimerAnio(){
	var active = dataBase1.result;
    var data = active.transaction(["encabezadoPrimerAnioBach"], "readwrite");
    var object = data.objectStore("encabezadoPrimerAnioBach");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadPrimerAnio(){
	var active = dataBase1.result;
    var data = active.transaction(["encabezadoPrimerAnioBach"], "readonly");
    var object = data.objectStore("encabezadoPrimerAnioBach");
                
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
			document.querySelector("#epa2").value =elements[key].modalidad;
			document.querySelector("#epa3").value =elements[key].anioLectivo;
			document.querySelector("#epa4").value =elements[key].codigo;
			document.querySelector("#epa5").value =elements[key].sede;
			document.querySelector("#epa6").value =elements[key].grado;
			document.querySelector("#epa7").value =elements[key].seccion;
			document.querySelector("#epa8").value =elements[key].departamento;
			document.querySelector("#epa9").value =elements[key].municipio;
			document.querySelector("#epa10").value =elements[key].coordinador;
			document.querySelector("#epa11").value =elements[key].implementadora;
		}
    };
}