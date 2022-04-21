$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	//$('.axis-range').on('input', function(){

	//	let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

	//	const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

	//	$('#bigletter').css("--"+slidertype, value);

	//});

	//click buttons


	//mouseposition
	$('#intro').mousemove(function(event) {

		console.log(event.pageX, event.pageY);

//		let cursorX = event.pageX / $(this).width();
		let cursorY = (event.pageY) / $(this).height();

//		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
//			"--wdth": settingX,
			"--wght": settingY*0.15
		});

	});
});


// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener('mousemove',function(e) {
    document.getElementById('y-value').textContent = e.y;
});
