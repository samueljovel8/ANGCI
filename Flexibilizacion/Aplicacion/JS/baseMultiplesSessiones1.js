//Esta base de datos se usara para guardar todos los datos procesados en caso de comparar varias secciones
//Aca se almacenara el resultado de comparar todas las secciones y con otra funcion se filtraran para
//mostrar las secciones por separado
function crearBaseMultiplesSessiones1() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBaseSess1 = indexedDB.open("multSessiones1", 1);
                
    dataBaseSess1.onupgradeneeded = function (e) {
                
        var active = dataBaseSess1.result;                    
        var multSessiones1 = active.createObjectStore('multSessionesDatos1', { keyPath : 'ids', autoIncrement : true });
            multSessiones1.createIndex('multNies1', 'multNiesC1', { unique : false });
            multSessiones1.createIndex('multNombresSirai1', 'multNombresC1', { unique : false});
			
           
        };
                
        dataBaseSess1.onsuccess = function (e) {
            //alert('dataBaseSess1 creada 1');
                   
        };
                
        dataBaseSess1.onerror = function (e) {
            alert('Error al crear base multiples sessiones 1');
        };
			
}
function guardarHeadMultiplesSessiones1(nombresP,niesP) {
    borrarHeadMultiplesSessiones1();          
    var active = dataBaseSess1.result;
    var data = active.transaction(["multSessionesDatos1"], "readwrite");
    var object = data.objectStore("multSessionesDatos1");
                
    var request = object.put({
        multNiesC1 : niesP,
		multNombresC1 : nombresP,
		
		
    });
                
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
				
    data.oncomplete = function (e) {
       //alert("Datos guardados 1");
    };
	cargarHeadMultiplesSessiones1();			
}
function borrarHeadMultiplesSessiones1(){
	var active = dataBaseSess1.result;
    var data = active.transaction(["multSessionesDatos1"], "readwrite");
    var object = data.objectStore("multSessionesDatos1");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadMultiplesSessiones1(){
	var active = dataBaseSess1.result;
    var data = active.transaction(["multSessionesDatos1"], "readonly");
    var object = data.objectStore("multSessionesDatos1");
                
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
			document.querySelector("#nies1").value =elements[key].multNiesC1;
			document.querySelector("#nombresSirai1").value =elements[key].multNombresC1;
			//alert(elements[key].multNombresC1);
		}
    };	
}


function getNies1(){
	cargarHeadMultiplesSessiones1();
	var niesOcultos = document.getElementById('nies1').value;
	return niesOcultos;
}

function getNombresSirai1(){
	cargarHeadMultiplesSessiones1();
	var nombresCuadrosOcultos = document.getElementById('nombresSirai1').value;
	return nombresCuadrosOcultos;
}
/*
function poner1(){
	document.getElementById('lenguaje').value  = getNies1();
	document.getElementById('nombresCuadros').value  = getNombresSirai1();
}
*/