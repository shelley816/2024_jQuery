// Sliding Elements

$(document).ready(function(){
    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideUp(1000);
    })
    $(".slide-button-down").on("click", function(){
        $("#lead-banner").slideDown(2000, function(){
            alert("ok");
        });
    })
})