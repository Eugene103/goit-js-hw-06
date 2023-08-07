const form = document.querySelector(`.login-form`)

form.addEventListener(`submit`, checkForm)

function checkForm(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === ``) {
        alert `Eror email`
    } else if (password.value === ``) {
        alert `Eror password`
    } else {
        console.log({ Email: email.value, Password: password.value })
        form.reset();
    }
    
    }