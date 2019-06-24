var footer = [
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				},
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				},
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				},
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				},
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				},
				{
					"title": "帮助中心",
					"first": "账户管理",
					"second": "账户管理",
					"third": "订单操作"
				}
			]

			$(function(){
				$.each(footer,function(index,data){
					var sFooter=`<dl class="footer-second-list c">
									<dt class="footer-dt">${data.title}</dt>
									<dd class="footer-dd"><a href="#">${data.first}</a></dd>
									<dd class="footer-dd"><a href="#">${data.second}</a></dd>
									<dd class="footer-dd"><a href="#">${data.third}</a></dd>					
								</dl>`; 
//						    console.log(sFooter)
					$('.footer-container-seconde').append(sFooter);
				})
			})
			

var last = [
				{
					"title": "MIUI",
				},
				{
					"title": "米家",
				},
				{
					"title": "米聊",
				},
				{
					"title": "多看",
				},
				{
					"title": "游戏",
				},
				{
					"title": "路由器",
				},
				{
					"title": "米粉卡",
				},
				{
					"title": "政企服务",
				},
				{
					"title": "小米天猫店",
				},
				{
					"title": "隐私政策",
				},
				{
					"title": "商城用户协议",
				},
				{
					"title": "账号协议",
				},
				{
					"title": "问题反馈",
				},
				{
					"title": "廉正举报",
				},
				{
					"title": "诚信合规",
				},
				{
					"title": "Select Region"
				}
			]

			$(function(){
				$.each(last,function(index,data){
					var sLast=`<span class="line">|</span>
					<a href="#" class="last-a">${data.title}</a>`;
//						    console.log(sLast)
					$('.lastBox-first').append(sLast);
				})
			})
			
var LastImg = [
				{
					"img": "indexImg/lastBox01.png"
				},
				{
					"img": "indexImg/lastBox02.png"
				},
				{
					"img": "indexImg/lastBox03.png"
				},
				{
					"img": "indexImg/lastBox04.png"
				},
				{
					"img": "indexImg/lastBox05.png"
				}
			]

			$(function(){
				$.each(LastImg,function(index,data){
					var sLastImg=`<a href="#" class="lastBox-img-a">
									<img src="${data.img}" alt="" />
								</a>`;
//						    console.log(sLastImg)
					$('.lastBox-imgList').append(sLastImg);
				})
			})