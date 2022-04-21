$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;

    $('#intro').mousemove(function(event) {

        console.log(event.pageX, event.pageY);

    //		let cursorX = event.pageX / $(this).width();
        let cursorY = (event.pageY) / $(this).height();

    //		let settingX = Math.floor(cursorX * wdthmax);
        let settingY = Math.floor(cursorY * wghtmax);

        // console.log( settingX, settingY)

        $("#bigletter").css({
    //			"--wdth": settingX,
            "--wght": settingY
        });

    });
    });
