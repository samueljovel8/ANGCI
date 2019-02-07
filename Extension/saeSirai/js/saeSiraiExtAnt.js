
if (document.location.toString().indexOf("acreditacion") != -1) {
	insert_yt();
}
if (document.location.toString().indexOf("nie-mvn") != -1) {
	obtenerNombresSae();
}


//insert_yt();

//document.onclick = conocerEvento;
document.onmousedown = conocerEvento;
//document.onmouseup = conocerEvento;
//document.ondblclick = conocerEvento;
//document.onkeydown = conocerEvento;
//document.onmouseover = conocerEvento;

function conocerEvento(e) {
	if (!e) var e = window.event;
		elemento(e);
		//alert( e.type);
}


function obtenerNombresSae()
{
	var tabla2 = '<center><table border="0" width=90%>';	
	for(i=0;i<=0;i++)
	{
		tabla2 += '<tr><td id=S'+ i +' style="text-align:center"></td></tr>';
	}
	tabla2 += '</table></center>';
	$(tabla2).insertBefore("#layout");
	
	btnCopiarNombresSae = document.createElement('input');
		 btnCopiarNombresSae.type = 'button';
		 //Se establece como id de cada boton la llave de cada registro del diccionario global.
		 btnCopiarNombresSae.id = "btnSae";
		 //botones[i].value = values[i];
		 btnCopiarNombresSae.value = "EXTRAER NOMBRES";
		 btnCopiarNombresSae.title = "Presione para copiar nombres y NIES";
		 btnCopiarNombresSae.className = 'boton1';
	
	if (btnCopiarNombresSae.addEventListener)
		{
			btnCopiarNombresSae.addEventListener('click', function(){nombresSae(this);obtenerNombres('tablaNombresSae')}, true);
		} else {
			btnCopiarNombresSae.attachEvent('onclick', nombresSae, obtenerNombres);
		}
		
	
	
	elem = document.createElement('textarea');
	elem.cols = 28;
	elem.rows = 1;
	elem.id = "tablaNombresSae";
	elem.className = 'estilotextarea';
	elem.style.display = 'none';
	
	
	
	document.getElementById('S0').appendChild(elem);
	document.getElementById('S0').appendChild(btnCopiarNombresSae);
	document.getElementById('tablaNombresSae').readOnly  = true;
}

function nombresSae()
{
	var totalSae = document.getElementById("frmPrincipal:tblCatalogoSecciones1_data").getElementsByTagName("tr").length;
	
	
	
	/* Parte de codigo que extrae los ids adecuados para extraer los nombres y NIES  */
	var totalSaeCeldas = document.getElementById("frmPrincipal:tblCatalogoSecciones1_data").getElementsByTagName("td");
	var text0=totalSaeCeldas[0].innerHTML;
	var text0Vec = text0.split("\"");
	var text0VecId = text0Vec[1].split(":"); 
	var idnie = text0VecId[3];
	
	var text1=totalSaeCeldas[1].innerHTML;
	var text1Vec = text1.split("\"");
	var text1VecId = text1Vec[1].split(":"); 
	var idapellidos = text1VecId[3];
	
	var text2=totalSaeCeldas[2].innerHTML;
	var text2Vec = text2.split("\"");
	var text2VecId = text2Vec[1].split(":"); 
	var idnombres = text2VecId[3];
	
	/* ................................................................................. */
	
	var niesSae=[];
	var nombresCompletosSae=[];
	for(i=0;i<=totalSae-1;i++)
	{ //frmPrincipal:tblCatalogoSecciones1:0:j_idt81
		//if(document.getElementById("frmPrincipal:tblCatalogoSecciones1:0:j_idt79")){
			//alert("Id es 79");
			var idNie0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNie1 = ":"+idnie;
			var idNieTotal = idNie0 + i + idNie1;
			var nie = document.getElementById(idNieTotal).innerHTML;
			niesSae.push(nie+">");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt83		
			var idApe0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idApe1 = ":"+idapellidos;
			var idApeTotal = idApe0 + i + idApe1;
			var apellido = document.getElementById(idApeTotal).innerHTML;
			//apellidos.push(apellido+"\n");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt85
			var idNom0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNom1 = ":"+idnombres;
			var idNomTotal = idNom0 + i + idNom1;
			var nombre = document.getElementById(idNomTotal).innerHTML;
			//nombres.push(nombre+"\n");
			
			nombresCompletosSae.push(apellido+"-"+" "+nombre+">");
		
	//}
	
	document.getElementById("tablaNombresSae").value = nombresCompletosSae + "<<<<<<<<"+ niesSae + "<<<<<<<<";
	var nombres1 = document.getElementById("tablaNombresSae").value;
	var nombres2 = nombres1.replace(/,/g,"");
	var nombres3 = nombres2.replace(/\s-/g,"-");
	var nombres4 = nombres3.replace(/-/g,",");
	
	
	document.getElementById("tablaNombresSae").value = nombres4;
}

/* Funcion antigua para extraer los nombres y NIES*/
/*

function nombresSae()
{
	var totalSae = document.getElementById("frmPrincipal:tblCatalogoSecciones1_data").getElementsByTagName("tr").length;
	//alert(totalSae);
	
	
	var niesSae=[];
	var nombresCompletosSae=[];
	for(i=0;i<=totalSae-1;i++)
	{ //frmPrincipal:tblCatalogoSecciones1:0:j_idt81
		if(document.getElementById("frmPrincipal:tblCatalogoSecciones1:0:j_idt79")){
			//alert("Id es 79");
			var idNie0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNie1 = ":j_idt79";
			var idNieTotal = idNie0 + i + idNie1;
			var nie = document.getElementById(idNieTotal).innerHTML;
			niesSae.push(nie+">");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt83		
			var idApe0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idApe1 = ":j_idt81";
			var idApeTotal = idApe0 + i + idApe1;
			var apellido = document.getElementById(idApeTotal).innerHTML;
			//apellidos.push(apellido+"\n");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt85
			var idNom0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNom1 = ":j_idt83";
			var idNomTotal = idNom0 + i + idNom1;
			var nombre = document.getElementById(idNomTotal).innerHTML;
			//nombres.push(nombre+"\n");
			
			nombresCompletosSae.push(apellido+"-"+" "+nombre+">");
	
			
		}else if(document.getElementById("frmPrincipal:tblCatalogoSecciones1:0:j_idt81")){
			//alert("Id es 81");
			
			var idNie0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNie1 = ":j_idt81";
			var idNieTotal = idNie0 + i + idNie1;
			var nie = document.getElementById(idNieTotal).innerHTML;
			niesSae.push(nie+">");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt83		
			var idApe0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idApe1 = ":j_idt83";
			var idApeTotal = idApe0 + i + idApe1;
			var apellido = document.getElementById(idApeTotal).innerHTML;
			//apellidos.push(apellido+"\n");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt85
			var idNom0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNom1 = ":j_idt85";
			var idNomTotal = idNom0 + i + idNom1;
			var nombre = document.getElementById(idNomTotal).innerHTML;
			//nombres.push(nombre+"\n");
			
			nombresCompletosSae.push(apellido+"-"+" "+nombre+">");
			
		}else if(document.getElementById("frmPrincipal:tblCatalogoSecciones1:0:j_idt82")){
			//alert("Id es 81");
			
			var idNie0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNie1 = ":j_idt82";
			var idNieTotal = idNie0 + i + idNie1;
			var nie = document.getElementById(idNieTotal).innerHTML;
			niesSae.push(nie+">");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt82		
			var idApe0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idApe1 = ":j_idt84";
			var idApeTotal = idApe0 + i + idApe1;
			var apellido = document.getElementById(idApeTotal).innerHTML;
			//apellidos.push(apellido+"\n");
			
			//frmPrincipal:tblCatalogoSecciones1:0:j_idt86
			var idNom0 = "frmPrincipal:tblCatalogoSecciones1:";
			var idNom1 = ":j_idt86";
			var idNomTotal = idNom0 + i + idNom1;
			var nombre = document.getElementById(idNomTotal).innerHTML;
			//nombres.push(nombre+"\n");
			
			nombresCompletosSae.push(apellido+"-"+" "+nombre+">");
			
		}else{
			
			alert("Error, no se puede extraer el elemento, contacte con el administrador");
		}
		
	}
	
	document.getElementById("tablaNombresSae").value = nombresCompletosSae + "<<<<<<<<"+ niesSae + "<<<<<<<<";
	var nombres1 = document.getElementById("tablaNombresSae").value;
	var nombres2 = nombres1.replace(/,/g,"");
	var nombres3 = nombres2.replace(/\s-/g,"-");
	var nombres4 = nombres3.replace(/-/g,",");
	
	
	document.getElementById("tablaNombresSae").value = nombres4;
	*/
}
function elemento(e){
	var tag="";
    if (e.srcElement)
	{
	  tag = e.srcElement.id;
	}
    else if (e.target)
	{	
  	  tag = e.target.id;
	}
	if (tag == "contenidoForm:j_id138"){
		obtenerPlanEstudio();
		//alert("El elemento selecionado ha sido " + tag);
	}
}	

function obtenerNombres(id_elemento){
	var aux = document.createElement('input');
	aux.setAttribute('value', document.getElementById(id_elemento).value);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	var aviso = document.createElement('div');
	aviso.setAttribute('id', 'aviso');
	aviso.style.cssText = 'position:fixed; z-index: 9999999; top: 50%;left:50%;margin-left: -70px;padding: 20px; background: #3B0B17;border-radius: 8px;font-family: lucida calligraphy; color: white';
	aviso.innerHTML = 'COPIADO';
	
	document.body.appendChild(aviso);
	document.load = setTimeout('document.body.removeChild(aviso)', 1200);
	
	document.body.removeChild(aux);
	//document.getElementById(id_boton).disabled=false;
}

function confirmarNotas(mensaje){
	
	var aviso = document.createElement('div');
	aviso.setAttribute('id', 'aviso');
	aviso.style.cssText = 'position:fixed; z-index: 9999999; top: 50%;left:50%;margin-left: -100px;padding: 20px; background: #3B0B17;border-radius: 8px;font-family: lucida calligraphy; color: white';
	//aviso.innerHTML = mensaje;
	
	aviso.innerHTML = mensaje;
				
	
	document.body.appendChild(aviso);
	document.load = setTimeout('document.body.removeChild(aviso)', 3200);
	
	//document.body.removeChild(aux);
	//document.getElementById(id_boton).disabled=false;
}



function insert_yt() {
	
	
		var tabla2 = '<center><table border="0" width=90%>';	
		for(i=0;i<=0;i++)
		{
		 tabla2 += '<tr><td id=R'+ i +' style="text-align:right"></td><td id=R0'+ i +' style="text-align:center"></td></tr>';
		 
		}
		tabla2 += '</table></center>';
		
		$(tabla2).insertBefore("#tablamayor");
		
	
	
	
	
	var pruebaB = document.createElement("button");
	//pruebaB.setAttribute("style","text-decoration: none; padding: 1px; width:35%; font-family: times new roman; font-weight: 200; font-size: 12px; font-style: times new roman; color: #EFF5FB; background-color: #3B0B17; border-radius: 45px; border: 3px double #3B0B17;");
	pruebaB.setAttribute("id","btn1");
	pruebaB.setAttribute("class","boton1");
	
	if (pruebaB.addEventListener)
		{
			pruebaB.addEventListener('click', function(){procesarNotas(this);}, true);
		} else {
			pruebaB.attachEvent('onclick', procesarNotas);
		}
	
	var pruebaC = document.createElement("span");
	pruebaC.setAttribute("class","yt-uix-button-content");
	var textoC = document.createTextNode("CARGAR NOTAS");
	pruebaC.appendChild(textoC);
	
	pruebaB.appendChild(pruebaC);
	
	
		pruebaD = document.createElement('input');
		 pruebaD.type = 'button';
		 //Se establece como id de cada boton la llave de cada registro del diccionario global.
		 pruebaD.id = "btn2";
		 //botones[i].value = values[i];
		 pruebaD.value = "SELECCION PLAN DE ESTUDIOS";
		 pruebaD.title = "Seleccione seccion y plan de estudios";
		 pruebaD.className = 'boton2';
	
	if (pruebaD.addEventListener)
		{
			pruebaD.addEventListener('click', function(){cargarNotasMateria(this);}, true);
		} else {
			pruebaD.attachEvent('onclick', cargarNotasMateria);
		}
	
	
	
	var btnCopiarNombres = document.createElement("button");
	//btnCopiarNombres.setAttribute("style","text-decoration: none; padding: 1px; width:35%; font-family: times new roman; font-weight: 200; font-size: 12px; font-style: times new roman; color: #EFF5FB; background-color: #3B0B17; border-radius: 45px; border: 3px double #3B0B17;");
	btnCopiarNombres.setAttribute("id","btn0");
	btnCopiarNombres.setAttribute("class","boton1");
	
	if (btnCopiarNombres.addEventListener)
		{
			btnCopiarNombres.addEventListener('click', function(){mifuncion();obtenerNombres('tabla1');}, true);
		} else {
			btnCopiarNombres.attachEvent('onclick', obtenerNombres);
		}
	
	var tbtnCopiarNombres = document.createElement("span");
	tbtnCopiarNombres.setAttribute("class","yt-uix-button-content");
	var textoBtn = document.createTextNode("EXTRAER NOMBRES");
	tbtnCopiarNombres.appendChild(textoBtn);
	
	btnCopiarNombres.appendChild(tbtnCopiarNombres);
	/*
	$(pruebaB).insertAfter("#tablamayor");
	$(pruebaD).insertAfter("#tablamayor");
	$(btnCopiarNombres).insertAfter("#tablamayor");
	*/
	
	document.getElementById('R0').appendChild(btnCopiarNombres);
	
	document.getElementById('R0').appendChild(pruebaD);
	
	notas = document.createElement('textarea');
	notas.cols = 25;
	notas.rows = 1;
	notas.id = "tablaNotas";
	notas.className = 'estilotextarea';
	notas.placeholder = 'Ingrese las notas aqui...';
	
	
	elem = document.createElement('textarea');
	elem.cols = 28;
	elem.rows = 1;
	elem.id = "tabla1";
	elem.className = 'estilotextarea';
	elem.style.display = 'none';
	//*********************************************************************
	lenM1 = document.createElement('textarea');
	lenM1.cols = 28;
	lenM1.rows = 1;
	lenM1.id = "tablaLenguajeM1";
	lenM1.className = 'estilotextarea';
	lenM1.style.display = 'none';
	
	lenM2 = document.createElement('textarea');
	lenM2.cols = 28;
	lenM2.rows = 1;
	lenM2.id = "tablaLenguajeM2";
	lenM2.className = 'estilotextarea';
	lenM2.style.display = 'none';
	
	lenM3 = document.createElement('textarea');
	lenM3.cols = 28;
	lenM3.rows = 1;
	lenM3.id = "tablaLenguajeM3";
	lenM3.className = 'estilotextarea';
	lenM3.style.display = 'none';
	
	lenM4 = document.createElement('textarea');
	lenM4.cols = 28;
	lenM4.rows = 1;
	lenM4.id = "tablaLenguajeM4";
	lenM4.className = 'estilotextarea';
	lenM4.style.display = 'none';
	
	lenM5 = document.createElement('textarea');
	lenM5.cols = 28;
	lenM5.rows = 1;
	lenM5.id = "tablaLenguajeM5";
	lenM5.className = 'estilotextarea';
	lenM5.style.display = 'none';
	//*********************************************************************
	matM1 = document.createElement('textarea');
	matM1.cols = 28;
	matM1.rows = 1;
	matM1.id = "tablaMateM1";
	matM1.className = 'estilotextarea';
	matM1.style.display = 'none';
	
	matM2 = document.createElement('textarea');
	matM2.cols = 28;
	matM2.rows = 1;
	matM2.id = "tablaMateM2";
	matM2.className = 'estilotextarea';
	matM2.style.display = 'none';
	
	matM3 = document.createElement('textarea');
	matM3.cols = 28;
	matM3.rows = 1;
	matM3.id = "tablaMateM3";
	matM3.className = 'estilotextarea';
	matM3.style.display = 'none';
	
	matM4 = document.createElement('textarea');
	matM4.cols = 28;
	matM4.rows = 1;
	matM4.id = "tablaMateM4";
	matM4.className = 'estilotextarea';
	matM4.style.display = 'none';
	
	matM5 = document.createElement('textarea');
	matM5.cols = 28;
	matM5.rows = 1;
	matM5.id = "tablaMateM5";
	matM5.className = 'estilotextarea';
	matM5.style.display = 'none';
	//*********************************************************************
	cienM1 = document.createElement('textarea');
	cienM1.cols = 28;
	cienM1.rows = 1;
	cienM1.id = "tablaCienciasM1";
	cienM1.className = 'estilotextarea';
	cienM1.style.display = 'none';
	
	cienM2 = document.createElement('textarea');
	cienM2.cols = 28;
	cienM2.rows = 1;
	cienM2.id = "tablaCienciasM2";
	cienM2.className = 'estilotextarea';
	cienM2.style.display = 'none';
	
	cienM3 = document.createElement('textarea');
	cienM3.cols = 28;
	cienM3.rows = 1;
	cienM3.id = "tablaCienciasM3";
	cienM3.className = 'estilotextarea';
	cienM3.style.display = 'none';
	
	cienM4 = document.createElement('textarea');
	cienM4.cols = 28;
	cienM4.rows = 1;
	cienM4.id = "tablaCienciasM4";
	cienM4.className = 'estilotextarea';
	cienM4.style.display = 'none';
	
	cienM5 = document.createElement('textarea');
	cienM5.cols = 28;
	cienM5.rows = 1;
	cienM5.id = "tablaCienciasM5";
	cienM5.className = 'estilotextarea';
	cienM5.style.display = 'none';
	//*********************************************************************
	sociaM1 = document.createElement('textarea');
	sociaM1.cols = 28;
	sociaM1.rows = 1;
	sociaM1.id = "tablaSocialesM1";
	sociaM1.className = 'estilotextarea';
	sociaM1.style.display = 'none';
	
	sociaM2 = document.createElement('textarea');
	sociaM2.cols = 28;
	sociaM2.rows = 1;
	sociaM2.id = "tablaSocialesM2";
	sociaM2.className = 'estilotextarea';
	sociaM2.style.display = 'none';
	
	sociaM3 = document.createElement('textarea');
	sociaM3.cols = 28;
	sociaM3.rows = 1;
	sociaM3.id = "tablaSocialesM3";
	sociaM3.className = 'estilotextarea';
	sociaM3.style.display = 'none';
	
	sociaM4 = document.createElement('textarea');
	sociaM4.cols = 28;
	sociaM4.rows = 1;
	sociaM4.id = "tablaSocialesM4";
	sociaM4.className = 'estilotextarea';
	sociaM4.style.display = 'none';
	
	sociaM5 = document.createElement('textarea');
	sociaM5.cols = 28;
	sociaM5.rows = 1;
	sociaM5.id = "tablaSocialesM5";
	sociaM5.className = 'estilotextarea';
	sociaM5.style.display = 'none';
	//*********************************************************************
	ingM1 = document.createElement('textarea');
	ingM1.cols = 28;
	ingM1.rows = 1;
	ingM1.id = "tablaInglesM1";
	ingM1.className = 'estilotextarea';
	ingM1.style.display = 'none';
	
	ingM2 = document.createElement('textarea');
	ingM2.cols = 28;
	ingM2.rows = 1;
	ingM2.id = "tablaInglesM2";
	ingM2.className = 'estilotextarea';
	ingM2.style.display = 'none';
	
	ingM3 = document.createElement('textarea');
	ingM3.cols = 28;
	ingM3.rows = 1;
	ingM3.id = "tablaInglesM3";
	ingM3.className = 'estilotextarea';
	ingM3.style.display = 'none';
	
	ingM4 = document.createElement('textarea');
	ingM4.cols = 28;
	ingM4.rows = 1;
	ingM4.id = "tablaInglesM4";
	ingM4.className = 'estilotextarea';
	ingM4.style.display = 'none';
	
	ingM5 = document.createElement('textarea');
	ingM5.cols = 28;
	ingM5.rows = 1;
	ingM5.id = "tablaInglesM5";
	ingM5.className = 'estilotextarea';
	ingM5.style.display = 'none';
	//*********************************************************************
	
	
	//Tablas para flexi
	//*********************************************************************
	len = document.createElement('textarea');
	len.cols = 28;
	len.rows = 1;
	len.id = "tablaLenguaje";
	len.className = 'estilotextarea';
	len.style.display = 'none';
	
	mat = document.createElement('textarea');
	mat.cols = 28;
	mat.rows = 1;
	mat.id = "tablaMate";
	mat.className = 'estilotextarea';
	mat.style.display = 'none';
	
	cien = document.createElement('textarea');
	cien.cols = 28;
	cien.rows = 1;
	cien.id = "tablaCiencias";
	cien.className = 'estilotextarea';
	cien.style.display = 'none';
	
	socia = document.createElement('textarea');
	socia.cols = 28;
	socia.rows = 1;
	socia.id = "tablaSociales";
	socia.className = 'estilotextarea';
	socia.style.display = 'none';
	
	ing = document.createElement('textarea');
	ing.cols = 28;
	ing.rows = 1;
	ing.id = "tablaIngles";
	ing.className = 'estilotextarea';
	ing.style.display = 'none';
	//*********************************************************************
	$(elem).insertAfter("#tablamayor");
	
	$(ing).insertAfter("#tablamayor");
	$(socia).insertAfter("#tablamayor");
	$(cien).insertAfter("#tablamayor");
	$(mat).insertAfter("#tablamayor");
	$(len).insertAfter("#tablamayor");
	//*********************************************************************
	//Modalidades flexibles
	
	
	
	$(ingM5).insertAfter("#tablamayor");
	$(ingM4).insertAfter("#tablamayor");
	$(ingM3).insertAfter("#tablamayor");
	$(ingM2).insertAfter("#tablamayor");
	$(ingM1).insertAfter("#tablamayor");
	
	$(sociaM5).insertAfter("#tablamayor");
	$(sociaM4).insertAfter("#tablamayor");
	$(sociaM3).insertAfter("#tablamayor");
	$(sociaM2).insertAfter("#tablamayor");
	$(sociaM1).insertAfter("#tablamayor");
	
	$(cienM5).insertAfter("#tablamayor");
	$(cienM4).insertAfter("#tablamayor");
	$(cienM3).insertAfter("#tablamayor");
	$(cienM2).insertAfter("#tablamayor");
	$(cienM1).insertAfter("#tablamayor");
	
	$(matM5).insertAfter("#tablamayor");
	$(matM4).insertAfter("#tablamayor");
	$(matM3).insertAfter("#tablamayor");
	$(matM2).insertAfter("#tablamayor");
	$(matM1).insertAfter("#tablamayor");
	
	$(lenM5).insertAfter("#tablamayor");
	$(lenM4).insertAfter("#tablamayor");
	$(lenM3).insertAfter("#tablamayor");
	$(lenM2).insertAfter("#tablamayor");
	$(lenM1).insertAfter("#tablamayor");
	
	document.getElementById('R00').appendChild(notas);
	document.getElementById('R00').appendChild(pruebaB);
	
	document.getElementById("tabla1").readOnly = "true";
	
	document.getElementById("tablaLenguajeM1").readOnly = "true";
	document.getElementById("tablaMateM1").readOnly = "true";
	document.getElementById("tablaCienciasM1").readOnly = "true";
	document.getElementById("tablaSocialesM1").readOnly = "true";
	document.getElementById("tablaInglesM1").readOnly = "true";
	
	document.getElementById("tablaLenguajeM2").readOnly = "true";
	document.getElementById("tablaMateM2").readOnly = "true";
	document.getElementById("tablaCienciasM2").readOnly = "true";
	document.getElementById("tablaSocialesM2").readOnly = "true";
	document.getElementById("tablaInglesM2").readOnly = "true";
	
	document.getElementById("tablaLenguajeM3").readOnly = "true";
	document.getElementById("tablaMateM3").readOnly = "true";
	document.getElementById("tablaCienciasM3").readOnly = "true";
	document.getElementById("tablaSocialesM3").readOnly = "true";
	document.getElementById("tablaInglesM3").readOnly = "true";
	
	document.getElementById("tablaLenguajeM4").readOnly = "true";
	document.getElementById("tablaMateM4").readOnly = "true";
	document.getElementById("tablaCienciasM4").readOnly = "true";
	document.getElementById("tablaSocialesM4").readOnly = "true";
	document.getElementById("tablaInglesM4").readOnly = "true";
	
	document.getElementById("tablaLenguajeM5").readOnly = "true";
	document.getElementById("tablaMateM5").readOnly = "true";
	document.getElementById("tablaCienciasM5").readOnly = "true";
	document.getElementById("tablaSocialesM5").readOnly = "true";
	document.getElementById("tablaInglesM5").readOnly = "true";
	//$(notas).insertAfter("#tablamayor");
	
	
	//Flexi
	document.getElementById("tablaLenguaje").readOnly = "true";
	document.getElementById("tablaMate").readOnly = "true";
	document.getElementById("tablaCiencias").readOnly = "true";
	document.getElementById("tablaSociales").readOnly = "true";
	document.getElementById("tablaIngles").readOnly = "true";
}



function mifuncion()
{
	var total=document.getElementById("contenidoForm:itemList").rows.length;
	var nies=[];
	var nombresCompletos=[];
	for(i=0;i<=total-2;i++)
	{ 
		var idNie0 = "contenidoForm:itemList:";
		var idNie1 = ":j_id147";
		var idNieTotal = idNie0 + i + idNie1;
		var nie = document.getElementById(idNieTotal).innerHTML;
		nies.push(nie+">");
				
		var idApe0 = "contenidoForm:itemList:";
		var idApe1 = ":j_id153";
		var idApeTotal = idApe0 + i + idApe1;
		var apellido = document.getElementById(idApeTotal).innerHTML;
				
		var idNom0 = "contenidoForm:itemList:";
		var idNom1 = ":j_id156";
		var idNomTotal = idNom0 + i + idNom1;
		var nombre = document.getElementById(idNomTotal).innerHTML;
		
		nombresCompletos.push(apellido+"-"+" "+nombre+">");
		
	}

	document.getElementById("tabla1").value=nombresCompletos + "<<<<<<<<"+ nies+ "<<<<<<<<";
	var nombres1 = document.getElementById("tabla1").value;
	var nombres2 = nombres1.replace(/,/g,"");
	var nombres3 = nombres2.replace(/\s-/g,"-");
	var nombres4 = nombres3.replace(/-/g,",");
	
	document.getElementById("tabla1").value = nombres4;
		
}

//si la variable flexiMod es 0, se cargaran las notas como en modalidades flexibles
//si la variable flexiMod es 1, se cargaran las notas como en flexibilidad de la educacion
var flexiMod = 2;
function procesarNotas(){
	//tablaNotas
	var notasDesorden = document.getElementById("tablaNotas").value;
	var notasDesordenVec = notasDesorden.split("<<<<<");
	//alert(notasDesordenVec.length);
	
	if(notasDesordenVec.length==26){
		flexiMod = 0;
		document.getElementById("tablaLenguajeM1").value = notasDesordenVec[1];
		document.getElementById("tablaMateM1").value = notasDesordenVec[2];
		document.getElementById("tablaCienciasM1").value = notasDesordenVec[3];
		document.getElementById("tablaSocialesM1").value = notasDesordenVec[4];
		document.getElementById("tablaInglesM1").value = notasDesordenVec[5];
		
		document.getElementById("tablaLenguajeM2").value = notasDesordenVec[6];
		document.getElementById("tablaMateM2").value = notasDesordenVec[7];
		document.getElementById("tablaCienciasM2").value = notasDesordenVec[8];
		document.getElementById("tablaSocialesM2").value = notasDesordenVec[9];
		document.getElementById("tablaInglesM2").value = notasDesordenVec[10];
		
		document.getElementById("tablaLenguajeM3").value = notasDesordenVec[11];
		document.getElementById("tablaMateM3").value = notasDesordenVec[12];
		document.getElementById("tablaCienciasM3").value = notasDesordenVec[13];
		document.getElementById("tablaSocialesM3").value = notasDesordenVec[14];
		document.getElementById("tablaInglesM3").value = notasDesordenVec[15];
		
		document.getElementById("tablaLenguajeM4").value = notasDesordenVec[16];
		document.getElementById("tablaMateM4").value = notasDesordenVec[17];
		document.getElementById("tablaCienciasM4").value = notasDesordenVec[18];
		document.getElementById("tablaSocialesM4").value = notasDesordenVec[19];
		document.getElementById("tablaInglesM4").value = notasDesordenVec[20];
		
		document.getElementById("tablaLenguajeM5").value = notasDesordenVec[21];
		document.getElementById("tablaMateM5").value = notasDesordenVec[22];
		document.getElementById("tablaCienciasM5").value = notasDesordenVec[23];
		document.getElementById("tablaSocialesM5").value = notasDesordenVec[24];
		document.getElementById("tablaInglesM5").value = notasDesordenVec[25];
		
		confirmarNotas("Notas cargadas para Modalidades Flexibles");
	}else if(notasDesordenVec.length==6){
		flexiMod = 1;
		document.getElementById("tablaLenguaje").value = notasDesordenVec[1];
		document.getElementById("tablaMate").value = notasDesordenVec[2];
		document.getElementById("tablaCiencias").value = notasDesordenVec[3];
		document.getElementById("tablaSociales").value = notasDesordenVec[4];
		document.getElementById("tablaIngles").value = notasDesordenVec[5];
		confirmarNotas("Notas cargadas para Flexibilizacion de la educación");
		
	}else if(notasDesordenVec.length != 26 || notasDesordenVec.length != 6){
		//alert("Error al trasladar notas");
		confirmarNotas("Error al trasladar notas");
	}
	
}

function obtenerPlanEstudio()
{
	if(flexiMod==0){ //Modalidades
	
		var planActual = document.getElementById("contenidoForm:plan");
		var valuesPlan = planActual.options[planActual.selectedIndex].text;
		
		var periodoActual = document.getElementById("contenidoForm:periodoEducame");
		var valuesPeriodo = periodoActual.options[periodoActual.selectedIndex].text;
		//alert(valuesPeriodo); 
		document.getElementById("btn2").value = "Seleccionar Materia";
		if(valuesPlan == 'LENGUAJE Y LITERATURA')
		{
			if(valuesPeriodo == 'I PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE - PERIODO 1";
			}
			if(valuesPeriodo == 'II PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE - PERIODO 2";
			}
			if(valuesPeriodo == 'III PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE - PERIODO 3";
			}
			if(valuesPeriodo == 'IV PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE - PERIODO 4";
			}
			if(valuesPeriodo == 'V PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE - PERIODO 5";
			}
		}	
		
		if(valuesPlan == 'MATEMÁTICA')
		{
			if(valuesPeriodo == 'I PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMÁTICA - PERIODO 1";
			}
			if(valuesPeriodo == 'II PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMÁTICA - PERIODO 2";
			}
			if(valuesPeriodo == 'III PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMÁTICA - PERIODO 3";
			}
			if(valuesPeriodo == 'IV PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMÁTICA - PERIODO 4";
			}
			if(valuesPeriodo == 'V PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMÁTICA - PERIODO 5";
			}
		}
		
		if(valuesPlan == 'CIENCIAS NATURALES')
		{
			if(valuesPeriodo == 'I PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS - PERIODO 1";
			}
			if(valuesPeriodo == 'II PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS - PERIODO 2";
			}
			if(valuesPeriodo == 'III PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS - PERIODO 3";
			}
			if(valuesPeriodo == 'IV PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS - PERIODO 4";
			}
			if(valuesPeriodo == 'V PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS - PERIODO 5";
			}
		}
		
		if(valuesPlan == 'ESTUDIOS SOCIALES Y CIVICA')
		{
			if(valuesPeriodo == 'I PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES - PERIODO 1";
			}
			if(valuesPeriodo == 'II PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES - PERIODO 2";
			}
			if(valuesPeriodo == 'III PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES - PERIODO 3";
			}
			if(valuesPeriodo == 'IV PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES - PERIODO 4";
			}
			if(valuesPeriodo == 'V PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES - PERIODO 5";
			}
		}
		
		if(valuesPlan == 'IDIOMA EXTRANJERO')
		{
			if(valuesPeriodo == 'I PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLÉS - PERIODO 1";
			}
			if(valuesPeriodo == 'II PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLÉS - PERIODO 2";
			}
			if(valuesPeriodo == 'III PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLÉS - PERIODO 3";
			}
			if(valuesPeriodo == 'IV PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLÉS - PERIODO 4";
			}
			if(valuesPeriodo == 'V PERIODO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLÉS - PERIODO 5";
			}
		}
	}else if(flexiMod==1){ //Flexi
		
		var planActual = document.getElementById("contenidoForm:plan");
		var valuesPlan = planActual.options[planActual.selectedIndex].text;
		
		
			if(valuesPlan == 'LENGUAJE Y LITERATURA'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE";
			}
			if(valuesPlan == 'MATEMÁTICA'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMATICAS";
			}
			if(valuesPlan == 'CIENCIAS NATURALES'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS";
			}
			if(valuesPlan == 'ESTUDIOS SOCIALES Y CIVICA'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES";
			}
			if(valuesPlan == 'IDIOMA EXTRANJERO'){
				document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLES";
			}
				
	}
	
}

function cargarNotasMateria(){
	
	if(flexiMod==0){ //Modalidades 
		var notas="";
		var textoBoton = document.getElementById("btn2").value;
		//**********************************************************************************
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE - PERIODO 1')
		{
			var notas = document.getElementById("tablaLenguajeM1").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE - PERIODO 2')
		{
			var notas = document.getElementById("tablaLenguajeM2").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE - PERIODO 3')
		{
			var notas = document.getElementById("tablaLenguajeM3").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE - PERIODO 4')
		{
			var notas = document.getElementById("tablaLenguajeM4").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE - PERIODO 5')
		{
			var notas = document.getElementById("tablaLenguajeM5").value;
		}
		//**********************************************************************************
		if(textoBoton == 'INGRESAR NOTAS DE MATEMÁTICA - PERIODO 1')
		{
			var notas = document.getElementById("tablaMateM1").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE MATEMÁTICA - PERIODO 2')
		{
			var notas = document.getElementById("tablaMateM2").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE MATEMÁTICA - PERIODO 3')
		{
			var notas = document.getElementById("tablaMateM3").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE MATEMÁTICA - PERIODO 4')
		{
			var notas = document.getElementById("tablaMateM4").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE MATEMÁTICA - PERIODO 5')
		{
			var notas = document.getElementById("tablaMateM5").value;
		}	
		//**********************************************************************************
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS - PERIODO 1')
		{
			var notas = document.getElementById("tablaCienciasM1").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS - PERIODO 2')
		{
			var notas = document.getElementById("tablaCienciasM2").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS - PERIODO 3')
		{
			var notas = document.getElementById("tablaCienciasM3").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS - PERIODO 4')
		{
			var notas = document.getElementById("tablaCienciasM4").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS - PERIODO 5')
		{
			var notas = document.getElementById("tablaCienciasM5").value;
		}	
		//**********************************************************************************
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES - PERIODO 1')
		{
			var notas = document.getElementById("tablaSocialesM1").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES - PERIODO 2')
		{
			var notas = document.getElementById("tablaSocialesM2").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES - PERIODO 3')
		{
			var notas = document.getElementById("tablaSocialesM3").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES - PERIODO 4')
		{
			var notas = document.getElementById("tablaSocialesM4").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES - PERIODO 5')
		{
			var notas = document.getElementById("tablaSocialesM5").value;
		}	
		//**********************************************************************************
		if(textoBoton == 'INGRESAR NOTAS DE INGLÉS - PERIODO 1')
		{
			var notas = document.getElementById("tablaInglesM1").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE INGLÉS - PERIODO 2')
		{
			var notas = document.getElementById("tablaInglesM2").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE INGLÉS - PERIODO 3')
		{
			var notas = document.getElementById("tablaInglesM3").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE INGLÉS - PERIODO 4')
		{
			var notas = document.getElementById("tablaInglesM4").value;
		}
		if(textoBoton == 'INGRESAR NOTAS DE INGLÉS - PERIODO 5')
		{
			var notas = document.getElementById("tablaInglesM5").value;
		}	
		//**********************************************************************************
		
	}else if(flexiMod==1){ //Flexi
		var notas="";
		var textoBoton = document.getElementById("btn2").value;
		if(textoBoton == 'INGRESAR NOTAS DE CIENCIAS')
		{
			var notas = document.getElementById("tablaCiencias").value;
			
		}
		if(textoBoton == 'INGRESAR NOTAS DE SOCIALES')
		{
			var notas = document.getElementById("tablaSociales").value;
			
		}
		if(textoBoton == 'INGRESAR NOTAS DE INGLES')
		{
			var notas = document.getElementById("tablaIngles").value;
			
		}
		if(textoBoton == 'INGRESAR NOTAS DE LENGUAJE')
		{
			var notas = document.getElementById("tablaLenguaje").value;
			
		}
		if(textoBoton == 'INGRESAR NOTAS DE MATEMATICAS')
		{
			var notas = document.getElementById("tablaMate").value;
			
		}
	}
	
	var notas1 = notas.replace(/"/g,"");
	var notas2 = notas1.replace(/,/g,"\n");
	var notas3 = notas2.split("\n");
		
	VAR0="contenidoForm:itemList:";
	//VAR1=0;
	VAR2=":nota";
	for(i=0; i<=notas3.length-1; i++){
		var finalT=VAR0+i+VAR2;
		document.getElementById(finalT).value = notas3[i];
		}
	
}













