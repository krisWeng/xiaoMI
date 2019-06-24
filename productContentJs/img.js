$(function(){
	$('.close').click(function(){
		$('#login-natic').css('display','none');
	})

	//--------------------------------------------------------------------------
	$('.img-view-box').mousemove(function(ev){
		var nowleft = Math.floor(ev.clientX - $('.img-view-box').offset().left)-50;
		var nowtop  = ev.clientY - $('.img-view-box').offset().top+200;
		$('#sbox').css({'left':nowleft,'top':nowtop,'display':'block'});
		$('#bPic').css('display','block');
		if(nowleft < 0){
	        nowleft = 0;
	    }
		if(nowleft > 460){
	        nowleft = 460;
	    }
	    if( nowtop <= 0){
	        nowtop = 0;
	    }
	 	if( nowtop > 450){
	        nowtop = 450;
	    }
		$('#sbox').css({'left':nowleft,'top':nowtop});
		$('#b').css({'left':-nowleft*3,'top':-nowtop*3}); 
	})
	$('.img-view-box').mouseout(function(){
		$('#bPic').css('display','none');
		$('#sbox').css('display','none');
	})


//----------------------------------------------------------------
	for(var i=0; i<$('.pic-btn').length; i++){
	 	bind(i)
	 	console.log(i);
	}
	 
	function bind(index){
	 	$(".pic-btn").click( function(){
	 		var s = $('.pic-btn').index(this);
	 		var path = 'productContentImg/imgList'+s+'.jpg'
	 		$('.view-img-listBox').attr('src',path);
	 		console.log(s)
	 		$('#b').attr('src',path);
	 	})
	}
	
	var offsetTop01 = $('.pro-view-img-con').offset().top;
	$(window).scroll(function(){
		var high = $(window).scrollTop();
		console.log(high)
		if(high>=offsetTop01&&high<=1100){
			$('.pro-view-img-con').css({'position':'fixed','top':'0px'});
		}else{
			$('.pro-view-img-con').css('position','static');
		}
		if(high>=300){
			$('.img-view-box').mousemove(function(){
				$('#bPic').css('display','none');
				$('#sbox').css('display','none');
			})
		}else{
			$('.img-view-box').mousemove(function(){
				$('#bPic').css('display','block');
				$('#sbox').css('display','block');
			})
		}
	})
})