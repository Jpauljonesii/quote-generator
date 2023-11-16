"use strict";





const quotesArray = [
  {
    content: 'All action results from thought, so it is thoughts that matter.',
    author: 'Sai Baba',
    tags: ['Famous Quotes'],
    authorSlug: 'sai-baba',
    length: 63,
    dateAdded: '2020-02-22',
    dateModified: '2023-04-14',
  },

  {
    content: 'Friends are the siblings God never gave us.',
    author: 'Mencius',
    tags: ['Friendship'],
    authorSlug: 'mencius',
    length: 43,
    dateAdded: '2021-03-26',
    dateModified: '2023-04-14',
  },

  {
    content:
      'Follow your instincts. That is where true wisdom manifests itself.',
    author: 'Oprah Winfrey',
    tags: ['Famous Quotes'],
    authorSlug: 'oprah-winfrey',
    length: 66,
    dateAdded: '2020-12-17',
    dateModified: '2023-04-14',
  },
];
let randomQuoteObject = getRandomQuote(0,quotesArray.length);


function getRandomQuote(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  return quotesArray[randomInt];
};

  for (let i = 0; i < quotesArray.length; i++) {
    console.log(quotesArray[i].content, quotesArray[i].author);
  };


function handleGetQuote() {
 randomQuoteObject = getRandomQuote(0, quotesArray.length);
  document.getElementById('getquote').innerHTML = randomQuoteObject.content;
  document.getElementById('author').innerHTML = randomQuoteObject.author;
};

document.getElementById('getquote').onclick = function () {
  myFunction();
};

function handleSaveQuote (){
  

}