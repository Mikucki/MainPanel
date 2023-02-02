const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Sprzątamy";
  }, 0);
  setTimeout(() => {
    text.textContent = "Dzwonimy";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Pracujemy";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Promujemy";
  }, 12000);
};

textLoad();
setInterval(textLoad, 12000);
