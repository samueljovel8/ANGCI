//Funciones necesarias para cargar los datos por defecto de cada formulario que se usa para establecer el encabezado en el archivo de excel generado para los diferentes niveles.


function cargarPorDefectoPrimerAnio()
{
	document.getElementById("epa2").value = "TUTORÍA PARA NIVELACIÓN ACADÉMICA";
	document.getElementById("epa5").value = "NIVELACIÓN ACADEMICA, SEDE EDÚCAME";
	document.getElementById("epa11").value = "CIDEP";
	document.getElementById("epa6").value = "1";
	document.getElementById("epa3").value = "2018";
}

function cargarPorDefectoBasica()
{
	document.getElementById("eb4").value = "INSTITUTO DE MODALIDADES FLEXIBLES DE EDUCACIÓN";
	document.getElementById("eb6").value = "NIVELACIÓN ACADEMICA, SEDE EDÚCAME";
	document.getElementById("eb7").value = "URBANIZACIÓN LA CIMA II, AVENIDA PRINCIPAL PASAJE 7-A";
	document.getElementById("eb10").value = "15-1489";
	document.getElementById("eb8").value = "San Salvador";
	document.getElementById("eb9").value = "San Salvador";
	document.getElementById("eb11").value = "24/11/2005";
	document.getElementById("eb3").value = "90049";
}

function cargarPorDefectoAlfabetizacion()
{
	document.getElementById("ea3").value = "2017";
	document.getElementById("ea4").value = "Agregar...";
	document.getElementById("ea5").value = "Agregar...";
	document.getElementById("ea6").value = "Agregar...";
}

function cargarDatosMunicipioEncabezado()
 {
	var select = document.getElementById('municipioCer');
	var values = select.value;
	var valuesVec = values.split("-");
	document.getElementById("cer1").value=valuesVec[0];
	document.getElementById("cer4").value=valuesVec[1];
	
}
function cargarDatosMunicipioAlfa()
 {
	var select = document.getElementById('municipioAlfa');
	var values = select.value;
	var valuesVec = values.split("-");
	//document.getElementById("epa4").value=valuesVec[0];
	document.getElementById("ea1").value=valuesVec[1];
	document.getElementById("ea2").value=valuesVec[2];
}
 function cargarDatosMunicipioBach()
 {
	var select = document.getElementById('municipio');
	var values = select.value;
	var valuesVec = values.split("-");
	document.getElementById("epa4").value=valuesVec[0];
	document.getElementById("epa8").value=valuesVec[1];
	document.getElementById("epa9").value=valuesVec[2];
}
 function cargarDatosMunicipioBasica()
 {
	var select = document.getElementById('municipioBasica');
	var values = select.value;
	var valuesVec = values.split("-");
	document.getElementById("eb5").value=valuesVec[0];
	//document.getElementById("eb9").value=valuesVec[1];
	//document.getElementById("eb8").value=valuesVec[2];
}