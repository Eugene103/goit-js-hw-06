const list = document.querySelector('#categories')
const items = document.querySelectorAll('.item')

const category = []
const elements = []
items.forEach(function(list) {
    category.push(list.firstElementChild.textContent);
    elements.push(list.lastElementChild.children.length);
   
})

let message = `Number of categories: ${list.children.length}

Category: ${category[0]}
Elements: ${elements[0]}

Category: ${category[1]}
Elements: ${elements[1]}

Category: ${category[2]}
Elements: ${elements[2]}`
console.log(message)