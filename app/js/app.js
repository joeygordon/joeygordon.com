$(function() {
  //document ready...do shit

  /////////////////////////////////////////////
  // Random website tricks
  /////////////////////////////////////////////


  // header scrolling magic
  $(window).scroll(function(){
	  if($(this).scrollTop() > 1) {
	  	var wScroll = $(this).scrollTop();


	  	var headTop = $('header').offset().top;
	  	var offset = Math.max(0, wScroll/2 - 20);
	  	var offset2 = Math.max(0, wScroll/3 - 20)

	  	$('.shadow').addClass('scrolled');

	  	if (wScroll > headTop) {
		  	$('.info').css({'transform': 'translate(0px, -'+ offset +'px)'});
		  	$('.shadow').css({'transform': 'translate(0px, -'+ offset2 +'px)'});
	  	}

	  	if (wScroll > headTop + 50) {
	  		$('.shadow').addClass('scrolled');
	  		$('.chill').addClass('scrolled');
	  	}else{
	  		$('.shadow').removeClass('scrolled');
	  		$('.chill').removeClass('scrolled');
	  	}
	  }
  });



  // tooltip stuff
  

});