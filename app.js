// SELECTING QUOTE AND BUTTON 
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


// RANDOM QUOTE FUNCTION
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}
// QUOTE SPEECH FUNCTION
soundBtn.addEventListener("click", ()=> {
    // SPEAK ICON SPEECH
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
// QUOTE COPY FUNCTION
copyBtn.addEventListener("click", ()=>{
    // COPY ICON FUNCTION
    navigator.clipboard.writeText(quoteText.innerText);
});
// QUOTE SHARE ICON FUNCTION
twitterBtn.addEventListener("click", ()=>{
    // SHARE ICON FUNCTION
    let tweetUrl = `http://twitter.com/share?text=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
    
});
quoteBtn.addEventListener("click", randomQuote);