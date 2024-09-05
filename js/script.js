// Document Ready vs Window Load

// 第一個寫法
$(document).on("ready", function(){
    // do whatever you want to do
})
// 第二個寫法 (一的縮短版)
$(function(){
    // do whatever you want to do
})
// 第三個寫法 (等待所有網站載入完成，包含所有圖檔)
$(window).on("load", function(){
    // do whatever you want to do
})
// 第四個寫法 (三的縮短版吧...)
$(window).load(function(){
    // do whatever you want to do
})