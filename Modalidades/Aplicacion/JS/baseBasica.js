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
           //alert('Database creada');
                   
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
        cuadroFinal : document.querySelector("#peb1").value,
		seccion : document.querySelector("#peb2").value,
		codigoCe : document.querySelector("#peb3").value,
		nomSede : document.querySelector("#peb4").value,
		codSede : document.querySelector("#peb5").value,
		sedeEducame : document.querySelector("#peb6").value,
		direccion : document.querySelector("#peb7").value,
		municipio : document.querySelector("#peb8").value,
		departamento : document.querySelector("#peb9").value,
		numAcuerdo : document.querySelector("#peb10").value,
		fecha : document.querySelector("#peb11").value
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
      alert("Datos guardados");
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
			document.querySelector("#peb1").value =elements[key].cuadroFinal;
			document.querySelector("#peb2").value =elements[key].seccion;
			document.querySelector("#peb3").value =elements[key].codigoCe;
			document.querySelector("#peb4").value =elements[key].nomSede;
			document.querySelector("#peb5").value =elements[key].codSede;
			document.querySelector("#peb6").value =elements[key].sedeEducame;
			document.querySelector("#peb7").value =elements[key].direccion;
			document.querySelector("#peb8").value =elements[key].municipio;
			document.querySelector("#peb9").value =elements[key].departamento;
			document.querySelector("#peb10").value =elements[key].numAcuerdo;
			document.querySelector("#peb11").value =elements[key].fecha;
		}
    };
}