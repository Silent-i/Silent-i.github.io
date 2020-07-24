//04.html 的轮播效果
var ul = document.getElementById("ul");
			var show = document.getElementById("show");
			var lis = document.getElementById("ul2").children;
//			.children   由子级元素组成数组
			var i=0;
			var timer;
			function go(){
				i++;
				if(i==3){
					i = 0;
				}
//				移动一张图片宽度
				$("#ul").animate({left:-1200*i+"px"},3000)
				/*ul.style.left = -1200*i+"px";*/
				for(var j=0;j<lis.length;j++){
					lis[j].style.background = "white";
				}
				lis[i].style.background = "#f60";
			}
			timer = setInterval("go()",3000);
			
			
			go();
			show.onmouseover=function(){
				clearInterval(timer);
			}
			show.onmouseout=function(){
				timer = setInterval("go()",3000);
			}
			
			for(var j=0;j<lis.length;j++){
				lis[j].setAttribute("index",j);
				lis[j].onclick=function(){
					i = this.getAttribute("index");
					for(var j=0;j<lis.length;j++){
						lis[j].style.background = "white";
					}
					this.style.background = "#f60";
					$("#ul").animate({left:-1200*i+"px"},3000)
					/*ul.style.left = -1200*i+"px";*/
				}
			}
			

