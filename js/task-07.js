const sizeControl = document.querySelector(`#font-size-control`)
const text = document.querySelector(`#text`)

sizeControl.addEventListener(`mousemove`, changedText)

function changedText(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`
}