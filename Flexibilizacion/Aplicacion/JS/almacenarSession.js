function crearBaseSession() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBase2 = indexedDB.open("baseSession", 1);
                
    dataBase2.onupgradeneeded = function (e) {
                
        var active = dataBase2.result;                    
        var baseSession = active.createObjectStore('baseAlmacenarSession', { keyPath : 'ids', autoIncrement : true });
            baseSession.createIndex('by_nomCuadrosNotas', 'nomCuadrosNotas', { unique : false });
            baseSession.createIndex('by_matLenguaje', 'matLenguaje', { unique : false});
			baseSession.createIndex('by_matMatematicas', 'matMatematicas', { unique : false });
            baseSession.createIndex('by_matCiencias', 'matCiencias', { unique : false});
			baseSession.createIndex('by_matSociales', 'matSociales', { unique : false});
			baseSession.createIndex('by_matIngles', 'matIngles', { unique : false});
			
        };
                
        dataBase2.onsuccess = function (e) {
            //alert('dataBaseSession creada');
                   
        };
                
        dataBase2.onerror = function (e) {
            alert('Error al crear base temporal');
        };
			
}
function guardarBaseSession() {
    borrarBaseSession();          
    var active = dataBase2.result;
    var data = active.transaction(["baseAlmacenarSession"], "readwrite");
    var object = data.objectStore("baseAlmacenarSession");
                
    var request = object.put({
        nomCuadrosNotas : document.querySelector("#nombresCuadros").value,
		matLenguaje : document.querySelector("#lenguaje").value,
		matMatematicas : document.querySelector("#matematicas").value,
		matCiencias : document.querySelector("#ciencias").value,
		matSociales : document.querySelector("#sociales").value,
		matIngles : document.querySelector("#ingles").value,
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados");
    };
				
}
function borrarBaseSession(){
	var active = dataBase2.result;
    var data = active.transaction(["baseAlmacenarSession"], "readwrite");
    var object = data.objectStore("baseAlmacenarSession");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarBaseSession(){
	
	var active = dataBase2.result;
    var data = active.transaction(["baseAlmacenarSession"], "readonly");
    var object = data.objectStore("baseAlmacenarSession");
                
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
			document.querySelector("#nombresCuadros").value =elements[key].nomCuadrosNotas;
			document.querySelector("#lenguaje").value =elements[key].matLenguaje;
			document.querySelector("#matematicas").value =elements[key].matMatematicas;
			document.querySelector("#ciencias").value =elements[key].matCiencias;
			document.querySelector("#sociales").value =elements[key].matSociales;
			document.querySelector("#ingles").value =elements[key].matIngles;
		calcularDatos();
		}
    };
	
}