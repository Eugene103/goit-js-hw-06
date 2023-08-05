const validInput = document.querySelector(`#validation-input`)
validInput.addEventListener(`blur`, checkValid)
function checkValid(evt) {
    if (evt.currentTarget.value.length === Number(validInput.dataset.length)) {
    validInput.classList.remove(`invalid`)
       validInput.classList.add(`valid`);
    } else {
        validInput.classList.add(`invalid`)
    }
}