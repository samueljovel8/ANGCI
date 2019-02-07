function crearBaseTodos() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseT = indexedDB.open("baseTodos", 1);
                
    dataBaseT.onupgradeneeded = function (e) {
                
        var active = dataBaseT.result;                    
        var baseTodos = active.createObjectStore('baseAlmacenarTodos', { keyPath : 'ids', autoIncrement : true });
            baseTodos.createIndex('bynomCuadrosNotas', 'nomCuadrosNotas', { unique : false });
            //********************************************************************************************************************
			baseTodos.createIndex('bymatLenguajeM1', 'matLenguajeM1', { unique : false});
			baseTodos.createIndex('bymatMatematicasM1', 'matMatematicasM1', { unique : false });
            baseTodos.createIndex('bymatCienciasM1', 'matCienciasM1', { unique : false});
			baseTodos.createIndex('bymatSocialesM1', 'matSocialesM1', { unique : false});
			baseTodos.createIndex('bymatInglesM1', 'matInglesM1', { unique : false});
			
			baseTodos.createIndex('bymatLenguajeM2', 'matLenguajeM2', { unique : false});
			baseTodos.createIndex('bymatMatematicasM2', 'matMatematicasM2', { unique : false });
            baseTodos.createIndex('bymatCienciasM2', 'matCienciasM2', { unique : false});
			baseTodos.createIndex('bymatSocialesM2', 'matSocialesM2', { unique : false});
			baseTodos.createIndex('bymatInglesM2', 'matInglesM2', { unique : false});
			
			baseTodos.createIndex('bymatLenguajeM3', 'matLenguajeM3', { unique : false});
			baseTodos.createIndex('bymatMatematicasM3', 'matMatematicasM3', { unique : false });
            baseTodos.createIndex('bymatCienciasM3', 'matCienciasM3', { unique : false});
			baseTodos.createIndex('bymatSocialesM3', 'matSocialesM3', { unique : false});
			baseTodos.createIndex('bymatInglesM3', 'matInglesM3', { unique : false});
			
			baseTodos.createIndex('bymatLenguajeM4', 'matLenguajeM4', { unique : false});
			baseTodos.createIndex('bymatMatematicasM4', 'matMatematicasM4', { unique : false });
            baseTodos.createIndex('bymatCienciasM4', 'matCienciasM4', { unique : false});
			baseTodos.createIndex('bymatSocialesM4', 'matSocialesM4', { unique : false});
			baseTodos.createIndex('bymatInglesM4', 'matInglesM4', { unique : false});
			
			baseTodos.createIndex('bymatLenguajeM5', 'matLenguajeM5', { unique : false});
			baseTodos.createIndex('bymatMatematicasM5', 'matMatematicasM5', { unique : false });
            baseTodos.createIndex('bymatCienciasM5', 'matCienciasM5', { unique : false});
			baseTodos.createIndex('bymatSocialesM5', 'matSocialesM5', { unique : false});
			baseTodos.createIndex('bymatInglesM5', 'matInglesM5', { unique : false});
			
			//********************************************************************************************************************
			
        };
                
        dataBaseT.onsuccess = function (e) {
            //alert('dataBaseTodos creada');
                   
        };
                
        dataBaseT.onerror = function (e) {
            alert('Error al crear base todos');
        };
			
}
function guardarBaseTodos() {
    borrarBaseTodos();          
    var active = dataBaseT.result;
    var data = active.transaction(["baseAlmacenarTodos"], "readwrite");
    var object = data.objectStore("baseAlmacenarTodos");
                
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
function borrarBaseTodos(){
	var active = dataBaseT.result;
    var data = active.transaction(["baseAlmacenarTodos"], "readwrite");
    var object = data.objectStore("baseAlmacenarTodos");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarBaseTodos(){
	
	var active = dataBaseT.result;
    var data = active.transaction(["baseAlmacenarTodos"], "readonly");
    var object = data.objectStore("baseAlmacenarTodos");
                
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