const decrementBtn = document.querySelector(`button[data-action="decrement"]`);


const incrementBtn = document.querySelector(`button[data-action="increment"]`);
console.log("incrementBtn", incrementBtn);

let counter = document.querySelector(`#value`);
console.log("counter", counter);

let counterValue = Number(counter.textContent);
console.log("counterValue", counterValue);

decrementBtn.addEventListener(`click`, (event) => {
    counterValue += Number(decrementBtn.textContent);
    console.log(counter.innerHTML = counterValue);

});

incrementBtn.addEventListener(`click`, (event) => {
    counterValue += Number(incrementBtn.textContent);
    console.log(counter.innerHTML = counterValue);

});

