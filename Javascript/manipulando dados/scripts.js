/*
    Prototype: 
        série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, 7
        que são lidados como objetos.

    Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, 
    por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, 
    por exemplo quando você tenta somar um número na forma string com um número do tipo número.

    conversion: console.log(Number('9')+5) === faz a soma dos números, e não a concatenação
*/ 


/* 
let string = "123"

console.log(Number(string))

let number = 321

console.log(String(number))

let n1 = 321.5545654654
//duas casas decimais com virgula
console.log(n1.toFixed(2).replace(".", ","))

// letras em maiusculas e minusculas

let word = "SDFAS"

console.log(word.toLowerCase())
let word2 = "adsd"

console.log(word2.toUpperCase())
 */
// separar texto com espaços em um novo array

/* let phrase = "kdfjkld ksdjfklasdjf jhajd"
let myArray = phrase.split(" ")

console.log(myArray)

let phrase2 = myArray.join("_")
console.log(phrase2)

// verificar se o texto contem uma palavra

console.log(phrase.includes("Kdfjkld"))

// criar array com construtor

let array1 = new Array('a', 'b', 'c')
let array2 = new Array(10)
console.log(array1)
console.log(array1.length)
console.log(array2) */

// string p/ array

/* let word = "manip"

console.log(Array.from(word))
 */
// manip array

let techs = ["html", "css", "js"]

// add item no fim
techs.push("nodejs")

//add item no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

//remover do começo
// techs.shift()

// somente alguns elementos
//console.log(techs.slice(1, 3))

// remover 1+ elementos em qualquer posição
//techs.splice(1, 1)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)

console.log(techs)