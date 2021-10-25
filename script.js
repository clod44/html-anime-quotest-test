
//anime quotes https://animechan.vercel.app/api/random

fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then((quote) => {
    console.log(quote);
    let label = document.getElementById("quote");
    label.innerHTML = '"'+quote.quote+'"';
    let source = document.getElementById("source");
    source.innerHTML = quote.anime;
    let character = document.getElementById("character");
    character.innerHTML = "- "+quote.character;
});

let body = document.querySelector("body");
body.style.backgroundImage = "url(https://picsum.photos/1000/700?random="+Math.floor((Math.random()*100)+1)+"&blur=5&grayscale)";
  
/*
//anime background api documentation https://waifu.pics/docs
fetch('https://api.waifu.pics/sfw/waifu')
.then(response => response.json())
.then((quote) => {
    console.log(quote);
    let body = document.querySelector("body");
    body.style.backgroundImage = "url("+quote.url+")";
});
*/



