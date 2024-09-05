// Adding & Removing Classes

const button = $("#lead-banner a");
button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
}