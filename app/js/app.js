$(function() {
  //document ready...do shit

  /////////////////////////////////////////////
  // Random website tricks
  /////////////////////////////////////////////

  var dropped = false

  // header scrolling magic
  function scrollIt() {
	  $(window).scroll(function(){
		  if($(this).scrollTop() > 1) {
		  	var wScroll = $(this).scrollTop();


		  	var headTop = $('header').offset().top;
		  	var offset = Math.max(0, wScroll/2 - 20);
		  	var offset2 = Math.max(0, wScroll/3 - 20)

		  	var skillsTop = $('.skills').offset().top;

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

		  	if (dropped == false) {
			  	if (wScroll > (skillsTop -100)) {
			  		showDropNav();
			  	}
			  } else {
			  	if (wScroll < (skillsTop -100)) {
			  		showDropNav();
			  	}
			  }
		  }
	  });
	}

	function contactAppear() {
		$('.js-contact').addClass('appear');
	}


	function showDropNav() {
		dropped = !dropped;
		$('.dropnav').slideToggle(200);
	}


  // type out trigger
  // $(".info span").typed({
  //     strings: ["Hi, my name is Joey Gordon. I like to build things for <strong>iOS</strong> and the <strong>web</strong>. I wear a lot of black, eat a lot of <strong>cookies</strong>, and enjoy Starbucks more than I probably should.*"],
  //     typeSpeed: 0,
  //     callback: function() {
  //     	contactAppear();
  //       scrollIt();
  //     }
  // });
  
  contactAppear();
  scrollIt();

});