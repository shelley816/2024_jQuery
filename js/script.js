// Sliding Animation Example

$(document).ready(function(){
    const items = $("#points-of-sale li");

    items.on("click", function(){
        $(this).find("p").slideToggle(500);
    })
});