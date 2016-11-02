




var bn2 = document.querySelector(".rollbox-1");
var bn2left = bn2.offsetLeft;
	console.log(bn2left);
function movebn2(){
	var value = 0;
	for(var i = 0; i<1020;i++){
		value -=5;
		var bn2left = bn2.offsetLeft;
		bn2left += value;
		if(value%320 == 0){
			var timerbn22 = setInterval(function(){
				clearInterval(timerbn2);
			},1000)
		}
	}	
}
var timerbn2 = setInterval(function(){
	movebn2();
},1000);