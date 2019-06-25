var phone = [
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元"
				}
			]

			$(function(){
				$.each(phone,function(index,data){
					var sPhone=`<li class="list-content-ul-li l All-li">
										<div class="phone-flag">${data.flag}</div>
										<div class="phone-li-img">
											<a href="#" class="phone-li-a">
												<img src="${data.img}" alt="" />
											</a>
										</div>
										<h3 class="phone-title">
											<a href="#" class="phone title-a">${data.Name}</a>
										</h3>
										<p class="phone-desc">${data.desc}</p>
										<p class="phone-price">${data.price}</p>
									</li>`; 
//						    console.log(sPhone)
					$('.list-content-ul').append(sPhone);
				})
			})


var hot = [
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/phone01.jpg",
					"Name": "小米8 青春版 4GB+64GB",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				}
			]

			$(function(){
				$.each(hot,function(index,data){
					var sHot=`<li class="list-content-ul-li All-li l">
										<div class="AllBox-flag">${data.flag}</div>
										<div class="AllBox-li-img">
											<a href="#" class="AllBox-li-a">
												<img src="${data.img}" alt="" />
											</a>
										</div>
										<h3 class="AllBox-title">
											<a href="#" class="phone title-a">${data.Name}</a>
										</h3>
										<p class="AllBox-desc">${data.desc}</p>
										<p class="AllBox-price">${data.price}</p>
										<div class="box-review">
											<a href="#" class="box-review-a">
												<span class="review-p">${data.rep}</span>
												<span class="review-from">${data.refrom}</span>
											</a>
										</div>
									</li>`; 
//						    console.log(sHot)
					$('.hotBox').append(sHot);
				})
			})
			
var TV = [
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/TV01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				}
			]

			$(function(){
				$.each(TV,function(index,data){
					var sTV=`<li class="list-content-ul-li l Phone-li">
										<div class="AllBox-flag">${data.flag}</div>
										<div class="AllBox-li-img">
											<a href="#" class="AllBox-li-a">
												<img src="${data.img}" alt="" />
											</a>
										</div>
										<h3 class="AllBox-title">
											<a href="#" class="phone title-a">${data.Name}</a>
										</h3>
										<p class="AllBox-desc">${data.desc}</p>
										<p class="AllBox-price">${data.price}</p>
										<div class="box-review">
											<a href="#" class="box-review-a">
												<span class="review-p">${data.rep}</span>
												<span class="review-from">${data.refrom}</span>
											</a>
										</div>
									</li>`; 
//						    console.log(sTV)
					$('.TVBox').append(sTV);
				})
			})

var Computer = [
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/Computer01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				}
			]

			$(function(){
				$.each(Computer,function(index,data){
					var sComputer=`<li class="list-content-ul-li l Phone-li">
										<div class="AllBox-flag">${data.flag}</div>
										<div class="AllBox-li-img">
											<a href="#" class="AllBox-li-a">
												<img src="${data.img}" alt="" />
											</a>
										</div>
										<h3 class="AllBox-title">
											<a href="#" class="phone title-a">${data.Name}</a>
										</h3>
										<p class="AllBox-desc">${data.desc}</p>
										<p class="AllBox-price">${data.price}</p>
										<div class="box-review">
											<a href="#" class="box-review-a">
												<span class="review-p">${data.rep}</span>
												<span class="review-from">${data.refrom}</span>
											</a>
										</div>
									</li>`; 
//						    console.log(sComputer)
					$('.ComputerBox').append(sComputer);
				})
			})
				
var Home = [
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				},
				{
					"flag": "新品",
					"img": "indexImg/home01.jpg",
					"Name": "小米电视4X 43英寸",
					"desc": "潮流镜面渐变色，2400万自拍旗舰",
					"price": "1399元",
					"rep": "漂亮，和老婆一样漂亮",
					"refrom": "来自于 刘一祯 的评价"
				}
			]

			$(function(){
				$.each(Home,function(index,data){
					var sHome=`<li class="list-content-ul-li l Phone-li">
										<div class="AllBox-flag">${data.flag}</div>
										<div class="AllBox-li-img">
											<a href="#" class="AllBox-li-a">
												<img src="${data.img}" alt="" />
											</a>
										</div>
										<h3 class="AllBox-title">
											<a href="#" class="phone title-a">${data.Name}</a>
										</h3>
										<p class="AllBox-desc">${data.desc}</p>
										<p class="AllBox-price">${data.price}</p>
										<div class="box-review">
											<a href="#" class="box-review-a">
												<span class="review-p">${data.rep}</span>
												<span class="review-from">${data.refrom}</span>
											</a>
										</div>
									</li>`; 
//						    console.log(sHome)
					$('.homeBox').append(sHome);
				})
			})

		$(function(){
			$('.home-hot').hover(function(){
				$('.home-hot').addClass('tab-list-li');
				$('.home-tv').removeClass('tab-list-li');
				$('.home-computer').removeClass('tab-list-li');
				$('.home-home').removeClass('tab-list-li');
				$('.home-hotBox').css('display','block');
				$('.home-TVBox').css('display','none');
				$('.home-ComputerBox').css('display','none');
				$('.home-homeBox').css('display','none');
			})
			$('.home-tv').hover(function(){
				$('.home-hot').removeClass('tab-list-li');
				$('.home-tv').addClass('tab-list-li');	
				$('.home-computer').removeClass('tab-list-li');
				$('.home-home').removeClass('tab-list-li');
				$('.home-hotBox').css('display','none');
				$('.home-TVBox').css('display','block');
				$('.home-ComputerBox').css('display','none');
				$('.home-homeBox').css('display','none');
			})
			$('.home-computer').hover(function(){
				$('.home-hot').removeClass('tab-list-li');
				$('.home-tv').removeClass('tab-list-li');	
				$('.home-computer').addClass('tab-list-li');
				$('.home-home').removeClass('tab-list-li');
				$('.home-hotBox').css('display','none');
				$('.home-TVBox').css('display','none');
				$('.home-ComputerBox').css('display','block');
				$('.home-homeBox').css('display','none');
			})
			$('.home-home').hover(function(){
				$('.home-hot').removeClass('tab-list-li');
				$('.home-tv').removeClass('tab-list-li');	
				$('.home-computer').removeClass('tab-list-li');
				$('.home-home').addClass('tab-list-li');
				$('.home-hotBox').css('display','none');
				$('.home-TVBox').css('display','none');
				$('.home-ComputerBox').css('display','none');
				$('.home-homeBox').css('display','block');
			})
			
			//----------------------------------------------------------------------
			$('.smart-hot').hover(function(){
				$('.smart-hot').addClass('tab-list-li');
				$('.smart-tv').removeClass('tab-list-li');
				$('.smart-computer').removeClass('tab-list-li');
				$('.smart-home').removeClass('tab-list-li');
				$('.smart-hotBox').css('display','block');
				$('.smart-TVBox').css('display','none');
				$('.smart-ComputerBox').css('display','none');
				$('.smart-homeBox').css('display','none');
			})
			$('.smart-tv').hover(function(){
				$('.smart-hot').removeClass('tab-list-li');
				$('.smart-tv').addClass('tab-list-li');	
				$('.smart-computer').removeClass('tab-list-li');
				$('.smart-home').removeClass('tab-list-li');
				$('.smart-hotBox').css('display','none');
				$('.smart-TVBox').css('display','block');
				$('.smart-ComputerBox').css('display','none');
				$('.smart-homeBox').css('display','none');
			})
			$('.smart-computer').hover(function(){
				$('.smart-hot').removeClass('tab-list-li');
				$('.smart-tv').removeClass('tab-list-li');	
				$('.smart-computer').addClass('tab-list-li');
				$('.smart-home').removeClass('tab-list-li');
				$('.smart-hotBox').css('display','none');
				$('.smart-TVBox').css('display','none');
				$('.smart-ComputerBox').css('display','block');
				$('.smart-homeBox').css('display','none');
			})
			$('.smart-home').hover(function(){
				$('.smart-hot').removeClass('tab-list-li');
				$('.smart-tv').removeClass('tab-list-li');	
				$('.smart-computer').removeClass('tab-list-li');
				$('.smart-home').addClass('tab-list-li');
				$('.smart-hotBox').css('display','none');
				$('.smart-TVBox').css('display','none');
				$('.smart-ComputerBox').css('display','none');
				$('.smart-homeBox').css('display','block');
			})
			
			//----------------------------------------------------------------------
			$('.match-hot').hover(function(){
				$('.match-hot').addClass('tab-list-li');
				$('.match-tv').removeClass('tab-list-li');
				$('.match-computer').removeClass('tab-list-li');
				$('.match-home').removeClass('tab-list-li');
				$('.match-hotBox').css('display','block');
				$('.match-TVBox').css('display','none');
				$('.match-ComputerBox').css('display','none');
				$('.match-homeBox').css('display','none');
			})
			$('.match-tv').hover(function(){
				$('.match-hot').removeClass('tab-list-li');
				$('.match-tv').addClass('tab-list-li');	
				$('.match-computer').removeClass('tab-list-li');
				$('.match-home').removeClass('tab-list-li');
				$('.match-hotBox').css('display','none');
				$('.match-TVBox').css('display','block');
				$('.match-ComputerBox').css('display','none');
				$('.match-homeBox').css('display','none');
			})
			$('.match-computer').hover(function(){
				$('.match-hot').removeClass('tab-list-li');
				$('.match-tv').removeClass('tab-list-li');	
				$('.match-computer').addClass('tab-list-li');
				$('.match-home').removeClass('tab-list-li');
				$('.match-hotBox').css('display','none');
				$('.match-TVBox').css('display','none');
				$('.match-ComputerBox').css('display','block');
				$('.match-homeBox').css('display','none');
			})
			$('.match-home').hover(function(){
				$('.match-hot').removeClass('tab-list-li');
				$('.match-tv').removeClass('tab-list-li');	
				$('.match-computer').removeClass('tab-list-li');
				$('.match-home').addClass('tab-list-li');
				$('.match-hotBox').css('display','none');
				$('.match-TVBox').css('display','none');
				$('.match-ComputerBox').css('display','none');
				$('.match-homeBox').css('display','block');
			})
			
			//----------------------------------------------------------------------
			$('.accessories-hot').hover(function(){
				$('.accessories-hot').addClass('tab-list-li');
				$('.accessories-tv').removeClass('tab-list-li');
				$('.accessories-computer').removeClass('tab-list-li');
				$('.accessories-home').removeClass('tab-list-li');
				$('.accessories-hotBox').css('display','block');
				$('.accessories-TVBox').css('display','none');
				$('.accessories-ComputerBox').css('display','none');
				$('.accessories-homeBox').css('display','none');
			})
			$('.accessories-tv').hover(function(){
				$('.accessories-hot').removeClass('tab-list-li');
				$('.accessories-tv').addClass('tab-list-li');	
				$('.accessories-computer').removeClass('tab-list-li');
				$('.accessories-home').removeClass('tab-list-li');
				$('.accessories-hotBox').css('display','none');
				$('.accessories-TVBox').css('display','block');
				$('.accessories-ComputerBox').css('display','none');
				$('.accessories-homeBox').css('display','none');
			})
			$('.accessories-computer').hover(function(){
				$('.accessories-hot').removeClass('tab-list-li');
				$('.accessories-tv').removeClass('tab-list-li');	
				$('.accessories-computer').addClass('tab-list-li');
				$('.accessories-home').removeClass('tab-list-li');
				$('.accessories-hotBox').css('display','none');
				$('.accessories-TVBox').css('display','none');
				$('.accessories-ComputerBox').css('display','block');
				$('.accessories-homeBox').css('display','none');
			})
			$('.accessories-home').hover(function(){
				$('.accessories-hot').removeClass('tab-list-li');
				$('.accessories-tv').removeClass('tab-list-li');	
				$('.accessories-computer').removeClass('tab-list-li');
				$('.accessories-home').addClass('tab-list-li');
				$('.accessories-hotBox').css('display','none');
				$('.accessories-TVBox').css('display','none');
				$('.accessories-ComputerBox').css('display','none');
				$('.accessories-homeBox').css('display','block');
			})
			
			//----------------------------------------------------------------------
			$('.around-hot').hover(function(){
				$('.around-hot').addClass('tab-list-li');
				$('.around-tv').removeClass('tab-list-li');
				$('.around-computer').removeClass('tab-list-li');
				$('.around-home').removeClass('tab-list-li');
				$('.around-hotBox').css('display','block');
				$('.around-TVBox').css('display','none');
				$('.around-ComputerBox').css('display','none');
				$('.around-homeBox').css('display','none');
			})
			$('.around-tv').hover(function(){
				$('.around-hot').removeClass('tab-list-li');
				$('.around-tv').addClass('tab-list-li');	
				$('.around-computer').removeClass('tab-list-li');
				$('.around-home').removeClass('tab-list-li');
				$('.around-hotBox').css('display','none');
				$('.around-TVBox').css('display','block');
				$('.around-ComputerBox').css('display','none');
				$('.around-homeBox').css('display','none');
			})
			$('.around-computer').hover(function(){
				$('.around-hot').removeClass('tab-list-li');
				$('.around-tv').removeClass('tab-list-li');	
				$('.around-computer').addClass('tab-list-li');
				$('.around-home').removeClass('tab-list-li');
				$('.around-hotBox').css('display','none');
				$('.around-TVBox').css('display','none');
				$('.around-ComputerBox').css('display','block');
				$('.around-homeBox').css('display','none');
			})
			$('.around-home').hover(function(){
				$('.around-hot').removeClass('tab-list-li');
				$('.around-tv').removeClass('tab-list-li');	
				$('.around-computer').removeClass('tab-list-li');
				$('.around-home').addClass('tab-list-li');
				$('.around-hotBox').css('display','none');
				$('.around-TVBox').css('display','none');
				$('.around-ComputerBox').css('display','none');
				$('.around-homeBox').css('display','block');
			})
		})


var recommimgList = [
				{
					"img": "indexImg/recommed01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed01.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed02.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed03.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed03.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed03.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed03.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed03.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed04.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed04.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed04.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed04.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				},
				{
					"img": "indexImg/recommed04.jpg",
					"title": "黑鲨游戏手机 Helo 双滑轨保护壳",
					"price": "39元",
					"tips": "3人好评"
				}
			]

			$(function(){
				$.each(recommimgList,function(index,data){
					var sRecommimgList=`<li class="recomm-imgList-li">
										<dl>
											<dt>
												<a href="#">
													<img src="${data.img}" />
												</a>
											</dt>
											<dd class="recomm-Name c">
												<a href="#">${data.title} </a>
											</dd>
											<dd class="recomm-price">${data.price}</dd>
											<dd class="recomm-tips">${data.tips}</dd>
										</dl>
									</li>`; 
//						    console.log(sRecommimgList)
					$('.recomm-imgList-ul').append(sRecommimgList);
				})
				
				var iNow = 0;
	    		var timer;
	    		
	    		function changePic(){
	    			var nowLeft = -iNow*1240;
	    			console.log( nowLeft );
	    			$('.recomm-imgList-ul').css('left',nowLeft);
	    		}
	    		
	    		//向前
			 	$('.left').click( function(){
			 		clearInterval(timer);
			 		iNow--;
			 		if(iNow < 0){
			 			iNow = 3;
			 			$('.recomm-imgList-ul').css('transition','left 0.5s');
			 		}
			 		console.log('前'+iNow);
			 		changePic();
			 	})
			 	
			 	//向后
			 	$('.right').click( function(){
			 		clearInterval(timer);
			 		iNow++;
			 		if(iNow > 3){
			 			iNow = 0;
			 			$('.recomm-imgList-ul').css('transition','left 0.5s');
			 		}
			 		console.log('后'+iNow);
			 		changePic();
			 	})
	    	})
			


var contentBook = [
				{
					"title": "哈利·波特与被诅咒的孩子",
					"desc": "“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
					"price": "29.37元",
					"img": "indexImg/contentList01.png"
				},
				{
					"title": "哈利·波特与被诅咒的孩子",
					"desc": "“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
					"price": "29.37元",
					"img": "indexImg/contentList02.png"
				},
				{
					"title": "哈利·波特与被诅咒的孩子",
					"desc": "“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
					"price": "29.37元",
					"img": "indexImg/contentList03.png"
				}
			]

			$(function(){				
				$.each(contentBook,function(index,data){
					var sContentBook=`<li>
								<h4 class="BoxList-name">
									<a href="#" class="List-a">${data.title}</a>
								</h4>
								<p class="BoxList-desc">
									<a href="#" class="List-desc-a">${data.desc}</a>
								</p>
								<p class="BoxList-price">
									<a href="#" class="List-a">${data.price}</a>
								</p>
								<div class="BoxList-img c">
									<a href="#" class="List-img-a">
										<img src="${data.img}" />
									</a>
								</div>
							</li>`; 
//						    console.log(sContentBook)
					$('.conBox-List').append(sContentBook);
				})
			})
$(function(){
	var iNow = 0;
	var timer;
 	$('.Bookcircle').click(function(){
   		clearInterval(timer);
   		iNow = $(this).index();
		changePic();
 	})
	 	
	function changePic(){
		var nowLeft = -iNow*296;
		console.log( nowLeft );
		$('.bookList').css('left',nowLeft);
		$('.Bookcircle').eq(iNow).addClass('List-dot-act').siblings().removeClass('List-dot-act');
	}
	
	//向前
 	$('.book-left').click( function(){
 		clearInterval(timer);
 		iNow--;
 		if(iNow < 0){
 			iNow = 2;
 			$('.bookList').css('transition','');
 		}
 		console.log('前'+iNow);
 		changePic();
 	})
 	
 	//向后
 	$('.book-right').click(function(){
 		clearInterval(timer);
 		iNow++;
 		if(iNow >= 3){
 			iNow = 0;
 			$('.bookList').css('transition','');
 		}
 		console.log('后'+iNow);
 		changePic();
 	})
})
			
$(function(){
	var iNow = 0;
	var timer;
 	$('.themecircle').click(function(){
   		clearInterval(timer);
   		iNow = $(this).index();
		changePic();
 	})
	 	
	function changePic(){
		var nowLeft = -iNow*296;
		console.log( nowLeft );
		$('.themeList').css('left',nowLeft);
		$('.themecircle').eq(iNow).addClass('List-dot-act').siblings().removeClass('List-dot-act');
	}
	
	//向前
 	$('.theme-left').click( function(){
 		clearInterval(timer);
 		iNow--;
 		if(iNow < 0){
 			iNow = 2;
 			$('.themeList').css('transition','');
 		}
 		console.log('前'+iNow);
 		changePic();
 	})
 	
 	//向后
 	$('.theme-right').click( function(){
 		clearInterval(timer);
 		iNow++;
 		if(iNow >= 3){
 			iNow = 0;
 			$('.themeList').css('transition','');
 		}
 		console.log('后'+iNow);
 		changePic();
 	})
})

$(function(){
	var iNow = 0;
	var timer;
	$('.gamecircle').click(function(){
   		clearInterval(timer);
   		iNow = $(this).index();
		changePic();
 	})
	
	function changePic(){
		var nowLeft = -iNow*296;
		console.log( nowLeft );
		$('.gameList').css('left',nowLeft);
		$('.gamecircle').eq(iNow).addClass('List-dot-act').siblings().removeClass('List-dot-act');
	}
	
	//向前
 	$('.game-Left').click( function(){
 		clearInterval(timer);
 		iNow--;
 		if(iNow < 0){
 			iNow = 2;
 			$('.gameList').css('transition','');
 		}
 		console.log('前'+iNow);
 		changePic();
 	})
 	
 	//向后
 	$('.game-right').click( function(){
 		clearInterval(timer);
 		iNow++;
 		if(iNow >= 3){
 			iNow = 0;
 			$('.gameList').css('transition','');
 		}
 		console.log('后'+iNow);
 		changePic();
 	})
})

$(function(){
	var iNow = 0;
	var timer;
	$('.appcircle').click(function(){
   		clearInterval(timer);
   		iNow = $(this).index();
		changePic();
 	})
	
	function changePic(){
		var nowLeft = -iNow*296;
		console.log( nowLeft );
		$('.appList').css('left',nowLeft);
		$('.appcircle').eq(iNow).addClass('List-dot-act').siblings().removeClass('List-dot-act');	
	}
	
	//向前
 	$('.app-Left').click( function(){
 		clearInterval(timer);
 		iNow--;
 		if(iNow < 0){
 			iNow = 2;
 			$('.appList').css('transition','');
 		}
 		console.log('前'+iNow);
 		changePic();
 	})
 	
 	//向后
 	$('.app-right').click( function(){
 		clearInterval(timer);
 		iNow++;
 		if(iNow >= 3){
 			iNow = 0;
 			$('.appList').css('transition','');
 		}
 		console.log('后'+iNow);
 		changePic();
 	})
})