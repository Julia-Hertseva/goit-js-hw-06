const form = document.querySelector(`.login-form`);
const email = document.querySelector(`.email`);
const password = document.querySelector(`.password`);

function handleSubmit(event) {
    event.preventDefault();
   
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === `` || password.value === ``) {
        alert("Пожалуйста, заполните поле");
  
    } else { 
        console.log({"email": email.value,
        "password": password.value});
        form.reset();
    }
    
};

form.addEventListener(`submit`, handleSubmit);
