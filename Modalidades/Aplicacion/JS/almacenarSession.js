function crearBaseSession() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBase2 = indexedDB.open("baseSession", 1);
                
    dataBase2.onupgradeneeded = function (e) {
                
        var active = dataBase2.result;                    
        var baseSession = active.createObjectStore('baseAlmacenarSession', { keyPath : 'ids', autoIncrement : true });
            baseSession.createIndex('by_nomCuadrosNotas', 'nomCuadrosNotas', { unique : false });
            //********************************************************************************************************************
			baseSession.createIndex('by_matLenguajeM1', 'matLenguajeM1', { unique : false});
			baseSession.createIndex('by_matMatematicasM1', 'matMatematicasM1', { unique : false });
            baseSession.createIndex('by_matCienciasM1', 'matCienciasM1', { unique : false});
			baseSession.createIndex('by_matSocialesM1', 'matSocialesM1', { unique : false});
			baseSession.createIndex('by_matInglesM1', 'matInglesM1', { unique : false});
			
			baseSession.createIndex('by_matLenguajeM2', 'matLenguajeM2', { unique : false});
			baseSession.createIndex('by_matMatematicasM2', 'matMatematicasM2', { unique : false });
            baseSession.createIndex('by_matCienciasM2', 'matCienciasM2', { unique : false});
			baseSession.createIndex('by_matSocialesM2', 'matSocialesM2', { unique : false});
			baseSession.createIndex('by_matInglesM2', 'matInglesM2', { unique : false});
			
			baseSession.createIndex('by_matLenguajeM3', 'matLenguajeM3', { unique : false});
			baseSession.createIndex('by_matMatematicasM3', 'matMatematicasM3', { unique : false });
            baseSession.createIndex('by_matCienciasM3', 'matCienciasM3', { unique : false});
			baseSession.createIndex('by_matSocialesM3', 'matSocialesM3', { unique : false});
			baseSession.createIndex('by_matInglesM3', 'matInglesM3', { unique : false});
			
			baseSession.createIndex('by_matLenguajeM4', 'matLenguajeM4', { unique : false});
			baseSession.createIndex('by_matMatematicasM4', 'matMatematicasM4', { unique : false });
            baseSession.createIndex('by_matCienciasM4', 'matCienciasM4', { unique : false});
			baseSession.createIndex('by_matSocialesM4', 'matSocialesM4', { unique : false});
			baseSession.createIndex('by_matInglesM4', 'matInglesM4', { unique : false});
			
			baseSession.createIndex('by_matLenguajeM5', 'matLenguajeM5', { unique : false});
			baseSession.createIndex('by_matMatematicasM5', 'matMatematicasM5', { unique : false });
            baseSession.createIndex('by_matCienciasM5', 'matCienciasM5', { unique : false});
			baseSession.createIndex('by_matSocialesM5', 'matSocialesM5', { unique : false});
			baseSession.createIndex('by_matInglesM5', 'matInglesM5', { unique : false});
			
			//********************************************************************************************************************
			
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
		//********************************************************************************************************************
		matLenguajeM1 : document.querySelector("#lenguajeM1").value,
		matMatematicasM1 : document.querySelector("#matematicasM1").value,
		matCienciasM1 : document.querySelector("#cienciasM1").value,
		matSocialesM1 : document.querySelector("#socialesM1").value,
		matInglesM1 : document.querySelector("#inglesM1").value,
		
		matLenguajeM2 : document.querySelector("#lenguajeM2").value,
		matMatematicasM2 : document.querySelector("#matematicasM2").value,
		matCienciasM2 : document.querySelector("#cienciasM2").value,
		matSocialesM2 : document.querySelector("#socialesM2").value,
		matInglesM2 : document.querySelector("#inglesM2").value,
		
		matLenguajeM3 : document.querySelector("#lenguajeM3").value,
		matMatematicasM3 : document.querySelector("#matematicasM3").value,
		matCienciasM3 : document.querySelector("#cienciasM3").value,
		matSocialesM3 : document.querySelector("#socialesM3").value,
		matInglesM3 : document.querySelector("#inglesM3").value,
		
		matLenguajeM4 : document.querySelector("#lenguajeM4").value,
		matMatematicasM4 : document.querySelector("#matematicasM4").value,
		matCienciasM4 : document.querySelector("#cienciasM4").value,
		matSocialesM4 : document.querySelector("#socialesM4").value,
		matInglesM4 : document.querySelector("#inglesM4").value,
		
		matLenguajeM5 : document.querySelector("#lenguajeM5").value,
		matMatematicasM5 : document.querySelector("#matematicasM5").value,
		matCienciasM5 : document.querySelector("#cienciasM5").value,
		matSocialesM5 : document.querySelector("#socialesM5").value,
		matInglesM5 : document.querySelector("#inglesM5").value,
		//********************************************************************************************************************
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
			//********************************************************************************************************************
			document.querySelector("#lenguajeM1").value =elements[key].matLenguajeM1;
			document.querySelector("#matematicasM1").value =elements[key].matMatematicasM1;
			document.querySelector("#cienciasM1").value =elements[key].matCienciasM1;
			document.querySelector("#socialesM1").value =elements[key].matSocialesM1;
			document.querySelector("#inglesM1").value =elements[key].matInglesM1;
			
			document.querySelector("#lenguajeM2").value =elements[key].matLenguajeM2;
			document.querySelector("#matematicasM2").value =elements[key].matMatematicasM2;
			document.querySelector("#cienciasM2").value =elements[key].matCienciasM2;
			document.querySelector("#socialesM2").value =elements[key].matSocialesM2;
			document.querySelector("#inglesM2").value =elements[key].matInglesM2;
			
			document.querySelector("#lenguajeM3").value =elements[key].matLenguajeM3;
			document.querySelector("#matematicasM3").value =elements[key].matMatematicasM3;
			document.querySelector("#cienciasM3").value =elements[key].matCienciasM3;
			document.querySelector("#socialesM3").value =elements[key].matSocialesM3;
			document.querySelector("#inglesM3").value =elements[key].matInglesM3;
			
			document.querySelector("#lenguajeM4").value =elements[key].matLenguajeM4;
			document.querySelector("#matematicasM4").value =elements[key].matMatematicasM4;
			document.querySelector("#cienciasM4").value =elements[key].matCienciasM4;
			document.querySelector("#socialesM4").value =elements[key].matSocialesM4;
			document.querySelector("#inglesM4").value =elements[key].matInglesM4;
			
			document.querySelector("#lenguajeM5").value =elements[key].matLenguajeM5;
			document.querySelector("#matematicasM5").value =elements[key].matMatematicasM5;
			document.querySelector("#cienciasM5").value =elements[key].matCienciasM5;
			document.querySelector("#socialesM5").value =elements[key].matSocialesM5;
			document.querySelector("#inglesM5").value =elements[key].matInglesM5;
			//********************************************************************************************************************
		calcularDatos();
		}
    };
	
}