function crearBaseHeadPersistenciaINI() {
    //var request = window.indexedDB.deleteDatabase(encabezadoPrimerAnio);     
		
    dataBasePINI = indexedDB.open("persistirINI", 1);
                
    dataBasePINI.onupgradeneeded = function (e) {
                
        var active = dataBasePINI.result;                    
        var persistir = active.createObjectStore('persistenciaDatosINI', { keyPath : 'ids', autoIncrement : true });
            persistir.createIndex('pNiesCuadros', 'niesCuadrosC', { unique : false});
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
			
			persistir.createIndex('PruebaELenguaje', 'lenguajePE', { unique : false });
            persistir.createIndex('PruebaEMatematicas', 'matematicasPE', { unique : false});
			persistir.createIndex('PruebaECiencias', 'cienciaPE', { unique : false });
            persistir.createIndex('PruebaESociales', 'socialesPE', { unique : false});
			
					
			//*------------------------------------------------------------------------------------------------------------------
           
        };
                
        dataBasePINI.onsuccess = function (e) {
            //alert('Database Iniciales creada');
                   
        };
                
        dataBasePINI.onerror = function (e) {
            alert('Error al crear base persistencia');
        };
			
}
function guardarHeadPersistenciaINI() {
	//alert("guardar head persistencia");
	if(kdabra==0){  
		borrarHeadPersistenciaINI();          
		var active = dataBasePINI.result;
		var data = active.transaction(["persistenciaDatosINI"], "readwrite");
		var object = data.objectStore("persistenciaDatosINI");
		 
		var request = object.put({
		   
			niesCuadrosC : document.querySelector("#niesPE").value,
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
			
			lenguajePE : document.querySelector("#lenguajePE").value,
			matematicasPE : document.querySelector("#matematicasPE").value,
			cienciaPE : document.querySelector("#cienciasPE").value,
			socialesPE : document.querySelector("#socialesPE").value,
			//*------------------------------------------------------------------------------------------------------------------
				
		
			
			
		});
		
				 
		request.onerror = function (e) {
			alert(request.error.name + '\n\n' + request.error.message);
		};
					
		data.oncomplete = function (e) {
		   //alert("Datos guardados en base de iniciales");
		   kdabra=1;
		};
		 
	}
}
function borrarHeadPersistenciaINI(){
	var active = dataBasePINI.result;
    var data = active.transaction(["persistenciaDatosINI"], "readwrite");
    var object = data.objectStore("persistenciaDatosINI");

	var objectStoreRequest = object.clear();
	objectStoreRequest.onsuccess = function(event) {
		// report the success of our request
		//alert("Eliminada");
	};
};

function cargarHeadPersistenciaINI(){
	var active = dataBasePINI.result;
    var data = active.transaction(["persistenciaDatosINI"], "readonly");
    var object = data.objectStore("persistenciaDatosINI");
                
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
			
			localStorage.setItem('niesCompletosVec', JSON.stringify(elements[key].niesCuadrosC));
			localStorage.setItem('nombresCompletosVec', JSON.stringify(elements[key].nombresCuadrosC));
			
			localStorage.setItem('lenguajeCompletoVec1', JSON.stringify(elements[key].lenguajeCM1));
			localStorage.setItem('lenguajeCompletoVec2', JSON.stringify(elements[key].lenguajeCM2));
			localStorage.setItem('lenguajeCompletoVec3', JSON.stringify(elements[key].lenguajeCM3));
			localStorage.setItem('lenguajeCompletoVec4', JSON.stringify(elements[key].lenguajeCM4));
			localStorage.setItem('lenguajeCompletoVec5', JSON.stringify(elements[key].lenguajeCM5));
			
			localStorage.setItem('matematicasCompletoVec1', JSON.stringify(elements[key].matematicaCM1));
			localStorage.setItem('matematicasCompletoVec2', JSON.stringify(elements[key].matematicaCM2));
			localStorage.setItem('matematicasCompletoVec3', JSON.stringify(elements[key].matematicaCM3));
			localStorage.setItem('matematicasCompletoVec4', JSON.stringify(elements[key].matematicaCM4));
			localStorage.setItem('matematicasCompletoVec5', JSON.stringify(elements[key].matematicaCM5));
			
			localStorage.setItem('cienciasCompletoVec1', JSON.stringify(elements[key].cienciaCM1));
			localStorage.setItem('cienciasCompletoVec2', JSON.stringify(elements[key].cienciaCM2));
			localStorage.setItem('cienciasCompletoVec3', JSON.stringify(elements[key].cienciaCM3));
			localStorage.setItem('cienciasCompletoVec4', JSON.stringify(elements[key].cienciaCM4));
			localStorage.setItem('cienciasCompletoVec5', JSON.stringify(elements[key].cienciaCM5));
			
			localStorage.setItem('socialesCompletoVec1', JSON.stringify(elements[key].socialesCM1));
			localStorage.setItem('socialesCompletoVec2', JSON.stringify(elements[key].socialesCM2));
			localStorage.setItem('socialesCompletoVec3', JSON.stringify(elements[key].socialesCM3));
			localStorage.setItem('socialesCompletoVec4', JSON.stringify(elements[key].socialesCM4));
			localStorage.setItem('socialesCompletoVec5', JSON.stringify(elements[key].socialesCM5));
			
			localStorage.setItem('inglesCompletoVec1', JSON.stringify(elements[key].inglesCM1));
			localStorage.setItem('inglesCompletoVec2', JSON.stringify(elements[key].inglesCM2));
			localStorage.setItem('inglesCompletoVec3', JSON.stringify(elements[key].inglesCM3));
			localStorage.setItem('inglesCompletoVec4', JSON.stringify(elements[key].inglesCM4));
			localStorage.setItem('inglesCompletoVec5', JSON.stringify(elements[key].inglesCM5));
			
			localStorage.setItem('lenguajeCompletoPe', JSON.stringify(elements[key].lenguajePE));
			localStorage.setItem('matematicasCompletoPe', JSON.stringify(elements[key].matematicasPE));
			localStorage.setItem('cienciasCompletoPe', JSON.stringify(elements[key].cienciaPE));
			localStorage.setItem('inglesCompletoPe', JSON.stringify(elements[key].socialesPE));
			//*------------------------------------------------------------------------------------------------------------------
			
			//document.querySelector("#fNombresC").value =elements[key].nombresCuadrosC;
			//*------------------------------------------------------------------------------------------------------------------
			
			/*
			document.querySelector("#fLenguaje1C").value =elements[key].lenguajeCM1;
			document.querySelector("#fLenguaje2C").value =elements[key].matematicaCM1;
			document.querySelector("#fLenguaje3C").value =elements[key].cienciaCM1;
			document.querySelector("#fLenguaje4C").value =elements[key].socialesCM1;
			document.querySelector("#fLenguaje5C").value =elements[key].inglesCM1;
			
			document.querySelector("#fMatematicas1C").value =elements[key].lenguajeCM2;
			document.querySelector("#fMatematicas2C").value =elements[key].matematicaCM2;
			document.querySelector("#fMatematicas3C").value =elements[key].cienciaCM2;
			document.querySelector("#fMatematicas4C").value =elements[key].socialesCM2;
			document.querySelector("#fMatematicas5C").value =elements[key].inglesCM2;
			
			document.querySelector("#fCiencias1C").value =elements[key].lenguajeCM3;
			document.querySelector("#fCiencias2C").value =elements[key].matematicaCM3;
			document.querySelector("#fCiencias3C").value =elements[key].cienciaCM3;
			document.querySelector("#fCiencias4C").value =elements[key].socialesCM3;
			document.querySelector("#fCiencias5C").value =elements[key].inglesCM3;
			
			document.querySelector("#fSociales1C").value =elements[key].lenguajeCM4;
			document.querySelector("#fSociales2C").value =elements[key].matematicaCM4;
			document.querySelector("#fSociales3C").value =elements[key].cienciaCM4;
			document.querySelector("#fSociales4C").value =elements[key].socialesCM4;
			document.querySelector("#fSociales5C").value =elements[key].inglesCM4;
			
			document.querySelector("#fIngles1C").value =elements[key].lenguajeCM5;
			document.querySelector("#fIngles2C").value =elements[key].matematicaCM5;
			document.querySelector("#fIngles3C").value =elements[key].cienciaCM5;
			document.querySelector("#fIngles4C").value =elements[key].socialesCM5;
			document.querySelector("#fIngles5C").value =elements[key].inglesCM5;
			
			document.querySelector("#fPruebaExCL").value =elements[key].lenguajePE;
			document.querySelector("#fPruebaExCM").value =elements[key].matematicasPE;
			document.querySelector("#fPruebaExCC").value =elements[key].cienciaPE;
			document.querySelector("#fPruebaExCS").value =elements[key].socialesPE;
			
			var pruebaLeng = localStorage.getItem("nombresCompletosVec");
			var arrayLenguajeM1 = JSON.parse(pruebaLeng);
			var arrayLenguajeM1Sep = arrayLenguajeM1.split("\n");
			document.getElementById('fLenguaje1C').innerHTML = arrayLenguajeM1Sep[0];
			alert(arrayLenguajeM1);
			*/
			
			//*------------------------------------------------------------------------------------------------------------------
		//calcularDatos();
		}
    };
	
}

































