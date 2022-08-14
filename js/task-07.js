let rng = document.querySelector(`#font-size-control`);
let text = document.querySelector(`#text`);

rng.addEventListener('input', function () {
    rng.getAttribute('.input');
text.style.fontSize = rng.value +'px';
})


