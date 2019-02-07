function crearBaseHeadBasica() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBase = indexedDB.open("encabezadoBasica", 1);
                
    dataBase.onupgradeneeded = function (e) {
                
        var active = dataBase.result;                    
        var encabezadoBasica = active.createObjectStore('encabezadoBaseBasica', { keyPath : 'id', autoIncrement : true });
            encabezadoBasica.createIndex('by_cuadroFinal', 'cuadroFinal', { unique : false });
            encabezadoBasica.createIndex('by_seccion', 'seccion', { unique : false});
			encabezadoBasica.createIndex('by_codigoCe', 'codigoCe', { unique : false });
            encabezadoBasica.createIndex('by_nomSede', 'nomSede', { unique : false});
			encabezadoBasica.createIndex('by_codSede', 'codSede', { unique : false });
			encabezadoBasica.createIndex('by_sedeEducame', 'sedeEducame', { unique : false });
            encabezadoBasica.createIndex('by_direccion', 'direccion', { unique : false});
			encabezadoBasica.createIndex('by_municipio', 'municipio', { unique : false });
            encabezadoBasica.createIndex('by_departamento', 'departamento', { unique : false});
			encabezadoBasica.createIndex('by_numAcuerdo', 'numAcuerdo', { unique : false });
            encabezadoBasica.createIndex('by_fecha', 'fecha', { unique : false});
        };
                
        dataBase.onsuccess = function (e) {
           // alert('Database creada');
                   
        };
                
        dataBase.onerror = function (e) {
            alert('Error al crear base temporal');
        };
			
}
function guardarHeadBasica() {
    borrarHeadBasica();          
    var active = dataBase.result;
    var data = active.transaction(["encabezadoBaseBasica"], "readwrite");
    var object = data.objectStore("encabezadoBaseBasica");
                
    var request = object.put({
        cuadroFinal : document.querySelector("#eb1").value,
		seccion : document.querySelector("#eb2").value,
		codigoCe : document.querySelector("#eb3").value,
		nomSede : document.querySelector("#eb4").value,
		codSede : document.querySelector("#eb5").value,
		sedeEducame : document.querySelector("#eb6").value,
		direccion : document.querySelector("#eb7").value,
		municipio : document.querySelector("#eb8").value,
		departamento : document.querySelector("#eb9").value,
		numAcuerdo : document.querySelector("#eb10").value,
		fecha : document.querySelector("#eb11").value
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
      //alert("Datos guardados");
    };
				
}
function borrarHeadBasica(){
	var active = dataBase.result;
    var data = active.transaction(["encabezadoBaseBasica"], "readwrite");
    var object = data.objectStore("encabezadoBaseBasica");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadBasica(){
	var active = dataBase.result;
    var data = active.transaction(["encabezadoBaseBasica"], "readonly");
    var object = data.objectStore("encabezadoBaseBasica");
                
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
			document.querySelector("#eb1").value =elements[key].cuadroFinal;
			document.querySelector("#eb2").value =elements[key].seccion;
			document.querySelector("#eb3").value =elements[key].codigoCe;
			document.querySelector("#eb4").value =elements[key].nomSede;
			document.querySelector("#eb5").value =elements[key].codSede;
			document.querySelector("#eb6").value =elements[key].sedeEducame;
			document.querySelector("#eb7").value =elements[key].direccion;
			document.querySelector("#eb8").value =elements[key].municipio;
			document.querySelector("#eb9").value =elements[key].departamento;
			document.querySelector("#eb10").value =elements[key].numAcuerdo;
			document.querySelector("#eb11").value =elements[key].fecha;
		}
    };
}