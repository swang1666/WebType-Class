$(document).ready(function(){
    $(".img-all").hover(function(){
        $("img").removeClass("fade");
        $(this).addClass("show")
    },function(){
        $(".hover-img").addClass("fade");
    })
})