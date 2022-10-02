let inputText = document.querySelector(`#validation-input`);

const length = inputText.getAttribute(`data-length`);

inputText.addEventListener(`blur`, loseFocus);

function loseFocus (event) {

    inputText.value.length === Number(length)
        ? inputText
            .classList
            .add(`valid`)
        : inputText
            .classList
            .add(`invalid`)
    event.preventDefault();
};