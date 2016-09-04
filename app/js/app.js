$(function() {
  //document ready...do shit

  /////////////////////////////////////////////
  // Random website tricks
  /////////////////////////////////////////////

  // fix image baseline
  // $('.comp-view img').baseline(24); // Apply a 24px baseline to all images on the page

  // dropnav state
  var dropped = false

  // show photo tooltip
  $('.camera').hover(
  	function() {
  		$('.photo-cred .tooltip').addClass('hovered');
  	},
  	function() {
  		$('.photo-cred .tooltip').removeClass('hovered');
  	}
  );

  // header scrolling magic
  function scrollIt() {
	  $(window).scroll(function(){
		  if($(this).scrollTop() > 1) {
		  	var wScroll = $(this).scrollTop();


		  	var headTop = $('header').offset().top;
		  	var offset = Math.max(0, wScroll/2 - 20);
		  	var offset2 = Math.max(0, wScroll/3 - 20)

		  	var skillsTop = $('.skills').offset().top;
		  	var headBottom = $('.feature').offset().top;

		  	$('.shadow').addClass('scrolled');

		  	if (wScroll > headTop && wScroll < headBottom) {
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
			  	if (wScroll > (skillsTop - 73)) {
			  		showDropNav();
			  	}
			  } else {
			  	if (wScroll < (skillsTop - 73)) {
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
		$('.dropnav').slideToggle(150);
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


  /////////////////////////////////////////////
  // Alllllll of the waypoints
  /////////////////////////////////////////////

  //rockem project
  var rockemPoint = new Waypoint({
    element: document.getElementById('js-rockem'),
    handler: function(direction) {
      if(direction == "down") {
      	$('#js-rockem .left-side').addClass('at-scroll');
        // $('#js-about-us .devices').animate({ top: -175, opacity: 1 }, {duration: 300, ease: "easeOutCirc"});
      }else{
      	$('#js-rockem .left-side').removeClass('at-scroll');
      }
    },
    //when the top becomes visible
    offset: function() {
      return this.element.clientHeight + 100
    }
  });

  //goodshep project
  var shepPoint = new Waypoint({
    element: document.getElementById('js-goodshep'),
    handler: function(direction) {
      if(direction == "down") {
      	$('#js-goodshep .left-side').addClass('at-scroll');
        // $('#js-about-us .devices').animate({ top: -175, opacity: 1 }, {duration: 300, ease: "easeOutCirc"});
      }else{
      	$('#js-goodshep .left-side').removeClass('at-scroll');
      }
    },
    //when the top becomes visible
    offset: function() {
      return this.element.clientHeight 
    }
  });



  //small projects
  var smallPoint = new Waypoint({
    element: document.getElementById('js-projects'),
    handler: function(direction) {
      if(direction == "down") {
        $('#js-projects .comp-view').addClass('at-scroll');
        // $('#js-about-us .devices').animate({ top: -175, opacity: 1 }, {duration: 300, ease: "easeOutCirc"});
      }else{
        $('#js-projects .comp-view').removeClass('at-scroll');
      }
    },
    //when the top becomes visible
    offset: function() {
      return this.element.clientHeight - 600
    }
  });

 
  /////////////////////////////////////////////
  // Engage
  /////////////////////////////////////////////

  contactAppear();
  scrollIt();



});