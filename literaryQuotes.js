
let authorBtns = [];


for(let i = 0; i < 3; i++) {
  const btn = document.getElementById(`authorBtn${i+1}`);
  btn.addEventListener('click', () => changeAuthor(i), false);
  authorBtns.push(btn);
};



const newQuote = (authorNumber) => {
  const arr = authorDetails[authorNumber].quotes;
  return arr[Math.floor(Math.random()*arr.length)];
}

const updateQuote = (authorNumber) => {
  const quoteText = document.getElementById("quoteText");
  const sourceText = document.getElementById("textSource");
  const quoteObject = newQuote(authorNumber);
  quoteText.textContent = quoteObject.quote;
  sourceText.textContent = quoteObject.book;
}

const randomizeQuote = () => {
  authorBtns.forEach((item, i) => {
    const arr = item.getAttribute("class");
    if (arr.includes("btnSelected")) {
      updateQuote(i);
    }
  });
}

const changeAuthor = (btnNumber) => {
  // const attr = authorBtns[btnNumber].getAttribute('class');
  deselectAuthors();
  authorBtns[btnNumber].classList.add("btnSelected");
  changeAuthorTitle(btnNumber);
  updateQuote(btnNumber);
};

const deselectAuthors = () => {
  authorBtns.forEach((item, i) => {
    item.classList.remove("btnSelected");
  });
}

const changeAuthorTitle = (btnNumber) => {
  const title = document.getElementById("authorTitle")
  title.textContent = authorDetails[btnNumber].name;
  const dates = document.getElementById("authorDates")
  dates.textContent = authorDetails[btnNumber].dob;
}

changeAuthor(0);
updateQuote(0);

const randomQuoteBtn = document.getElementById("randomQuoteBtn");
randomQuoteBtn.addEventListener('click', () => randomizeQuote(), false);
