$(document).ready(function(){   

    $.getJSON("csvjson (1).json")
        .done(function( data ) {
         // var randomItem = data[Math.floor(Math.random()*data.length)];
            //   document.body.innerHTML = randomItem; 
           //console.log(data);
  
          for( let i = 0; i<data.length; i++){
              let item = data[i];
    
               let season = item["Season"];

                let container = '.'+season;

                let img = item["URL"];

                console.log(img);

               let element = `<a href="${item["URL"]}"><img src="img/${item["Number"]}.png" alt="">
                 </a>`

               $(container).append(element);

            
           }
          // console.log(randomItem);

          

        }); 
  
  }); 