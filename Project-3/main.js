$(document).ready(function(){

    const wghtmax = 999;

   

    //HERO CURSOR TEXT VARIATION ON CURSOR
  

    //1st Scroll Interaction Section
    let scrollPosition;
    let windowHeight;
    let offsetSection3;
  

    $(window).scroll(function(){
        scrollPosition = $(document).scrollTop();
        windowHeight = $('.section-1-sticky').height();
        offsetSection3 = $('.section-1').offset().top;
       

        // let cursorX = event.pageX / $(this).width();
        // let settingX = Math.floor(cursorX * wghtmax);

        let scrollPercentage1 = (scrollPosition - offsetSection3) / (windowHeight*1.1);
        let position1 = Math.floor(scrollPercentage1 * 100)
        if (position1 < 0) {
            position1 = 0
        } else if (position1 > 1000) {
            position1 = 1000
        }
        // console.log (settingX1);

      

        $(".text-main").css({
			"--wght-1": position1
		});
       

    });

    $( ".button-2" ).click(function() {
        $(".section-2-1").addClass("disable");
        $(".section-3").removeClass("disable");
    
    });
    $( ".button-3" ).click(function() {
        $(".section-3").addClass("disable");
        $(".section-4").removeClass("disable");
    
    });
    $( ".button-4" ).click(function() {
        $(".section-4").addClass("disable");
        $(".section-5").removeClass("disable");
    
    });
    $( ".button-5" ).click(function() {
        $(".section-5").addClass("disable");
        $(".section-6").removeClass("disable");
    
    });
    $( ".button-6" ).click(function() {
        $(".section-6").addClass("disable");
        $(".section-7").removeClass("disable");
    
    });
    $( ".button-7" ).click(function() {
        $(".section-7").addClass("disable");
        $(".section-8").removeClass("disable");
    
    });
    $( ".button-8" ).click(function() {
        $(".section-8").addClass("disable");
        $(".section-9").removeClass("disable");
    
    });

    $( ".golibrary" ).click(function() {
        $(".section-9").addClass("disable");
        $(".section-10").removeClass("disable");
    
    });

    $( ".goback" ).click(function() {
        $(".section-9").addClass("disable");
        $(".section-2-1").removeClass("disable");
    
    });

    $( ".goback-2" ).click(function() {
        $(".section-10").addClass("disable");
        $(".section-2-1").removeClass("disable");
    
    });
    

    $('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#letterchange').css("--"+slidertype, value);

	});



});