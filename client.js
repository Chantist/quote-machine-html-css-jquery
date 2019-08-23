"use strict";

const quotesArray = [
  {
    quote:
      "There are still many causes worth sacrificing for, so much history yet to be made",
    autor: "Michelle Obama"
  },
  {
    quote: "Luck is when an opportunity comes along and you're prepared for it",
    autor: "Denzel Washington"
  },
  { quote: "Turn your wounds into wisdom", autor: "Oprah Winfrey" },
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    autor: "Bill Gates"
  }
];

let randomQuoteIndex = () => Math.floor(Math.random() * quotesArray.length);

//Triggers
$(document).ready(function() {
  (function() {
    const currentQuoteIndex = quotesArray[randomQuoteIndex()];
    $("#text").text(currentQuoteIndex.quote);
    $("#author").text(`~ ${currentQuoteIndex.autor}`);
  })();

  $("#new-quote").click(event => {
    $("#text").text(quotesArray[randomQuoteIndex()].quote);
  });
});
