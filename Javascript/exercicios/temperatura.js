/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/


function transformDegree(temp){
    //const celsiusExists = temp.toUpperCase().includes('C')
    const celsiusExists = temp.includes('C') || temp.includes('c')
    const fahrenheitExists = temp.includes('F') || temp.includes('f')

     // fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Unidade de medida não identificada')
    }

    // fluxo ideal: F  to C
    let updatedDeg = Number(temp.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degSign = 'C'

     // fluxo ideal: C  to F
    if(celsiusExists){
        updatedDeg = Number(temp.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degSign = 'F'
    }

    return formula(updatedDeg) + degSign
}

try {
   
    console.log(transformDegree('50f'))    
    console.log(transformDegree('10C'))    
} catch (error) {
    console.log(error.message)
}