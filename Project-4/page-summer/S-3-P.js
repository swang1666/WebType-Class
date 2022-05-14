$(document).ready(function(){
	//console.log('hello');
	let height = document.body.scrollHeight;
	let section = height/4;
	//console.log(height, section);

	$(window).scroll(function () {
		//console.log('scroll!');
		let position = $(this).scrollTop();
		//console.log(position);

		if( position < section){
			//console.log('first');
			$('#box4').css('opacity', getRatio(position, section));
		}else if( position < (section+section) ){
			//console.log('second');
			let new_position = position - section;
			$('#box3').css('opacity', getRatio(new_position, section));
		}else if( position < (section+section+section) ){
			//console.log('third');
			let _new_position = position - section + section ;
		}else if( position < height){
			$('#box2').css('opacity', getRatio(_new_position, section));
		}
	});
});


function getRatio(position, section_height){
	let ratio =  1 - (position/section_height);
	//console.log(ratio);
	return ratio;
}

function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}