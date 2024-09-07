// Animations in jQuery

$(document).ready(function(){
    // 沒有動畫
    // $("section > h2").on("click", function(){
    //     $(this).css({"width" : "500px", "height" : "100px"});
    // })
    // 有動畫
    $("section > h2").on("click", function(){
        function complete(){
            alert("complete");
        }
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete);
    })
})