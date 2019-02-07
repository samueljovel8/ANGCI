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
		 btnCopiarNombresSae.value = "COPIAR NOMBRES";
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
			
		}else{
			
			alert("Error, no se puede extraer el elemento, contacte con el administrador");
		}
		/*
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
		*/
	}
	
	document.getElementById("tablaNombresSae").value = nombresCompletosSae + "<<<<<<<<"+ niesSae + "<<<<<<<<";
	var nombres1 = document.getElementById("tablaNombresSae").value;
	var nombres2 = nombres1.replace(/,/g,"");
	var nombres3 = nombres2.replace(/\s-/g,"-");
	var nombres4 = nombres3.replace(/-/g,",");
	
	
	document.getElementById("tablaNombresSae").value = nombres4;
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
	aviso.style.cssText = 'position:fixed; z-index: 9999999; top: 50%;left:50%;margin-left: -70px;padding: 20px; background: green;border-radius: 8px;font-family: lucida calligraphy; color: white';
	aviso.innerHTML = 'Texto Copiado';
	
	document.body.appendChild(aviso);
	document.load = setTimeout('document.body.removeChild(aviso)', 1200);
	
	document.body.removeChild(aux);
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
	
	
	/*
	var pruebaD = document.createElement("button");
	//pruebaD.setAttribute("style","text-decoration: none; padding: 1px; width:35%; font-family: times new roman; font-weight: 200; font-size: 12px; font-style: times new roman; color: #EFF5FB; background-color: #3B0B17; border-radius: 45px; border: 3px double #3B0B17;");
	pruebaD.setAttribute("id","btn2");
	pruebaD.setAttribute("class","boton1");
	pruebaD.value = 'ID';
	*/
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
	
	//var pruebaE = document.createElement("span");
	//pruebaE.setAttribute("class","yt-uix-button-content");
	//var textoE = document.createTextNode("CARGAR NOTAS");
	//pruebaE.appendChild(textoE);
	
	//pruebaD.appendChild(pruebaE);
	
	
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
	var textoBtn = document.createTextNode("COPIAR NOMBRES");
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
	
	$(elem).insertAfter("#tablamayor");
	
	$(ing).insertAfter("#tablamayor");
	$(socia).insertAfter("#tablamayor");
	$(cien).insertAfter("#tablamayor");
	$(mat).insertAfter("#tablamayor");
	$(len).insertAfter("#tablamayor");
	
	
	

	
	document.getElementById('R00').appendChild(notas);
	document.getElementById('R00').appendChild(pruebaB);
	document.getElementById("tabla1").readOnly = "true";
	document.getElementById("tablaLenguaje").readOnly = "true";
	document.getElementById("tablaMate").readOnly = "true";
	document.getElementById("tablaCiencias").readOnly = "true";
	document.getElementById("tablaSociales").readOnly = "true";
	document.getElementById("tablaIngles").readOnly = "true";
	//$(notas).insertAfter("#tablamayor");
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
		//apellidos.push(apellido+"\n");
		
		var idNom0 = "contenidoForm:itemList:";
		var idNom1 = ":j_id156";
		var idNomTotal = idNom0 + i + idNom1;
		var nombre = document.getElementById(idNomTotal).innerHTML;
		//nombres.push(nombre+"\n");
		
		nombresCompletos.push(apellido+"-"+" "+nombre+">");
		//nombresCompletos[i].replace(/,/g,"");
		//nombresCompletos[i].replace(/-/g,",");
		//alert(nie);
	}
	
/*
	var nombresConEspacio = [];
	localStorage.setItem('niesTablaSirai', JSON.stringify(nies));
	localStorage.setItem('nomCompTSirai', JSON.stringify(nombresCompletos));
	
	var nombresTablaSiraiL= localStorage.getItem('nomCompTSirai');
	var nombresTablaSiraiVec = JSON.parse(nombresTablaSiraiL);
*/
	//alert(nombresTablaSiraiVec);
	document.getElementById("tabla1").value=nombresCompletos + "<<<<<<<<"+ nies+ "<<<<<<<<";
	var nombres1 = document.getElementById("tabla1").value;
	var nombres2 = nombres1.replace(/,/g,"");
	var nombres3 = nombres2.replace(/\s-/g,"-");
	var nombres4 = nombres3.replace(/-/g,",");
	
	
	document.getElementById("tabla1").value = nombres4;
	
	
}

function procesarNotas(){
	//tablaNotas
	var notasDesorden = document.getElementById("tablaNotas").value;
	var notasDesordenVec = notasDesorden.split("<<<<<");
	
	document.getElementById("tablaLenguaje").value = notasDesordenVec[1];
	document.getElementById("tablaMate").value = notasDesordenVec[2];
	document.getElementById("tablaCiencias").value = notasDesordenVec[3];
	document.getElementById("tablaSociales").value = notasDesordenVec[4];
	document.getElementById("tablaIngles").value = notasDesordenVec[5];
		
	
}

function obtenerPlanEstudio()
{
	/* Para Primer Anio
		Ciencias Naturales 48061
		Estudios Sociales 48062
		Ingles 48137 
		Lenguaje 48078
		matematicas 48063
	*/
	
	/* Para Segundo Anio
		Ciencias Naturales 48143
		Estudios Sociales 48142
		Ingles 48139 
		Lenguaje 48140
		matematicas 48141
	*/
	
	var planActual = document.getElementById("contenidoForm:plan").value;
	if(planActual == '48061' || planActual == '48143')
	{
		document.getElementById("btn2").value = "INGRESAR NOTAS DE CIENCIAS";
	}
	if(planActual == '48062' || planActual == '48142')
	{
		document.getElementById("btn2").value = "INGRESAR NOTAS DE SOCIALES";
	}
	if(planActual == '48137' || planActual == '48139')
	{
		document.getElementById("btn2").value = "INGRESAR NOTAS DE INGLES";
	}
	if(planActual == '48078' || planActual == '48140')
	{
		document.getElementById("btn2").value = "INGRESAR NOTAS DE LENGUAJE";
	}
	if(planActual == '48063' || planActual == '48141')
	{
		document.getElementById("btn2").value = "INGRESAR NOTAS DE MATEMATICAS";
	}
	//alert(planActual);
}

function cargarNotasMateria(){
	
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

/*



		
*/











