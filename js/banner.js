var oUl = document.getElementsByClassName('ul')[0];
		var uLi = oUl.getElementsByTagName('li');
		var oOl = document.getElementsByTagName('ol')[0];
		var oLi = document.getElementsByClassName('dian');
		var wrap = document.getElementsByClassName('wrapper')[0];

		// 更改样式，设置轮播的宽。
		var ww = wrap.offsetWidth;				//轮播图片主体部分的实际宽度。	
		var l1 = uLi.length ;					//轮播个数
		var l2 = oLi.length ;					//下方原点的个数
		oUl.style.width = (l1) * ww + 'px';
		for(var i = 0 ; i < l1 ; i++){
			uLi[i].style.width = ww + 'px';
			
		}
		var w = uLi[0].offsetWidth;				//每次轮播的宽度
		
		var timer1;
		var timer2;
		function moveR(){
			clearInterval(timer1);
			timer1 = setInterval(function(){	
					
				//判断到达整张时候停顿一秒
				if( oUl.offsetLeft % w == 0 ){
					clearInterval(timer1);

					setTimeout(function(){			//停顿一秒之后再执行
						moveR();
						if( index < l2 - 1 ){
							oLi[index+1].style.opacity = '1'; 
						}else{
							oLi[0].style.opacity = '1'; 
						}
					},2000);
					var index = oUl.offsetLeft / w * -1;
					for(var i = 0 ; i < l2 ; i++){
//						console.log("iii");
						oLi[i].style.opacity = '0';				
					}				
				}
				//轮播语句；
				oUl.style.left = oUl.offsetLeft - 10 + 'px';			//轮播一次走的 像素值。
							
				//判断到达最后一个则返回第一个。
				if(oUl.offsetLeft <= (-l2) * w ){							
					oUl.style.left = 0 + 'px';
				}
					
			},1);
		}	
		
		moveR();
		
		//给圆圈添加点击事件
		for(var i = 0 ; i < l2 ; i++){
			oLi[i].index = i;
			oLi[i].onclick = function(){
				clearInterval(timer1);
				for(var i = 0 ; i < l2 ; i++){
					oLi[i].style.opacity = '0';
				}
				this.style.opacity = '1';
				oUl.style.left = this.index * w * (-1) + 'px';
				moveR();
			}
		}
		

		
