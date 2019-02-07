function crearBaseHeadInstitucional() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBase1 = indexedDB.open("encabezadoPrimerAnio", 1);
                
    dataBase1.onupgradeneeded = function (e) {
                
        var active = dataBase1.result;                    
        var encabezadoPrimerAnio = active.createObjectStore('encabezadoPrimerAnioBach', { keyPath : 'ids', autoIncrement : true });
            encabezadoPrimerAnio.createIndex('by_modalidad', 'modalidad', { unique : false });
            encabezadoPrimerAnio.createIndex('by_sede', 'sede', { unique : false});
			encabezadoPrimerAnio.createIndex('by_departamento', 'departamento', { unique : false });
            encabezadoPrimerAnio.createIndex('by_coordinador', 'coordinador', { unique : false});
			encabezadoPrimerAnio.createIndex('by_implementadora', 'implementadora', { unique : false });
            encabezadoPrimerAnio.createIndex('by_municipio', 'municipio', { unique : false});
			encabezadoPrimerAnio.createIndex('by_grado', 'grado', { unique : false });
            encabezadoPrimerAnio.createIndex('by_seccion', 'seccion', { unique : false});
			
        };
                
        dataBase1.onsuccess = function (e) {
           // alert('Database1 creada');
                   
        };
                
        dataBase1.onerror = function (e) {
            alert('Error al crear base temporal');
        };
			
}
function guardarHeadInstitucional() {
    borrarHeadInstitucional();          
    var active = dataBase1.result;
    var data = active.transaction(["encabezadoPrimerAnioBach"], "readwrite");
    var object = data.objectStore("encabezadoPrimerAnioBach");
                
    var request = object.put({
        modalidad : document.querySelector("#eb2").value,
		sede : document.querySelector("#eb3").value,
		departamento : document.querySelector("#eb4").value,
		coordinador : document.querySelector("#eb5").value,
		implementadora : document.querySelector("#eb6").value,
		municipio : document.querySelector("#eb7").value,
		grado : document.querySelector("#eb8").value,
		seccion : document.querySelector("#eb9").value,
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados");
    };
				
}
function borrarHeadInstitucional(){
	var active = dataBase1.result;
    var data = active.transaction(["encabezadoPrimerAnioBach"], "readwrite");
    var object = data.objectStore("encabezadoPrimerAnioBach");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadInstitucional(){
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
			document.querySelector("#eb2").value =elements[key].modalidad;
			document.querySelector("#eb3").value =elements[key].sede;
			document.querySelector("#eb4").value =elements[key].departamento;
			document.querySelector("#eb5").value =elements[key].coordinador;
			document.querySelector("#eb6").value =elements[key].implementadora;
			document.querySelector("#eb7").value =elements[key].municipio;
			document.querySelector("#eb8").value =elements[key].grado;
			document.querySelector("#eb9").value =elements[key].seccion;
			
		}
    };
}