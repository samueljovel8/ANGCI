function busqueda(p,valB){
	var botones2 = [];
	var vecKeyTemp=[];
	var vecContenidoTemp=[];
	for(key in dicNombresCuadros)
	{
		var nombreCuadrosTemp = dicNombresCuadros[key];
		var vecNombreCuadrosTemp = nombreCuadrosTemp.split(" ");
		probabilidad=0;
		for(i=0;i<=vecNombreCuadrosTemp.length-1;i++)
		{	
			var texto1 = p.value;
			var texto2 = vecNombreCuadrosTemp[i];
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
				probabilidad++;
			}	
		}
		if(probabilidad>=1)
		{
				vecKeyTemp.push(key);
				vecContenidoTemp.push(dicNombresCuadros[key]);
		}
	}
	tablaDeResultadosBusqueda(vecKeyTemp.length-1);
	for(j=0;j<=vecKeyTemp.length-1;j++)
	{
		botones2[j] = document.createElement('input'); 
		botones2[j].type = 'button';
		botones2[j].id = p.id + '-' + vecKeyTemp[j];
		botones2[j].value = dicNombresCuadros[vecKeyTemp[j]];	
		botones2[j].className = 'boton1';
		botones2[j].title = "Presiona dos veces para reemplazar";
					 
		res1=document.getElementById('R'+j).appendChild(botones2[j]);
		if (botones2[j].addEventListener)
		{
			botones2[j].addEventListener('dblclick', function(){reemplazar(this,valB);ar(valB);habilitarTerminar();}, true);
		} else {
			botones2[j].attachEvent('onclick', reemplazar);
		}
	}
}