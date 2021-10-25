// getElementById()

const element = document.getElementById('blog-title')

console.log(element)


// getElementsByClassName

const elementClass = document.getElementsByClassName('one')

console.log(elementClass)

// getElementsByTagName

const elementTag = document.getElementsByTagName('meta')

console.log(elementTag)

//querySelector

const elementQuery = document.querySelector('one')

console.log(elementQuery)

document.querySelectorAll('#one') // todos os elementos com esse seletor

// manip  conteudo
// textContent

const textContent = document.querySelector('h1')

textContent.textContent += " Olá devs"

// innerText

const innerText =  document.querySelector('h1')

innerText.innerText = "Olá devs"