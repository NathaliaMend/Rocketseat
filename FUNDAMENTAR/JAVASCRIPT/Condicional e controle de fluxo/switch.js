// switch       ( ou trocar)

let expression = 'b'

switch (expression) {
    case 'a':
        // codigo 
        console.log('a')
    case 'b':
        // codigo para a expression b
        console.log('b')
    default:
        console.log('default')
    break
}


/// CALCULADORA:

function calculate (number1, operator, number2) {
   let result = 0;

   switch (operator) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break  //  O console imprime apenas os cases que estao entre os breaks
    case '/':
        result = number1 / number2
        break
    default:
     console.log('Não implementado')
     break

   }
   return result
}

console.log(calculate(4, '+', 8))