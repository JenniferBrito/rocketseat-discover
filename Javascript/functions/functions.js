/*
    Funções JS

*/ 

/*  declarar a função
function createPhrases() {
    console.log('Frase 1')
    console.log('Frase 2')
    console.log('Frase 3')
}

 chamar função
createPhrases() */

/* // Argumentos e parametros

// function expression
// recebendo parametros
const sum = function(number1, number2){
   // console.log(number1 + number2)
   let total = number1 + number2
   return total
}

// sum(2, 3) // passando argumentos
let n1 = 34
let n2 = 25

console.log(`a soma é ${sum(n1, n2)}`)

// funtion scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
 */
// function hoisting

/*
    é possível chamar uma função antes de criá-la, 
    por conta da elevação do JS
*/ 
/* sayMyName()

function sayMyName(){
    console.log('nome')
} */

// Arrow functions
/* 
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('nome')
 */

// callback function: Uma callback function é uma função que está sendo passada para outra função como parâmetro.

/* function sayMyName(name){
   name()
} 

sayMyName(
    () => {
        console.log('callback')
    }
) */

// Funções construtoras

/* são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo: */

function Person(name) {
	this.name = name
    this.walk = function() {
		return this.name + " está andando"
	} 
}
const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())