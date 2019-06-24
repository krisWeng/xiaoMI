var smallpicList = [
				{
					"img": "PhoneListImg/SmallPic01.jpg",
					"title": "小米8",
					"desc": "全球首款双频GPS，骁龙845",
					"b": "2299",
					"del": "2699元"
				},
				{
					"img": "PhoneListImg/SmallPic01.jpg",
					"title": "小米8",
					"desc": "全球首款双频GPS，骁龙845",
					"b": "2299",
					"del": "2699元"
				}
			]
			$(function(){
				$.each(smallpicList,function(index,data){
					var sSmallpicList =`<div class="SmallBoxPic-List BigPic-shadow">
											<div class="SmallBoxPhonePic">
												<a href="#">
													<img src="${data.img}" alt="" class="AllPicImg" />
												</a>
											</div>
											<h3 class="SmallBoxPhonePic-title">
												<a href="#">
													${data.title}
												</a>
											</h3>
											<p class="SmallBoxPhonePic-desc">${data.desc}</p>
											<p class="SmallBoxPhonePic-price">
												<b>${data.b}</b>元起<del>${data.del}</del>
											</p>
										</div>`; 
//						    console.log(sSmallpicList)
					$('.phoneList-phoneProductBox').append(sSmallpicList);
				})
			})
