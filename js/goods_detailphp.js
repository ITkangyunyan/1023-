console.log("hh");
var request = new XMLHttpRequest();
			request.open('get','http://172.18.10.206/interface/XX.php',true);
			request.send();
			request.onreadystatechange = function(){
				if(request.readyState == 4 && request.status == 200){
					var str = request.responseText;
					var obj = JSON.parse(str);
					console.log(obj);
					detail(obj);
				}
			}
function detail(obj){
	var fx = document.getElementsByClassName("fx");
//	导航
	var goods_effect = document.querySelector(".goods_effect");
//	index还需要修改
	var index = 0;
	goods_effect.innerHTML = obj[index][4];
//	商品名
	fx.innerHTML = obj[index][1];
	var goodsInfo = document.querySelector("#goodsInfo");
	var goods_showimg = document.querySelector("#goods_showimg");
//	商品展示图片

	var x = obj[index][7];
	var array = eval(x);
	console.log(x);
	console.log(array);
	for(var i = 0; i<array.length; i++){
		var a = document.createElement("a");
		a.className = "a1";
		var img = document.createElement("img");
		img.style.width = 68 + 'px';
		img.src = "image/"+array[i];
		// console.log(obj[1][7]);
		a.appendChild(img);
		goods_showimg.appendChild(a);
	}
	var goods_img = document.querySelector("#goods_img");
	goods_img.src = "image/" + obj[index][2];
	var goods_logo = document.querySelector("#goods_logo");
	goods_logo.src = "image/" + obj[index][6];
	var goods_price = document.querySelector("#ECS_SHOPPRICE");
	goods_price.innerHTML = "¥"+obj[index][3]+"元";
	var goods_sales = document.querySelector("#goods_sales");
	goods_sales.innerHTML = obj[index][8];


}
