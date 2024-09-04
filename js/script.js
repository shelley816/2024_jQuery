// Wrap and Unwrap Elements
// 每個 section 都各自被 elements 包起來
// $("section").wrap("<div>");
// 解除每個 section 外面包起來的 elements
// $("section").unwrap();
// 每個 section 都被同一個 elements 包起來
// $("section").wrapAll("<div>");

const wrapper = "<div class='wrapper'>";
const button = $(".button");
let wrapped = true;

button[0].addEventListener('click',function(){
    console.log(wrapped);
    if(wrapped){
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrap");
    }
})