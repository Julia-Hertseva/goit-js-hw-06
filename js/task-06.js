let inputText = document.querySelector(`#validation-input`);

const length = inputText.getAttribute(`data-length`);

inputText.addEventListener(`blur`, loseFocus);

function loseFocus (event) {

    if (inputText.value.length === Number(length)) {
        inputText.classList.add(`valid`);
        inputText.classList.remove(`invalid`);
    } else {
        inputText.classList.add(`invalid`);
        inputText.classList.remove(`valid`);
    }
    event.preventDefault();
};
