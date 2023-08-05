function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector(`#controls`);
const create = document.querySelector(`[data-create]`)
const destroy = document.querySelector(`[data-destroy]`)
const boxes = document.querySelector(`#boxes`)

create.addEventListener(`click`, createBoxes)
destroy.addEventListener(`click`, destroyBoxes)

function createBoxes(amaunt) {
  const values = control.firstElementChild.value;
   const div = [];
  for (let i = 1; i <= values; i += 1){
    const size = 20 + i * 10;
    div.push(`<div style="width: ${size}px; height: ${size}px; background:${getRandomHexColor()}; "></div>`)
  }
   let join = [...div].join(``)
    boxes.innerHTML = join;
}
function destroyBoxes(evt){
  boxes.innerHTML = ``;
}