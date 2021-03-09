
let authorBtns = [];

for(let i = 0; i < 3; i++) {
  const btn = document.getElementById(`authorBtn${i+1}`);
  btn.addEventListener('click', () => changeAuthor(i), false);
  authorBtns.push(btn);
};

const changeAuthor = (btnNumber) => {
  // const attr = authorBtns[btnNumber].getAttribute('class');
  deselectAuthors();
  authorBtns[btnNumber].classList.add("btnSelected");
  changeAuthorTitle(btnNumber);
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
console.log(authorDetails);
