/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

let caixa = {
    receitas: [
         1500.00,
         300.00,
         3000.00,
         600.80
    ],

    despesas: [
         200.00,
         150.00,
         200.00,
         670.00,
         3000
    ]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(caixa.receitas)
    const calculateExpenses = sum(caixa.despesas)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "negativo"
    if (itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()