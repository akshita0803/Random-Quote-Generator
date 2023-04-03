const btnEl =document.getElementById("btn");
const url ="https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote(){
    try{
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(url);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;

    }
    catch(error){
        console.log(error);
        quoteEl.innertext ="An error occured, try again later";
    }
}

btnEl.addEventListener("click",getQuote);
getQuote();