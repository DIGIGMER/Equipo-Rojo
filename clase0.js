function serie(valor){
	if (valor == undefined)
	{
		for (var  i=0; i<4; i++){
			if (i ===0)
			{
				console.log(i);
			}
			else{
				(function(pausa)
					{setTimeOut(function(){console.log(pausa); },1000 * (pausa) );})(i);
			}
		}
	}
else
{
	for (var  i=0; i<valor; i++){
		if (i ===0){
				console.log(i);
			}else{
				(function(pausa)
					{setTimeOut(function(){console.log(pausa); },1000 * (pausa) );})(i);
			}
		}
}

}

