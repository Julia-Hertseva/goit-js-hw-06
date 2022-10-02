function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainerRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

const createBoxes = () => {
  const amount = document.querySelector("[type=number]").value;
  const boxesArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${20 + (10 * i)}px`;
    box.style.height = `${20 + (10 * i)}px`;
    const randomColor = getRandomHexColor();
    box.style.backgroundColor = randomColor;
    boxesArray.push(box)
  };
  
    boxContainerRef.append(...boxesArray);
}

createBtnRef.addEventListener('click', createBoxes);

destroyBtnRef.addEventListener('click', () => {
  boxContainerRef.innerHTML = ''
});
