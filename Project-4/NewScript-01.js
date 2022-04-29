$(document).ready(function(){
    $(".top").hover(function(){
        $("img").removeClass("fade");
        $(this).addClass("show")
    },function(){
        $(".hover-img").addClass("fade");
    })
})