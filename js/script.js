// Fading Elements In & Out

$(document).ready(function(){
    // $("section > h2").on("click", function(){
    //     $(this).fadeOut(2000).fadeIn(500);
    // })
    $("section > h2").on("click", function(){
        $(this).fadeTo(2000, 0.1).fadeTo(1000, 0.7);
    })
})