const nameInput = document.querySelector(`#name-input`)
const nameOutput = document.querySelector(`#name-output`)

nameInput.addEventListener(`input`, changeName)


function changeName(evt) {
    nameOutput.textContent = evt.currentTarget.value
    if (evt.currentTarget.value.trim() === ``) {
        nameOutput.textContent = `Anonymous`
    }
}
console.log(nameOutput.textContent.length)
