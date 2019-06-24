var imgList = [
				{
					"img": "indexImg/LevelBy01.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy02.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy03.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy04.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy05.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy06.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy07.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy08.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy09.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy10.png",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy11.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy12.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy13.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy14.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy15.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				},
				{
					"img": "indexImg/LevelBy16.jpg",
					"title": "小米电视4C 50英寸 黑色",
					"desc": "4K HDR，钢琴烤漆",
					"price": "1899",
					"del": "2199元",
				}
				
			]

			$(function(){
				$.each(imgList,function(index,data){
					var sImgList=`<li class="imgList-li">
										<a href="#">
											<div class="Li-bg"></div>
										</a>
										<div class="imgList-content">
											<a class="content-a">
												<img src="${data.img}" class="imgList-a-img c" />
											</a>
											<h3 class="imgTitle">${data.title} </h3>
											<p class="desc">${data.desc}</p>
											<p class="imgList-price">
												<span style="color: #ff6709;">${data.price}</span>
												<span style="color: #ff6709;">元</span>
												<del style="color: #b0b0b0;">${data.del}</del>
											</p>
										</div>
									</li>`; 
//						    console.log(sImgList)
					$('.imgList-ul').append(sImgList);
				})
				
				var iNow = 0;
	    		var timer;
	    		
	    		function changePic(){
	    			var nowLeft = -iNow*992;
	    			console.log( nowLeft );
	    			$('.imgList-ul').css('left',nowLeft);
	    		}
	    		
	    		$('.left').attr("disabled", "disabled");
	    		//向前
			 	$('.left').click( function(){
			 		clearInterval(timer);
			 		iNow--;
			 		if(iNow == 0){
//			 			iNow = 3;
			 			$('.imgList-ul').css('transition','left 0.5s');
			 			$('.left').attr("disabled", "disabled");
			 			$('.right').removeAttr("disabled");
			 		}
//			 		console.log('前'+iNow);
			 		changePic();
			 	})
			 	
			 	//向后
			 	$('.right').click( function(){
			 		clearInterval(timer);
			 		iNow++;
			 		$('.left').removeAttr("disabled");
			 		if(iNow == 3){
//			 			iNow = 0;
			 			$('.imgList-ul').css('transition','left 0.5s');
						$('.right').attr("disabled", "disabled");
			 		}
//			 		console.log('后'+iNow);
			 		changePic();
			 	})
	    	})