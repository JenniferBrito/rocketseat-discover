// alterando estilos
// class list
const element = document.querySelector('body')

element.classList.add('active', 'green') // adiciona uma ou mais classes ao elemento
console.log(element.classList)
// element.classList.remove('active') // remove uma ou mais classes do elemento

element.classList.toggle('active')

// parentNode e parentElement

const body = document.querySelector('body')

console.log(body.parentNode)
console.log(body.parentElement)

// elementos filhos

const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.firstChild)
console.log(el.firstElementChild)
console.log(el.lastChild)
console.log(el.lastElementChild)

// buscando irmãos

// nextSibling nextElementSibling
const elem = document.querySelector('header')

console.log(elem.nextSibling)
