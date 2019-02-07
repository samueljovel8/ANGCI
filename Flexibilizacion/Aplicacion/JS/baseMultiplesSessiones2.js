//Esta base de datos se usara para guardar todos los datos procesados en caso de comparar varias secciones
//Aca se almacenara el resultado de comparar todas las secciones y con otra funcion se filtraran para
//mostrar las secciones por separado
function crearBaseMultiplesSessiones2() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseSess2 = indexedDB.open("multSessiones2", 1);
                
    dataBaseSess2.onupgradeneeded = function (e) {
                
        var active = dataBaseSess2.result;                    
        var multSessiones2 = active.createObjectStore('multSessionesDatos2', { keyPath : 'ids', autoIncrement : true });
            multSessiones2.createIndex('multNies2', 'multNiesC2', { unique : false });
            multSessiones2.createIndex('multNombresSirai2', 'multNombresC2', { unique : false});
			
           
        };
                
        dataBaseSess2.onsuccess = function (e) {
           // alert('dataBaseSess2 creada 2');
                   
        };
                
        dataBaseSess2.onerror = function (e) {
            alert('Error al crear base multiples sessiones 2');
        };
			
}
function guardarHeadMultiplesSessiones2(nombresP,niesP) {
    borrarHeadMultiplesSessiones2();          
    var active = dataBaseSess2.result;
    var data = active.transaction(["multSessionesDatos2"], "readwrite");
    var object = data.objectStore("multSessionesDatos2");
                
    var request = object.put({
        multNiesC2 : niesP,
		multNombresC2 : nombresP,
		
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
      // alert("Datos guardados 2");
    };
	
	cargarHeadMultiplesSessiones2();
}
function borrarHeadMultiplesSessiones2(){
	var active = dataBaseSess2.result;
    var data = active.transaction(["multSessionesDatos2"], "readwrite");
    var object = data.objectStore("multSessionesDatos2");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadMultiplesSessiones2(){
	var active = dataBaseSess2.result;
    var data = active.transaction(["multSessionesDatos2"], "readonly");
    var object = data.objectStore("multSessionesDatos2");
    var nombresSec = "0";    
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
			nombresSec = elements[key].multNombresC2;
			document.querySelector("#nies2").value =elements[key].multNiesC2;
			document.querySelector("#nombresSirai2").value =elements[key].multNombresC2;
		}
		
    };
}

function getNies2(){
	cargarHeadMultiplesSessiones2();
	var niesOcultos = document.getElementById('nies2').value;
	return niesOcultos;
}

function getNombresSirai2(){
	cargarHeadMultiplesSessiones2();
	var nombresCuadrosOcultos = document.getElementById('nombresSirai2').value;
	return nombresCuadrosOcultos;
}
/*
function poner2(){
		
	document.getElementById('lenguaje').value  = getNies2();
	document.getElementById('nombresCuadros').value  = getNombresSirai2();
}
*/
