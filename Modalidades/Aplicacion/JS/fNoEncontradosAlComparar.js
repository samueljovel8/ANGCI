
function noEncontradosAlComparar(){
  dicNoEncontradosN1 = {};
  dicNiesNoEncontrados = {};
  var dicNombreSirai={};
  dicNies1 = {};
  dicNombres1 = {};
  dicNombres2 = {};
  var ids0=[];
  var ids1=[];
  var ids2=[];
  
	var nombresNoEncontrados1 = "";
    var tabla1 = '<table border="0" cellspacing="0" cellpadding="2" width=100%>';	
    var tabla2 = '<table border="0" cellspacing="0" cellpadding="2" width=100%>';
    var tabla3 = '<table border="0" cellspacing="0" cellpadding="2" width=100%>';
	
  var nies1 = document.getElementById('nies').value;
  var arrayNies1 = nies1.split("\n");
  var nombres1 = document.getElementById('nombresSirai').value;
  var arrayNombres1 = nombres1.split("\n");
  var nombres2 = document.getElementById('nombresCuadros').value;
  var arrayNombres2 = nombres2.split("\n");
  
  for(j=0;j<=arrayNies1.length-1;j++){
  	var itemsVec0 ='n'+j;
    ids0.push(itemsVec0);
  }
  
  for(j=0;j<=arrayNombres1.length-1;j++){
  	var itemsVec1 ='v'+j;
    ids1.push(itemsVec1);
  }
  
  for(j=0;j<=arrayNombres2.length-1;j++){
  	var itemsVec2 ='v'+j;
    ids2.push(itemsVec2);
  }
  
  for(i=0;i<=arrayNies1.length-1;i++){
  	dicNies1[ids1[i]]=arrayNies1[i].trim();
  }
  
  for(i=0;i<=arrayNombres1.length-1;i++){
  	dicNombres1[ids1[i]]=arrayNombres1[i].trim();
  }
 
  for(i=0;i<=arrayNombres2.length-1;i++){
  	dicNombres2[ids2[i]]=arrayNombres2[i].trim();
  }
  var dicEncontradosN1 = {};
  
  var totalEncontrados = 0;
  var totalNoEncontrados = 0;

  for(i=0;i<=Object.keys(dicNombres1).length-1;i++){
		var siE = 0;
		var noE = 0;
		for(j=0;j<=Object.keys(dicNombres2).length-1;j++){
		
			var texto1 = dicNombres1[ids1[i]];
			var texto2 = dicNombres2[ids2[j]];
		
			texto1=texto1.replace(/[ÀÁÂÃÄÅ]/g,"A");
			texto1=texto1.replace(/[ÈÉÊË]/g,"E");
		    texto1=texto1.replace(/[ÌÍÎÏ]/g,"I");
		    texto1=texto1.replace(/[ÒÓÔÕÖ]/g,"O");
		    texto1=texto1.replace(/[ÙÚÛÜ]/g,"U");
			texto1=texto1.replace(/,/g,"");
			
			texto1=texto1.replace(/[àáâãäå]/g,"a");
			texto1=texto1.replace(/[èéêë]/g,"e");
		    texto1=texto1.replace(/[ìíîï]/g,"i");
		    texto1=texto1.replace(/[òóôõö]/g,"o");
		    texto1=texto1.replace(/[ùúûü]/g,"u");
			
			texto2=texto2.replace(/[ÀÁÂÃÄÅ]/g,"A");
			texto2=texto2.replace(/[ÈÉÊË]/g,"E");
		    texto2=texto2.replace(/[ÌÍÎÏ]/g,"I");
		    texto2=texto2.replace(/[ÒÓÔÕÖ]/g,"O");
		    texto2=texto2.replace(/[ÙÚÛÜ]/g,"U");
			
			texto2=texto2.replace(/[àáâãäå]/g,"a");
			texto2=texto2.replace(/[èéêë]/g,"e");
		    texto2=texto2.replace(/[ìíîï]/g,"i");
		    texto2=texto2.replace(/[òóôõö]/g,"o");
		    texto2=texto2.replace(/[ùúûü]/g,"u");
			texto2=texto2.replace(/,/g,"");
			
			if(texto1 == texto2){
				siE++;
			}else{
				noE++;
			}
		}
		if(siE>0){
			totalEncontrados++;
			dicEncontradosN1[ids1[i]]=arrayNombres1[i];
			tabla1 += '<tr><td id=R0'+ i +' style="background-color:#3B0A00;color:#FFFFFF;">'+dicEncontradosN1[ids1[i]]+'</td></tr>';
			
		}else if(noE>0){
			totalNoEncontrados++;
			dicNoEncontradosN1[ids1[i]]=arrayNombres1[i];
			dicNiesNoEncontrados[ids0[i]]=arrayNies1[i];
			tabla1 += '<tr><td id=R0'+ i +' style="background-color:#FFFFFF;color:#3B0A00;">'+dicNoEncontradosN1[ids1[i]]+'</td></tr>';
		}
		
	}
	tabla1 += '</table>';	
	
	
	/*
	for(i=0;i<=arrayNombres1.length-1;i++)
	{
		var si=0;
		var texto1 = arrayNombres1[i];
		texto1=texto1.replace(/[ÀÁÂÃÄÅ]/g,"A");
		texto1=texto1.replace(/[ÈÉÊË]/g,"E");
		texto1=texto1.replace(/[ÌÍÎÏ]/g,"I");
		texto1=texto1.replace(/[ÒÓÔÕÖ]/g,"O");
		texto1=texto1.replace(/[ÙÚÛÜ]/g,"U");
		//texto1=texto1.replace(/,/g,"");
			
		texto1=texto1.replace(/[àáâãäå]/g,"a");
		texto1=texto1.replace(/[èéêë]/g,"e");
		texto1=texto1.replace(/[ìíîï]/g,"i");
		texto1=texto1.replace(/[òóôõö]/g,"o");
		texto1=texto1.replace(/[ùúûü]/g,"u");
		
		
		for(j=0;j<=arrayNombres2.length-1;j++){
			
			var texto2 = arrayNombres2[j];
			texto2=texto2.replace(/[ÀÁÂÃÄÅ]/g,"A");
			texto2=texto2.replace(/[ÈÉÊË]/g,"E");
		    texto2=texto2.replace(/[ÌÍÎÏ]/g,"I");
		    texto2=texto2.replace(/[ÒÓÔÕÖ]/g,"O");
		    texto2=texto2.replace(/[ÙÚÛÜ]/g,"U");
			
			texto2=texto2.replace(/[àáâãäå]/g,"a");
			texto2=texto2.replace(/[èéêë]/g,"e");
		    texto2=texto2.replace(/[ìíîï]/g,"i");
		    texto2=texto2.replace(/[òóôõö]/g,"o");
		    texto2=texto2.replace(/[ùúûü]/g,"u");
			texto2=texto2.replace(/		/g,"");
			
			if(texto1 === texto2){
				si++;
				alert(texto1 + "si es" + texto2);
				
			}else{
				alert(texto1 + "no es" + texto2);
			}
			
		}
		
		if(si>0)
		{
			
			tabla1 += '<tr><td id=R0'+ i +' style="background-color:#3B0A00;color:#FFFFFF;">'+arrayNombres1[i]+'</td></tr>';
		}else if(si==0)
		{
			
			tabla1 += '<tr><td id=R0'+ i +' style="background-color:#FFFFFF;color:#3B0A00;">'+arrayNombres1[i]+'</td></tr>';
			
		}
	
	}
	tabla1 += '</table>';	
	*/
	
	for(i=0;i<=arrayNombres2.length-1;i++)
	{
		tabla2 += '<tr><td id=R1'+i+'>'+arrayNombres2[i]+'</td></tr>';
	}
	tabla2 += '</table>';
	
	for(key in dicNoEncontradosN1)
	{
		//nombresNoEncontrados1 += dicNoEncontradosN1[key] + "\n";
		tabla3 += '<tr><td id=R2'+key+'>'+dicNoEncontradosN1[key]+'</td></tr>';
	}
	tabla3 += '</table>';
	//alert(nombresNoEncontrados1);
	
	var totalSiraiNom = 0;
	var totalCuadrosNom = 0;
	var totalNoEncontradosNom = 0;
		
	document.getElementById('nomSirai').innerHTML = tabla1;
	document.getElementById('nomCuadrosPromocion').innerHTML = tabla2;
	document.getElementById('nomNoEncontrados').innerHTML = tabla3;
	
	totalSiraiNom = arrayNombres1.length-1;
	totalCuadrosNom = arrayNombres2.length-1;
	totalNoEncontradosNom = Object.keys(dicNoEncontradosN1).length;
	
	document.getElementById('totalNomSirai').innerHTML = totalSiraiNom;
	document.getElementById('totalNomCuadros').innerHTML = totalCuadrosNom;
	document.getElementById('totalNombresNoEncontrados').innerHTML = totalNoEncontradosNom;
}