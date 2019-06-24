var first = [
				{
					"title": "手机 电话卡",
					"icon": "&#xe61f;"
				},
				{
					"title": "电视 盒子",
					"icon": "&#xe61f;"
				},
				{
					"title": "笔记本 平板",
					"icon": "&#xe61f;"
				},
				{
					"title": "家电 插线板",
					"icon": "&#xe61f;"
				},
				{
					"title": "出行 穿戴",
					"icon": "&#xe61f;"
				},
				{
					"title": "智能 路由器",
					"icon": "&#xe61f;"
				},
				{
					"title": "电源 配件",
					"icon": "&#xe61f;"
				},
				{
					"title": "健康 儿童",
					"icon": "&#xe61f;"
				},
				{
					"title": "耳机 音箱",
					"icon": "&#xe61f;"
				},
				{
					"title": "生活 箱包",
					"icon": "&#xe61f;"
				}
			]
var second = [
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "红米 Pro6"
				},
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "小米MIX 3"
				},
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "小米MIX 3"
				},
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "小米MIX 3"
				},
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "小米MIX 3"
				},
				{
					"img": "indexImg/carousel-xiaomi3.png",
					"Name": "小米MIX 3"
				}
			]

			$(function(){
				$.each(first,function(index,data){
					var sFirst=`<li class="first-level-item">
									<a href="PhoneList.html" class="first-level-title">
										${data.title}
										<span class="iconfont title-icon">${data.icon}</span>
									</a>
									<div class="second-memu">
										<ul class="memu-comment memu-first"></ul>
										<ul class="memu-comment memu-second"></ul>
										<ul class="memu-comment memu-third"></ul>
										<ul class="memu-comment memu-four"></ul>
									</div>
								</li>`; 
//						    console.log(sFirst)
					$('.list-first-level').append(sFirst);
				})
				$.each(second,function(index,data){
					var sSecond=`<li class="memu-comment-li">
									<a href="productContent.html" class="memu-content">
										<img src="${data.img}" alt="" class="contentImg" />
										<span class="contentSpan">${data.Name}</span>
									</a>	
								</li>`; 
//						    console.log(sSecond)
					$('.memu-first').append(sSecond);
					$('.memu-second').append(sSecond);
					$('.memu-third').append(sSecond);
					$('.memu-four').append(sSecond);
				})
			})



var list = [
				{
					"Name": "小米手机"
				},
				{
					"Name": "红米"
				},
				{
					"Name": "电视"
				},
				{
					"Name": "笔记本"
				},
				{
					"Name": "家电"
				},
				{
					"Name": "新品"
				},
				{
					"Name": "路由器"
				},
				{
					"Name": "智能硬件"
				},
				{
					"Name": "服务"
				},
				{
					"Name": "社区"
				}
			]

var child = [
				{
					"flag": "新品",
					"img": "indexImg/xiaomi-MIX 3.png",
					"Name": "小米MIX 3",
					"price": "3299元起"
				},
				{
					"flag": "新品",
					"img": "indexImg/xiaomi-MIX 3.png",
					"Name": "小米MIX 3",
					"price": "3299元起"
				},
				{
					"flag": "新品",
					"img": "indexImg/xiaomi-MIX 3.png",
					"Name": "小米MIX 3",
					"price": "3299元起"
				},
				{
					"flag": "新品",
					"img": "indexImg/xiaomi-MIX 3.png",
					"Name": "小米MIX 3",
					"price": "3299元起"
				},
				{
					"flag": "新品",
					"img": "indexImg/xiaomi-MIX 3.png",
					"Name": "小米MIX 3",
					"price": "3299元起"
				}
			]
			$(function(){
				$.each(list,function(index,data){
					var sList=`<li class="list-item l">
									<a href="#" class="list-p">
										<span class="p-text">${data.Name}</span>
									</a>
									<div class="item-child">
										<ul class="child-box-list"></ul>
									</div>		
								</li>`; 
//						    console.log(sList)
					$('.nav-list').append(sList);
				})
				$.each(child,function(index,data){
					var sChild=`<li class="list-first l">
									<div class="flag">${data.flag}</div>
									<div class="list-img">
										<a href="#">
											<img src="${data.img}" alt="" />
										</a>
									</div>
									<div class="list-title" style="margin-top: 10px;">
										<a href="#">${data.Name}</a>
									</div>
									<p class="price" style="color: #EF5B00;">${data.price}</p>
								</li>`; 
//						    console.log(sChild)
					$('.child-box-list').append(sChild);
				})
//				$('.list-item').hover(function(){
//				//.slidedown  向下滑
//					$('.item-child').slideDown('5s');
//				})
//				$('.nav-list').mouseout(function(){
//					//.slideup  向上滑
//					$('.child-box-list').slideUp('5s');
//				})
			})
			
var keyList = [
				{
					"key": "小米6X",
					"Name": "小米6X",
					"res": "约有6件"
				},
				{
					"key": "小米MIX 2S",
					"Name": "小米MIX 2S",
					"res": "约有6件"
				},
				{
					"key": "黑鲨游戏手机",
					"Name": "黑鲨游戏手机",
					"res": "约有6件"
				},
				{
					"key": "红米Note 5",
					"Name": "红米Note 5",
					"res": "约有6件"
				},
				{
					"key": "红米5A",
					"Name": "红米5A",
					"res": "约有6件"
				},
				{
					"key": "小米电视4C",
					"Name": "小米电视4C",
					"res": "约有6件"
				},
				{
					"key": "电视32英寸",
					"Name": "电视32英寸",
					"res": "约有6件"
				},
				{
					"key": "笔记本pro",
					"Name": "笔记本pro",
					"res": "约有6件"
				},
				{
					"key": "空气净化器",
					"Name": "空气净化器",
					"res": "约有6件"
				},
				{
					"key": "净水器",
					"Name": "净水器",
					"res": "约有6件"
				}
			]

			$(function(){
				$.each(keyList,function(index,data){
					var sKeyList=`<li data-key="${data.key}">
									<a href="#">
										${data.Name}
										<span class="result">${data.res}</span>
									</a>
								</li>`; 
//						    console.log(sKeyList)
					$('.keyList').append(sKeyList);
				})
				
				$('#search').click(function(){
					$('.form-list').css('display','block');
					$('#search').css('border','1px solid #ff6700');
					$('.form-span').css('border','1px solid #ff6700');
					$('.form-hotWord').css('display','none');
				})
				$('#search').blur(function(){
					$('.form-list').css('display','none');
					$('#search').css('border','');
					$('.form-span').css('border','');
					$('.form-hotWord').css('display','block');
				})
			})


//-----------------------------------------------购物车
$(function(){
	$('.nav-two-a').mouseover(function(){
		$('.nav-two').css('background','white');
		$('.nav-two-a').css('color','#ef5b00');
	})
	$('.nav-two-a').mouseout(function(){
		$('.nav-two').css('background','#424242');
		$('.nav-two-a').css('color','#b0b0b0');
	})
	$('.memu').mouseover(function(){
		$('.nav-two').css('background','white');
		$('.nav-two-a').css('color','#ef5b00');
	})
	$('.memu').mouseout(function(){
		$('.nav-two').css('background','#424242');
		$('.nav-two-a').css('color','#b0b0b0');
	})
})


var content = [ {
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				},
				{
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				},
				{
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				},
				{
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				},
				{
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				},
				{
					"img": "indexImg/gifs.png",
					"name": "选购手机"
				}
			]
			
			$(function(){
				$.each(content,function(index,data){
					var sContent=`<li class="funtion-content l">
										<a href="#" class="content-p">
											<div class="p-div c">
												<img src="${data.img}" />
											</div>
											<span>${data.name}</span>
										</a>
									</li>`; 
//						    console.log(sContent)
					$('.box2-left-function').append(sContent);
				})
			})
			
var img = [ {
					"img": "indexImg/box201.jpg",
				},
				{
					"img": "indexImg/box202.jpg",
				},
				{
					"img": "indexImg/box203.jpg",
				}
			]
			
			$(function(){
				$.each(img,function(index,data){
					var sImg=`<li class="rignt-li-img l">
									<a>
										<img src="${data.img}" />
									</a>
								</li>`; 
//						    console.log(sImg)
					$('.rignt-img').append(sImg);
				})
			})