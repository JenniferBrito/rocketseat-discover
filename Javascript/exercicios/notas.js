/* 
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F 

*/

// if else

 let valor = 59;

 function getNota(score){
    let notaFinal
    let higherGrade = score >= 90
    let highGrade = score >= 80 && score <= 89
    let mediumGrade = score >= 70 && score <= 79
    let lowGrade = score >= 60 && score <= 69
    let badGrade =  score <= 59
    
    if (higherGrade){
        notaFinal = "A"
    }else if (highGrade){
        notaFinal = "B"
    }else if (mediumGrade){
        notaFinal = "C"
    }else if (lowGrade){
        notaFinal = "D"
    }else if (badGrade){
        notaFinal = "F"
    }else{
        console.log('nao disponivel')
    }
    
    return notaFinal
 }

 console.log(getNota(valor))