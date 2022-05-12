$(document).ready(function(){
     /* winter add or remove */
    $( ".title-2" ).click(function() {
        $(".container-summer").addClass("remove");
        $(".container-winter").removeClass("remove");
    
    });
/* winter add or remove-END */

    /* summer add or remove */
    $( ".title-1" ).click(function() {

        $(".container-winter").addClass("remove");
        $(".container-summer").removeClass("remove");
    });
/* summer add or remove-END */

    $( ".library-1" ).click(function() {

       $(".container-winter").removeClass("remove");
       $(".container-summer").removeClass("remove");
    });

})