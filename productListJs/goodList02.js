var goods = [
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"desc": "适用于 红米6",
					"title": "红米6 高透软胶保护套",
					"price": "19元",
					"smallImg01": "../productListImg/goodsListSmallImg01.jpg",
					"smallImg02": "../productListImg/goodsListSmallImg02.jpg"
					
				},
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"desc": "适用于 红米6",
					"title": "红米6 高透软胶保护套",
					"price": "19元",
					"smallImg01": "../productListImg/goodsListSmallImg01.jpg",
					"smallImg02": "../productListImg/goodsListSmallImg02.jpg"
				},
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"desc": "适用于 红米6",
					"title": "红米6 高透软胶保护套",
					"price": "19元",
					"smallImg01": "../productListImg/goodsListSmallImg01.jpg",
					"smallImg02": "../productListImg/goodsListSmallImg02.jpg"
				}
			]

			$(function(){
				$.each(goods,function(index,data){
					var sGoods=`<div class="productList-goods-item">
									<div class="productList-goods-img">
										<a href="#"><img src="${data.img}" /></a>
									</div>
									<p class="productList-goods-desc">${data.desc}</p>
									<h2 class="productList-goods-title">
										<a href="#">${data.title}</a>
									</h2>
									<p class="productList-goods-price">${data.price}</p>
									<div class="productList-goods-imgBtn">
										<ul class="productList-imgBtnList">
											<li>
												<img src="${data.smallImg01}" alt="" />
											</li>
											<li>
												<img src="${data.smallImg02}" alt="" />
											</li>
										</ul>
									</div>
									<div class="productList-goods-otherList">
										<a href="#">
											<svg class="icon buy-Icon" aria-hidden="true">
												<use xlink:href="#icon-aixin"></use>
											</svg>
											<span class="buy-p">喜欢</span>
										</a>
										<a href="#">								
											<span class="car-p">加入购物车</span>
											<svg class="icon buy-Icon" aria-hidden="true">
												<use xlink:href="#icon-gouwuchekong"></use>
											</svg>
										</a>
									</div>
									<div class="productList-goods-flag">有赠品</div>
								</div>`;
//						    console.log(sGoods)
					$('.List-goods-BoxList').append(sGoods);
				})
				
var lastBox = [
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
					
				},
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/goodsListBigImg01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				},
				{
					"img": "../productListImg/LastImgList02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "69元",
					"desc": "7人好评"
				}
			]

				$.each(lastBox,function(index,data){
					var sLastBox=`<li class="content-Box02-goods-li">
									<dl>
										<dt>
											<a href="#">
												<img src="${data.img}" alt="" />
											</a>
										</dt>
										<dd class="content-Box02-li-name">
											<a href="#">${data.title}</a>
										</dd>
										<dd class="content-Box02-li-price">${data.price}</dd>
										<dd class="content-Box02-li-tips">
											${data.desc}
											<a href="#" class="content-Box02-li-btn">加入购物车</a>
										</dd>
									</dl>
								</li>`;
//						    console.log(sLastBox)
					$('.content-Box02-goods-ul').append(sLastBox);
				})
				
				var iNow = 0;
        		var timer;
        		
        		function changePic(){
        			var nowLeft = -iNow*1230;
        			console.log( nowLeft );
        			$('.content-Box02-goods-ul').css('left',nowLeft);
        		}
        		
        		//向前
			 	$('.dot-Now').click( function(){
			 		clearInterval(timer);
			 		iNow--;
			 		if(iNow < 0){
			 			iNow = 1;
			 			$('.content-Box02-goods-ul').css('transition','left 0.5s');
        				$('.dot-Now').addClass('dot');
        				$('.dot-Next').removeClass('dot');
			 		}
			 		console.log('前'+iNow);
			 		changePic();
			 	})
			 	
			 	//向后
			 	$('.dot-Next').click( function(){
			 		clearInterval(timer);
			 		iNow++;
			 		if(iNow > 1){
			 			iNow = 0;
			 			$('.content-Box02-goods-ul').css('transition','left 0.5s');
			 			$('.dot-Next').addClass('dot');
			 			$('.dot-Now').removeClass('dot');
			 		}
			 		console.log('后'+iNow);
			 		changePic();
			 	})
			})