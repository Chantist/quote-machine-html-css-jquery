"use strict";

const quotesArray = [
  {
    text:
      "There are still many causes worth sacrificing for, so much history yet to be made",
    author: "Michelle Obama"
  },
  {
    text: "Luck is when an opportunity comes along and you're prepared for it",
    author: "Denzel Washington"
  },
  { text: "Turn your wounds into wisdom", author: "Oprah Winfrey" },
  {
    text:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    author: "Bill Gates"
  }
];

let quote = {};

function getRandomQuote() {
  let quoteIndex = quotesArray[Math.floor(Math.random() * quotesArray.length)];

  return (quote = {
    text: quoteIndex.text,
    author: quoteIndex.author
  });
}

//Triggers
$(document).ready(function() {
  (function() {
    getRandomQuote();
    $("#text").text(quote.text);
    $("#author").text(`~ ${quote.author}`);
  })();

  $("#new-quote").click(event => {
    getRandomQuote();
    $("#text").text(quote.text);
    $("#author").text(`~ ${quote.author}`);
  });

  $("a").click(event => {
    let url = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
    $("#tweet-quote").attr("href", url.concat(quote.text));
  });
});
