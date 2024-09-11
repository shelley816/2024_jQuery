// Fading Animation Example

$(document).ready(function(){
    const allQuotes = $("blockquote");
    let currentQuote = 0;

    function changeQuotes(){
        $(allQuotes[currentQuote]).fadeOut(200, function(){
            
            if(currentQuote == allQuotes.length - 1){
                currentQuote = 0;
            } else {
                currentQuote++;
            }
            $(allQuotes[currentQuote]).fadeIn(200);

        });
    }

    const quoteTimer = setInterval(changeQuotes, 3000);
});