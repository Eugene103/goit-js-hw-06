const counterValue = {
    object: document.querySelector(`#counter`),
    number: document.querySelector(`#value`)
}

let values = 0;

const updateNumber = () => {
    counterValue.number.textContent = values
}
    
counterValue.object.firstElementChild.addEventListener(`click`, remAction)

function remAction(evt) {
        values -= 1;
    updateNumber();
}
counterValue.object.lastElementChild.addEventListener(`click`, addAction)

function addAction(evt) {
    values += 1;
    updateNumber();
}
