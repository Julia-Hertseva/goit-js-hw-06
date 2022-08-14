
let inputText = document.querySelector(`#validation-input`);


const length = inputText.getAttribute(`data-length`);

inputText.addEventListener(`blur`, function () {
    
    inputText.value.length === Number (length) ? inputText.classList.add(`valid`): inputText.classList.add(`invalid`)
    
});
