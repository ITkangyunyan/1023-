var botton_1 = document.querySelector("#botton_1");
var lis = botton_1.getElementsByTagName("li");
for(var i = 0; i < lis.length;i++){
	lis[i].index = i;
	lis[i].onmouseover = function(){
		if(this.index == 0){
			return false;
		}
		this.style.background = "rgb(180,180,180)";
		var hiddenbtn = this.getElementsByClassName('hiddenbtn')[0];
		hiddenbtn.style.display = "block";
		hiddenbtn.onmouseover = function(){
			hiddenbtn.style.display = "block";
		}
		hiddenbtn.onmouseout = function(){
			hiddenbtn.style.display = "none";
			for(var i = 0; i < lis.length;i++){
				lis[i].style.background = "";
			}
		}
	}
	lis[i].onmouseout = function(){
		if(this.index == 0){
			return false;
		}
		this.style.background = "";
		var hiddenbtn = this.querySelector('.hiddenbtn');
		hiddenbtn.style.display = "none";

	}
}
