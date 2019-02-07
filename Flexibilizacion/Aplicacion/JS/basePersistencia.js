function crearBaseHeadPersistencia() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseP = indexedDB.open("persistir", 1);
                
    dataBaseP.onupgradeneeded = function (e) {
                
        var active = dataBaseP.result;                    
        var persistir = active.createObjectStore('persistenciaDatos', { keyPath : 'ids', autoIncrement : true });
            persistir.createIndex('pNies', 'niesC', { unique : false });
            persistir.createIndex('pNombresSirai', 'nombresC', { unique : false});
			persistir.createIndex('pNombresCuadros', 'nombresCuadrosC', { unique : false});
			persistir.createIndex('pNLenguaje', 'lenguajeC', { unique : false });
            persistir.createIndex('pNMatematica', 'matematicaC', { unique : false});
			persistir.createIndex('pNCiencia', 'cienciaC', { unique : false });
            persistir.createIndex('pNSociales', 'socialesC', { unique : false});
			persistir.createIndex('pNIngles', 'inglesC', { unique : false });
           
        };
                
        dataBaseP.onsuccess = function (e) {
            //alert('DatabaseP creada');
                   
        };
                
        dataBaseP.onerror = function (e) {
            alert('Error al crear base persistencia');
        };
			
}
function guardarHeadPersistencia() {
	//alert("guardar head persistencia");
    borrarHeadPersistencia();          
    var active = dataBaseP.result;
    var data = active.transaction(["persistenciaDatos"], "readwrite");
    var object = data.objectStore("persistenciaDatos");
                
    var request = object.put({
        niesC : document.querySelector("#nies").value,
		nombresC : document.querySelector("#nombresSirai").value,
		nombresCuadrosC : document.querySelector("#nombresCuadros").value,
		lenguajeC : document.querySelector("#lenguaje").value,
		matematicaC : document.querySelector("#matematicas").value,
		cienciaC : document.querySelector("#ciencias").value,
		socialesC : document.querySelector("#sociales").value,
		inglesC : document.querySelector("#ingles").value,
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados");
    };
				
}
function borrarHeadPersistencia(){
	var active = dataBaseP.result;
    var data = active.transaction(["persistenciaDatos"], "readwrite");
    var object = data.objectStore("persistenciaDatos");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadPersistencia(){
	var active = dataBaseP.result;
    var data = active.transaction(["persistenciaDatos"], "readonly");
    var object = data.objectStore("persistenciaDatos");
                
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
			document.querySelector("#nies").value =elements[key].niesC;
			document.querySelector("#nombresSirai").value =elements[key].nombresC;
			document.querySelector("#nombresCuadros").value =elements[key].nombresCuadrosC;
			document.querySelector("#lenguaje").value =elements[key].lenguajeC;
			document.querySelector("#matematicas").value =elements[key].matematicaC;
			document.querySelector("#ciencias").value =elements[key].cienciaC;
			document.querySelector("#sociales").value =elements[key].socialesC;
			document.querySelector("#ingles").value =elements[key].inglesC;
		calcularDatos();
		}
    };
	
}