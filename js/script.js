// Binding & Unbinding Events

const myLis = $("#points-of-sale li");
myLis.on("click", function(){
    $(this).css({"background" : "pink"});
    myLis.off("click");
})