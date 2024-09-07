// Hide and Show Elements

$(document).ready(function(){
    $("img[alt=map]").on("click", function(){
        $("section > h2").toggle(1000);
    })
})