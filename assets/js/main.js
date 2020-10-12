$(document).ready(function(){
    //Sticky option add
    $(".js--service-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });

    //Portfolio tab system add
    var mixer=mixitup(".portfolio-image");
})