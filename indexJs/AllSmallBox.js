var comment = [
				{
					"img": "indexImg/comment01.jpg",
					"Name": "包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...",
					"from": "来自于 HZG 的评价",
					"title": "米家压力IH电饭煲",
					"price": "850元"
				},
				{
					"img": "indexImg/comment01.jpg",
					"Name": "包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...",
					"from": "来自于 HZG 的评价",
					"title": "米家压力IH电饭煲",
					"price": "850元"
				},
				{
					"img": "indexImg/comment01.jpg",
					"Name": "包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...",
					"from": "来自于 HZG 的评价",
					"title": "米家压力IH电饭煲",
					"price": "850元"
				},
				{
					"img": "indexImg/comment01.jpg",
					"Name": "包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...",
					"from": "来自于 HZG 的评价",
					"title": "米家压力IH电饭煲",
					"price": "850元"
				}
			]

			$(function(){
				$.each(comment,function(index,data){
					var sComment=`<li class="comm-ul-li">
									<div class="comm-ul-li-img">
										<a href="#" class="comm-img-a">
											<img src="${data.img}" alt="" />
										</a>
									</div>
									<p class="comm-p">
										<a href="#" class="comm-p-a">${data.Name}</a>
									</p>
									<p class="comm-from">${data.from}</p>
									<div class="comm-info">
										<h3 class="comm-info-title">
											<a href="#" class="comm-p-a">${data.title}</a>
										</h3>
										<span class="sep">|</span>
										<p class="comm-price">${data.price}</p>
									</div>
								</li>`; 
//						    console.log(sComment)
					$('.comm-imgBox-ul').append(sComment);
				})
			})
			




var video = [
				{
					"img": "indexImg/video01.jpg",
					"title": "一团火",
					"desc": "小米创业8年内部纪录片（手机篇）"
				},
				{
					"img": "indexImg/video01.jpg",
					"title": "一团火",
					"desc": "小米创业8年内部纪录片（手机篇）"
				},
				{
					"img": "indexImg/video01.jpg",
					"title": "一团火",
					"desc": "小米创业8年内部纪录片（手机篇）"
				},
				{
					"img": "indexImg/video01.jpg",
					"title": "一团火",
					"desc": "小米创业8年内部纪录片（手机篇）"
				}
			]

			$(function(){
				$.each(video,function(index,data){
					var sVideo=`<li class="vi-ul-li">
									<div class="li-video-img">
										<a href="#" class="video-img-a">
											<img src="${data.img}" alt="" />
											<svg class="icon video-a-icon video-icon" aria-hidden="true">
											 	<use xlink:href="#icon-shipin"></use>
											</svg>
										</a>
									</div>
									<h3 class="video-title">
										<a href="#" class="video-title-a">${data.title}</a>
									</h3>
									<p class="video-desc">${data.desc}</p>
								</li>`; 
//						    console.log(sVideo)
					$('.video-ListBox-ul').append(sVideo);
				})
			})