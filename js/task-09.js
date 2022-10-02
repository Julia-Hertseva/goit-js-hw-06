function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBtn = document.querySelector(`.change-color`);
const spanRef = document.querySelector(`.color`);
const bodyRef = document.querySelector(`body`);

changeBtn.addEventListener('click', changeColor);

function changeColor(event) {
  const getColorRef = getRandomHexColor();
  bodyRef.style.backgroundColor = getColorRef;
  spanRef.textContent = getColorRef;
};