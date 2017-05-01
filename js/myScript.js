 $(document).ready(function(){
	
    //Image slider
    $(function() {		
		$('#slider').nivoSlider({
			effect: 'random',
			slices: 15,
			boxCols:24,
			boxRows: 4,
			animSpeed: 500,
			pauseTime: 5000,
			startSlide: 0,
			directionNav: true,
			controlNav: true,
			controlNavThumbs: false,
			pauseOnHover: true,
			manualAdvance: false,
			prevText: 'Prev',
			nextText: 'Next',
			randomStart: false,
			beforeChange: function(){},
			afterChange: function(){},
			slideshowEnd: function(){},
			lastSlide: function(){},
			afterLoad: function(){}
	});
			
	});
		
		
	//Vex dialog box
	$('p em').mouseover('click',function(){
		vex.dialog.alert({
                	message: 'Mars is home to the tallest mountain in the solar system.',
                	className: 'vex-theme-flat-attack'
            	});
	});	
	
	
	//Tool tip
	$('.tooltip').tooltipster({
		animation: 'fade',
		delay: 800,
		theme: 'tooltipster-punk',
		trigger: 'hover'
	});
	
	
	//Slinky Menu
    var slinky = $('#menu').slinky({
			title: true,
            resize: true
		});
		
		
	//Horizontal news ticker	
	//Was unable to get the controls working without it breaking other plugins	
	$(function () {
        $('#js-news').ticker(
		//speed: 0.10,           // The speed of the reveal
        //ajaxFeed: false,       // Populate jQuery News Ticker via a feed
        //feedUrl: false,        // The URL of the feed
	                       // MUST BE ON THE SAME DOMAIN AS THE TICKER
        //feedType: 'xml',       // Currently only XML
        //htmlFeed: true,        // Populate jQuery News Ticker via HTML
        //debugMode: true,       // Show some helpful errors in the console or as alerts
  	                       // SHOULD BE SET TO FALSE FOR PRODUCTION SITES!
        //controls: true,        // Whether or not to show the jQuery News Ticker controls
        //titleText: 'Latest',   // To remove the title set this to an empty String
        //displayType: 'reveal', // <a href="http://www.jqueryscript.net/animation/">Animation</a> type - current options are 'reveal' or 'fade'
        //direction: 'ltr'       // Ticker direction - current options are 'ltr' or 'rtl'
        //pauseOnItems: 2000,    // The pause on a news item before being replaced
        //fadeInSpeed: 600,      // Speed of fade in animation
        //fadeOutSpeed: 300      // Speed of fade out animation
		);
    });
	
	
//News ticker 
	var dd = $('.vticker').easyTicker({
		direction: 'up',		//direction 'down' left a blank space which looked awful
		easing: 'easeOutBounce', //other options: easeOutCubic easeInOutCubic easeOutSine easeInOutSine easeInExpo easeInOutElastic
		speed: '3000',
		interval: 4000,
		height: 'auto',
		visible: 1,
		mousePause: 0,
		controls: {
			up: '.up',
			down: '.down',
			toggle: '.toggle',
			stopText: 'Stop !!!'
		}
	}).data('easyTicker');
	
	
	
	$('.vis').click(function(){
		dd.options['visible'] = 3;
		
	});
	
	$('.visall').click(function(){
		dd.stop();
		dd.options['visible'] = 0 ;
		dd.start();
	});
	

	
});//end of functions