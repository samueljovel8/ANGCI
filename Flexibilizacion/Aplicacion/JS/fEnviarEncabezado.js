
function enviarEncabezado(nivelEducativo)
{
	//var nivelEducativo = localStorage.getItem("parametro");
	
	if(nivelEducativo == '0')
	{
		var alfa1=document.getElementById('ea1').value;
		var alfa2=document.getElementById('ea2').value;
		var alfa3=document.getElementById('ea3').value;
		var alfa4=document.getElementById('ea4').value;
		var alfa5=document.getElementById('ea5').value;
		var alfa6=document.getElementById('ea6').value;
		
		localStorage.setItem("a1", alfa1);
		localStorage.setItem("a2", alfa2);
		localStorage.setItem("a3", alfa3);
		localStorage.setItem("a4", alfa4);
		localStorage.setItem("a5", alfa5);
		localStorage.setItem("a6", alfa6);
		
		
	} else if(nivelEducativo == '1')
	{
		var eeb1=document.getElementById('eb1').value;
		var eeb2=document.getElementById('eb2').value;
		var eeb3=document.getElementById('eb3').value;
		var eeb4=document.getElementById('eb4').value;
		var eeb5=document.getElementById('eb5').value;
		var eeb6=document.getElementById('eb6').value;
		var eeb7=document.getElementById('eb7').value;
		var eeb8=document.getElementById('eb8').value;
		var eeb9=document.getElementById('eb9').value;
		var eeb10=document.getElementById('eb10').value;
		var eeb11=document.getElementById('eb11').value;
		
		localStorage.setItem("b1", eeb1);
		localStorage.setItem("b2", eeb2);
		localStorage.setItem("b3", eeb3);
		localStorage.setItem("b4", eeb4);
		localStorage.setItem("b5", eeb5);
		localStorage.setItem("b6", eeb6);
		localStorage.setItem("b7", eeb7);
		localStorage.setItem("b8", eeb8);
		localStorage.setItem("b9", eeb9);
		localStorage.setItem("b10", eeb10);
		localStorage.setItem("b11", eeb11);
		
	} else if(nivelEducativo == '2')
	{
		
		var pab2=document.getElementById('epa2').value;
		var pab3=document.getElementById('epa3').value;
		var pab4=document.getElementById('epa4').value;
		var pab5=document.getElementById('epa5').value;
		var pab6=document.getElementById('epa6').value;
		var pab7=document.getElementById('epa7').value;
		var pab8=document.getElementById('epa8').value;
		var pab9=document.getElementById('epa9').value;
		var pab10=document.getElementById('epa10').value;
		var pab11=document.getElementById('epa11').value;
		
		
		localStorage.setItem("p2", pab2);
		localStorage.setItem("p3", pab3);
		localStorage.setItem("p4", pab4);
		localStorage.setItem("p5", pab5);
		localStorage.setItem("p6", pab6);
		localStorage.setItem("p7", pab7);
		localStorage.setItem("p8", pab8);
		localStorage.setItem("p9", pab9);
		localStorage.setItem("p10", pab10);
		localStorage.setItem("p11", pab11);
		
	}else if(nivelEducativo == '3')
	{
		
		
		var pab2=document.getElementById('epa2').value;
		var pab3=document.getElementById('epa3').value;
		var pab4=document.getElementById('epa4').value;
		var pab5=document.getElementById('epa5').value;
		var pab6=document.getElementById('epa6').value;
		var pab7=document.getElementById('epa7').value;
		var pab8=document.getElementById('epa8').value;
		var pab9=document.getElementById('epa9').value;
		var pab10=document.getElementById('epa10').value;
		var pab11=document.getElementById('epa11').value;
		
		
		localStorage.setItem("p2", pab2);
		localStorage.setItem("p3", pab3);
		localStorage.setItem("p4", pab4);
		localStorage.setItem("p5", pab5);
		localStorage.setItem("p6", pab6);
		localStorage.setItem("p7", pab7);
		localStorage.setItem("p8", pab8);
		localStorage.setItem("p9", pab9);
		localStorage.setItem("p10", pab10);
		localStorage.setItem("p11", pab11);
		
	}else if(nivelEducativo == '4')
	{
		var cab1=document.getElementById('cer1').value;
		var cab2=document.getElementById('cer2').value;
		var cab3=document.getElementById('cer3').value;
		var cab4=document.getElementById('cer4').value;
			
		localStorage.setItem("c1", cab1);
		localStorage.setItem("c2", cab2);
		localStorage.setItem("c3", cab3);
		localStorage.setItem("c4", cab4);
	}	

}