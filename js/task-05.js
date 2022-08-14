let inputName = document.querySelector(`#name-input`);
let outputName = document.querySelector(`#name-output`);

inputName.addEventListener(`input`, handleInput);
function handleInput (event) {
    if (inputName.value.trim() !== ``) {
        outputName.innerHTML = inputName.value.trim();
    } else {
        outputName.innerHTML = `Anonymous`;
    }
};
