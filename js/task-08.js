const form = document.querySelector(`.login-form`);
const email = document.querySelector(`.email`);
const password = document.querySelector(`.password`);

function handleSubmit(event) {
    event.preventDefault();
    email.getAttribute('.email');
    password.getAttribute('.input');

    if ( email.value === `` || password.value === `` )
        {
            alert ( "Пожалуйста, заполните поле" );
            // valid = false;
        }

        // return valid;
    const elements = {
        email: email.value,
        password: password.value,
    };
    console.log(elements);
    form.reset();
}

form.addEventListener(`submit`, handleSubmit);
