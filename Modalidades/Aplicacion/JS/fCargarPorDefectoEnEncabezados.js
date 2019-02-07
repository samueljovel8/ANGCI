//Funciones necesarias para cargar los datos por defecto de cada formulario que se usa para establecer el encabezado en el archivo de excel generado para los diferentes niveles.



function CcargarPorDefectoInstitucional()
{
	document.getElementById('eb2').value="CIDEP";
	//document.getElementById('eb3').value="";
	//document.getElementById('eb4').value="";
	//document.getElementById('eb5').value="";
	//document.getElementById('eb6').value="SEMIPRESENCIAL";
	document.getElementById('eb7').value="2018";
	//document.getElementById('eb8').value="";
	//document.getElementById('eb9').value="";
	document.getElementById('eb10').value="7:00 - 4: 00 P.M ";
}

function cargarMunicipioCuadroInstitucional()
 {
	var select = document.getElementById('municipioCuadro');
	var values = select.value;
	var valuesVec = values.split("-");
	//document.getElementById("epa4").value=valuesVec[0];
	document.getElementById("eb4").value=valuesVec[1];
	document.getElementById("eb7").value=valuesVec[2];
}
 function cargarGradoCuadrosInstitucional()
 {
	//var select = document.getElementById('selectGradoCuadros');
	//var values = select.value;
	//var valuesVec = values.split("-");
	//document.getElementById("eb8").value=values;
	//document.getElementById("eb9").value=valuesVec[1];
	//document.getElementById("eb8").value=valuesVec[2];
}

//-------------------------------------------------------------------------------------------------------------


function cargarPorDefectoPromocion()
{
	//document.getElementById("eb4").value = "INSTITUTO DE MODALIDADES FLEXIBLES DE EDUCACIÓN";
document.getElementById("peb6").value = "NIVELACI&OacuteN ACAD&EacuteMICA, SEDE ED&UacuteCAME";
	document.getElementById("peb7").value = "URBANIZACI&OacuteN LA CIMA II, AVENIDA PRINCIPAL PASAJE 7-A";
	document.getElementById("peb10").value = "15-1489";
	//document.getElementById("eb8").value = "San Salvador";
	//document.getElementById("eb9").value = "San Salvador";
	document.getElementById("peb11").value = "24/11/2005";
	//document.getElementById("peb3").value = "--";
}

 function departamentoMunicipioCuadro(n){
	 
	 if(n=='0'){
			 var select = document.getElementById('departamentoCuadro');
			 var values = select.value;
			 var va = values.split("-");
			 var arrayS=[""];
			 var arrayS2=[""];
			 document.getElementById("municipioCuadro").innerHTML = "<option value='' selected='true' disabled>S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;</option>"; 
	 }else if(n=='1'){
			 var select = document.getElementById('departamentoPromocion');
			 var values = select.value;
			 var va = values.split("-");
			 var arrayS=[""];
			 var arrayS2=[""];
			 document.getElementById("municipioPromocion").innerHTML = "<option value='' selected='true' disabled>S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;</option>";
		 
	 }else if(n=='2'){
			var select = document.getElementById('departamentoCertificados');
			 var values = select.value;
			 var va = values.split("-");
			 var arrayS=[""];
			 var arrayS2=[""];
			 document.getElementById("municipioCertificados").innerHTML = "<option value='' selected='true' disabled>S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;</option>";
		 
	 }
	 
	 if(va[0]=='0'){
		 //AHUACHAPAN
		 arrayS = [
						"E0171-C.E. 1 DE JULIO 1823-E0171-Semipresencial"
					 ];
		arrayS2 = [
						"E0171-CENTRO ESCOLAR 1 DE JULIO 1823-E0171-Semipresencial"
					 ];
	 }else if(va[0]=='1'){
		//SAN SALVADOR
		 arrayS = [
						"E0307-C.E. FABIO CASTILLO-E0307-Semipresencial", 
						"E0009-C.E. DOCTOR. DOROTEO VASCONCELOS-E0009-Semipresencial", 
						"E0280-C.E. MAR&IacuteA MADRE DE LOS POBRES-E0280-Semipresencial", 
						"E0010-COLEGIO PROF. ALONSO REYES GUERRA-E0010-Acelerada", 
						"E00261-C.E. REP&UacuteBLICA DE PANAM&Aacute-E00261-Acelerada", 
						"E0388-C E. REP&UacuteBLICA DE CHILE-E0388-Acelerada",
						"E0013-I N. PROF. ALBERTO MASFERRER(S&AacuteBADO)-E0013-Semipresencial", 
						"E0367-ADOC MONTECARMELO-E0367-Semipresencial",
						"E0013-I.N. PROF. ALBERTO MASFERRER	(DOMINGO)-E0013-Semipresencial", 
						"E0272-C.E. LIC. ALFREDO CRISTIANI BURKARD-E0272-Semipresencial",
						"E0385-SHERWIN WILLIAMS DE CENTROAM&EacuteRICA-E0385-Semipresencial"
					 ];
	     arrayS2 = [
						"E0307-CENTRO ESCOLAR FABIO CASTILLO-E0307-Semipresencial", 
						"E0009-CENTRO ESCOLAR DOCTOR DOROTEO VASCONCELOS-E0009-Semipresencial", 
						"E0280-CENTRO ESCOLAR MARÍA MADRE DE LOS POBRES-E0280-Semipresencia", 
						"E0010-COLEGIO PROFESOR ALONSO REYES GUERRA-E0010-Acelerada", 
						"E00261-CENTRO ESCOLAR REPÚBLICA DE PANAMÁ-E00261-Acelerada", 
						"E0388-CENTRO ESCOLAR REPÚBLICA DE CHILE-E0388-Acelerada",
						"E0013-INSTITUTO NACIONAL PROFESOR ALBERTO MASFERRER(SÁBADO)-E0013-Semipresencial", 
						"E0367-ADOC MONTECARMELO-E0367-Semipresencial",
						"E0013-INSTITUTO NACIONAL PROFESOR ALBERTO MASFERRER (DOMINGO)-E0013-Semipresencial", 
						"E0272-CENTRO ESCOLAR LIC. ALFREDO CRISTIANI BURKARD-E0272-Semipresencial",
						"E0385-SHERWIN WILLIAMS DE CENTROAM&EacuteRICA-E0385-Semipresencial"
					 ];
	}else if(va[0]=='2'){
		//CUSCATLAN
		 arrayS = [
						"E0928-C.E. CANDELARIO CUELLAR-E0928-Semipresencial", 
						"E0076-I.N. SAN JOSE GUAYABAL-E0076-Semipresencial", 
						"E0077-C.E. SAN PEDRO PERULAP&AacuteN-E0077-Semipresencial", 
						"E0078-C.E. DOCTOR ANDR&EacuteS G. FUNES-E0078-Semipresencial", 
						"E0079-I.N. DE SUCHITOTO-E0079-Semipresencial", 
						"E0197-C.E. EULOGIA RIVAS-E0197-Semipresencial",
						"E0368-C.E. SAN AGUSTIN-E0368-Semipresencial"
					 ];
		arrayS2 = [
						"E0928-CENTRO ESCOLAR CANDELARIO CUELLAR-E0928-Semipresencial", 
						"E0076-INSTITUTO NACIONAL SAN JOSE GUAYABAL-E0076-Semipresencial", 
						"E0077-CENTRO ESCOLAR SAN PEDRO PERULAPAN-E0077-Semipresencial", 
						"E0078-CENTRO ESCOLAR DOCTOR ANDRÉS G. FUNES-E0078-Semipresencial", 
						"E0079-INSTITUTO NACIONAL DE SUCHITOTO-E0079-Semipresencial", 
						"E0197-CENTRO ESCOLAR EULOGIA RIVAS-E0197-Semipresencial",
						"E0368-CENTRO ESCOLAR SAN AGUSTIN-E0368-Semipresencial"
					 ];
	}else if(va[0]=='3'){
		//LA PAZ
		 arrayS = [
						"E0368-C.E. SAN AGUST&IacuteN-E0368-Semipresencial", 
						"E0255-C.E. CASER&IacuteO LA FLECHA-E0255-Semipresencial"
					 ];
		arrayS2 = [
						"E0368-CENTRO ESCOLAR SAN AGUST&IacuteN-E0368-Semipresencial", 
						"E0255-CENTRO ESCOLAR CASER&IacuteO LA FLECHA-E0255-Semipresencial"
					 ];
	}else if(va[0]=='4'){
		//LA LIBERTAD
		 arrayS = [
						"E0287-ZONA FRANCA AMERICAN PARK-E0287-Semipresencial", 
						"E0376-ADOC ATEOS-E0376-Semipresencial", 
						"E0389-TEXTILES (HILASAL)-E0389-Semipresencial", 
						"E0199-C.VOCACIONAL DE ZAPOTITAN SAN JOSE-E0199-Semipresencial", 
						"E0423-LA SABANA-E0423-Semipresencial",
						"E0312-SELLO DE ORO S.A. de C.V.-Semipresenciall"
					 ];
		arrayS2 = [
						"E0287-ZONA FRANCA AMERICAN PARK-E0287-Semipresencial", 
						"E0376-ADOC ATEOS-E0376-Semipresencial", 
						"E0389-TEXTILES (HILASAL)-E0389-Semipresencial", 
						"E0199-CENTRO VOCACIONAL DE ZAPOTITAN SAN JOSE-E0199-Semipresencial", 
						"E0423-LA SABANA-E0423-Semipresencial",
						"E0312-SELLO DE ORO S.A. de C.V.-Semipresencial"
					 ];
	}else if(va[0]=='5'){
		//SAN VICENTE
		 arrayS = [
						"E0017-I. N. DE APASTEPEQUE-E0017-Semipresencial"
					 ];
		 arrayS2 = [
						"E0017-INSTITUTO NACIONAL DE APASTEPEQUE-E0017-Semipresencial"
					 ];
	}else if(va[0]=='6'){
		//SAN MIGUEL
		 arrayS = [
						"E0023-C.E. MANLIO ARGUETA-E0023-Semipresencial", 
						"E0384-C.E. CANTON LA ESTRECHADURA-E0384-Semipresencial", 
						"E0304-C.E. ELISEO HENRIQUEZ-E0304-Semipresencial", 
						"E0366-C.E. CANOA-E0366-Semipresencial", 
						"E0424-C.E. MAR&IacuteA ESCOBAR GRANILLO-E0424-Semipresencial"
					 ];
		arrayS2 = [
						"E0023-CENTRO ESCOLAR MANLIO ARGUETA-E0023-Semipresencial", 
						"E0384-CENTRO ESCOLAR CANTONN LA ESTRECHADURA-E0384-Semipresencial", 
						"E0304-CENTRO ESCOLAR ELISEO HENRIQUEZ-E0304-Semipresencial", 
						"E0366-CENTRO ESCOLAR CANOA-E0366-Semipresencial", 
						"E0424-CENTRO ESCOLAR MAR&IacuteA ESCOBAR GRANILLO-E0424-Semipresencial"
					 ];
	} 
	 
            
			
			
	if(n=='0'){
			 for(var i in arrayS)
            { 
				var elem = arrayS[i].split("-");
				var elem2 = arrayS2[i].split("-");
                document.getElementById("municipioCuadro").innerHTML += "<option value='"+elem2[0]+"-"+elem2[3]+"'>"+elem[1]+"</option>"; 

            }
	}else if(n=='1'){
			 for(var i in arrayS)
            { 
				var elem = arrayS[i].split("-");
				var elem2 = arrayS2[i].split("-");
                document.getElementById("municipioPromocion").innerHTML += "<option value='"+elem2[0]+"-"+elem2[3]+"'>"+elem[1]+"</option>"; 

            }
	 }else if(n=='2'){
			for(var i in arrayS)
            { 
				var elem = arrayS[i].split("-");
				var elem2 = arrayS2[i].split("-");
                document.getElementById("municipioCertificados").innerHTML += "<option value='"+elem2[0]+"-"+elem2[3]+"'>"+elem[1]+"</option>"; 

            }
	 }
 }
 
 function sedeMunicipioSelec(k){
	  
	 if(k=='0'){
			 var seleccionadoSede = document.getElementById('municipioCuadro');
			 var valuesSede = seleccionadoSede.options[seleccionadoSede.selectedIndex].text;
			 var valuesSedeIt = seleccionadoSede.value;
			 var varC = valuesSedeIt.split("-");
			 
			 var select = document.getElementById('departamentoCuadro');
			 var values = select.value;
			 var va = values.split("-");
				 
			 document.getElementById("eb8").innerHTML =valuesSede;
			 document.getElementById("eb3").innerHTML =va[1];
			 document.getElementById("eb5").innerHTML =va[1];
			 document.getElementById("eb4").innerHTML =varC[0];
			 document.getElementById("eb6").innerHTML =varC[1];
			 
	}else if(k=='1'){
			 var seleccionadoSede = document.getElementById('municipioPromocion');
			 var valuesSede = seleccionadoSede.options[seleccionadoSede.selectedIndex].text;
			 var valuesSedeIt = seleccionadoSede.value;
			 var varC = valuesSedeIt.split("-");
			
			 var select = document.getElementById('departamentoPromocion');
			 var values = select.value;
			 var va = values.split("-");
				 
			 document.getElementById("peb4").innerHTML =valuesSede;
			 document.getElementById("peb5").innerHTML =varC[0];
			 document.getElementById("peb8").innerHTML =va[1];
			 document.getElementById("peb9").innerHTML =va[1];
			 document.getElementById("peb3").innerHTML =varC[0];
			 
	 }else if(k=='2'){
			var seleccionadoSede = document.getElementById('municipioCertificados');
			 var valuesSede = seleccionadoSede.options[seleccionadoSede.selectedIndex].text;
			 var select = document.getElementById('departamentoCertificados');
			 var values = select.value;
			 var va = values.split("-");
				 
			 document.getElementById("cer1").innerHTML =valuesSede;
			 document.getElementById("cer4").innerHTML =va[1];
			// document.getElementById("eb7").innerHTML =va[1];	 
	}
 }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 