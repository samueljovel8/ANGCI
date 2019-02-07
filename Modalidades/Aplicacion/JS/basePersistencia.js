function crearBaseHeadPersistencia() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseP = indexedDB.open("persistir", 1);
                
    dataBaseP.onupgradeneeded = function (e) {
                
        var active = dataBaseP.result;                    
        var persistir = active.createObjectStore('persistenciaDatos', { keyPath : 'ids', autoIncrement : true });
            persistir.createIndex('pNies', 'niesC', { unique : false });
            persistir.createIndex('pNombresSirai', 'nombresC', { unique : false});
			persistir.createIndex('pNombresCuadros', 'nombresCuadrosC', { unique : false});
			//*------------------------------------------------------------------------------------------------------------------
			persistir.createIndex('pNLenguajeM1', 'lenguajeCM1', { unique : false });
            persistir.createIndex('pNMatematicaM1', 'matematicaCM1', { unique : false});
			persistir.createIndex('pNCienciaM1', 'cienciaCM1', { unique : false });
            persistir.createIndex('pNSocialesM1', 'socialesCM1', { unique : false});
			persistir.createIndex('pNInglesM1', 'inglesCM1', { unique : false });
			
			persistir.createIndex('pNLenguajeM2', 'lenguajeCM2', { unique : false });
            persistir.createIndex('pNMatematicaM2', 'matematicaCM2', { unique : false});
			persistir.createIndex('pNCienciaM2', 'cienciaCM2', { unique : false });
            persistir.createIndex('pNSocialesM2', 'socialesCM2', { unique : false});
			persistir.createIndex('pNInglesM2', 'inglesCM2', { unique : false });
			
			persistir.createIndex('pNLenguajeM3', 'lenguajeCM3', { unique : false });
            persistir.createIndex('pNMatematicaM3', 'matematicaCM3', { unique : false});
			persistir.createIndex('pNCienciaM3', 'cienciaCM3', { unique : false });
            persistir.createIndex('pNSocialesM3', 'socialesCM3', { unique : false});
			persistir.createIndex('pNInglesM3', 'inglesCM3', { unique : false });
			
			persistir.createIndex('pNLenguajeM4', 'lenguajeCM4', { unique : false });
            persistir.createIndex('pNMatematicaM4', 'matematicaCM4', { unique : false});
			persistir.createIndex('pNCienciaM4', 'cienciaCM4', { unique : false });
            persistir.createIndex('pNSocialesM4', 'socialesCM4', { unique : false});
			persistir.createIndex('pNInglesM4', 'inglesCM4', { unique : false });
			
			persistir.createIndex('pNLenguajeM5', 'lenguajeCM5', { unique : false });
            persistir.createIndex('pNMatematicaM5', 'matematicaCM5', { unique : false});
			persistir.createIndex('pNCienciaM5', 'cienciaCM5', { unique : false });
            persistir.createIndex('pNSocialesM5', 'socialesCM5', { unique : false});
			persistir.createIndex('pNInglesM5', 'inglesCM5', { unique : false });
			
			persistir.createIndex('PruebaELenguaje', 'lenguajeCPE', { unique : false });
            persistir.createIndex('PruebaEMatematicas', 'matematicasCPE', { unique : false});
			persistir.createIndex('PruebaECiencias', 'cienciaCPE', { unique : false });
            persistir.createIndex('PruebaESociales', 'socialesCPE', { unique : false});
			persistir.createIndex('niesPE', 'niesCPE', { unique : false});
			
			
					
			//*------------------------------------------------------------------------------------------------------------------
           
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
		//*------------------------------------------------------------------------------------------------------------------
		lenguajeCM1 : document.querySelector("#lenguajeM1").value,
		matematicaCM1 : document.querySelector("#matematicasM1").value,
		cienciaCM1 : document.querySelector("#cienciasM1").value,
		socialesCM1 : document.querySelector("#socialesM1").value,
		inglesCM1 : document.querySelector("#inglesM1").value,
		
		lenguajeCM2 : document.querySelector("#lenguajeM2").value,
		matematicaCM2 : document.querySelector("#matematicasM2").value,
		cienciaCM2 : document.querySelector("#cienciasM2").value,
		socialesCM2 : document.querySelector("#socialesM2").value,
		inglesCM2 : document.querySelector("#inglesM2").value,
		
		lenguajeCM3 : document.querySelector("#lenguajeM3").value,
		matematicaCM3 : document.querySelector("#matematicasM3").value,
		cienciaCM3 : document.querySelector("#cienciasM3").value,
		socialesCM3 : document.querySelector("#socialesM3").value,
		inglesCM3 : document.querySelector("#inglesM3").value,
		
		lenguajeCM4 : document.querySelector("#lenguajeM4").value,
		matematicaCM4 : document.querySelector("#matematicasM4").value,
		cienciaCM4 : document.querySelector("#cienciasM4").value,
		socialesCM4 : document.querySelector("#socialesM4").value,
		inglesCM4 : document.querySelector("#inglesM4").value,
		
		lenguajeCM5 : document.querySelector("#lenguajeM5").value,
		matematicaCM5 : document.querySelector("#matematicasM5").value,
		cienciaCM5 : document.querySelector("#cienciasM5").value,
		socialesCM5 : document.querySelector("#socialesM5").value,
		inglesCM5 : document.querySelector("#inglesM5").value,
		
		lenguajeCPE : document.querySelector("#lenguajePE").value,
		matematicasCPE : document.querySelector("#matematicasPE").value,
		cienciaCPE : document.querySelector("#cienciasPE").value,
		socialesCPE : document.querySelector("#socialesPE").value,
		
		niesCPE : document.querySelector("#niesPE").value,
		
			
		//*------------------------------------------------------------------------------------------------------------------
		
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
			//*------------------------------------------------------------------------------------------------------------------
			document.querySelector("#lenguajeM1").value =elements[key].lenguajeCM1;
			document.querySelector("#matematicasM1").value =elements[key].matematicaCM1;
			document.querySelector("#cienciasM1").value =elements[key].cienciaCM1;
			document.querySelector("#socialesM1").value =elements[key].socialesCM1;
			document.querySelector("#inglesM1").value =elements[key].inglesCM1;
			
			document.querySelector("#lenguajeM2").value =elements[key].lenguajeCM2;
			document.querySelector("#matematicasM2").value =elements[key].matematicaCM2;
			document.querySelector("#cienciasM2").value =elements[key].cienciaCM2;
			document.querySelector("#socialesM2").value =elements[key].socialesCM2;
			document.querySelector("#inglesM2").value =elements[key].inglesCM2;
			
			document.querySelector("#lenguajeM3").value =elements[key].lenguajeCM3;
			document.querySelector("#matematicasM3").value =elements[key].matematicaCM3;
			document.querySelector("#cienciasM3").value =elements[key].cienciaCM3;
			document.querySelector("#socialesM3").value =elements[key].socialesCM3;
			document.querySelector("#inglesM3").value =elements[key].inglesCM3;
			
			document.querySelector("#lenguajeM4").value =elements[key].lenguajeCM4;
			document.querySelector("#matematicasM4").value =elements[key].matematicaCM4;
			document.querySelector("#cienciasM4").value =elements[key].cienciaCM4;
			document.querySelector("#socialesM4").value =elements[key].socialesCM4;
			document.querySelector("#inglesM4").value =elements[key].inglesCM4;
			
			document.querySelector("#lenguajeM5").value =elements[key].lenguajeCM5;
			document.querySelector("#matematicasM5").value =elements[key].matematicaCM5;
			document.querySelector("#cienciasM5").value =elements[key].cienciaCM5;
			document.querySelector("#socialesM5").value =elements[key].socialesCM5;
			document.querySelector("#inglesM5").value =elements[key].inglesCM5;
			
			document.querySelector("#lenguajePE").value =elements[key].lenguajeCPE;
			document.querySelector("#matematicasPE").value =elements[key].matematicasCPE;
			document.querySelector("#cienciasPE").value =elements[key].cienciaCPE;
			document.querySelector("#socialesPE").value =elements[key].socialesCPE;
			document.querySelector("#niesPE").value =elements[key].niesCPE;
			
			
			
			//*------------------------------------------------------------------------------------------------------------------
		calcularDatos();
		}
    };
	
}