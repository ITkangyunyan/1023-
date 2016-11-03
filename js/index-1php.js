console.log("hh");
var request = new XMLHttpRequest();
//			第二步:open函数封装get，网址，异步请求
			request.open('get','http://172.18.10.206/interface/XX.php',true);

//			第三步:send发送数据
			request.send();
//			第四步:监听数据发送和接收状态
			request.onreadystatechange = function(){
//				4:代表数据已经完全返回
//				200: 代表网络请求正常   两个条件缺一不可
				if(request.readyState == 4 && request.status == 200){
//					获得数据,是字符串类型，需要转换为JS对象
					var str = request.responseText;
//					因为返回的是JSON格式的字符串,所以用json解析函数转换为js对象
//					注意:所有网络请求得到的内容都是字符串,想要使用就必须转换
					var obj = JSON.parse(str);
					console.log(obj);
//					console.log(obj.errMsg);
//					console.log(obj.retData);
//					var arr = obj.retData;
//					获得数据之后,调用布局的函数

          // console.log(obj[1][7]);
					// console.log(obj[1][1]);
					lunbo2(obj);
				}
			}
function lunbo2(obj){
	var pic_as = document.getElementsByClassName("pic_a");
	for(var i = 0; i < pic_as.length;i++){
		var div1 = pic_as[i].querySelector('.div1');
		var div2 = pic_as[i].querySelector('.div2');
		var div3 = pic_as[i].querySelector('.div3');
		var img = div1.querySelector('img');
		img.src = "image/"+obj[i][2];
		console.log(obj[1][1]);
		div2.innerHTML = obj[i][1];
		div3.innerHTML = "¥"+obj[i][3]+"元";

	}
}
