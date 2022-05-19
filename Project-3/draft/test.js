$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;

    Let fontV = document.getElementById('bigletter');

    window.addEventListener('scroll',function(){
        var value  = window.scrollY;
        fontV.style.bottom = value * 0.1 + 'px';
    })
	//mouseposition
    window.addEventListener('scroll',function(){
    var value=window.scrollY;

})

	$('#intro').mousemove(function(event) {

		console.log(event.pageX, event.pageY);

		let cursorX = event.pageX / $(this).width();
		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
			"--wdth": settingX,
			"--wght": settingY
		});

	});
});
