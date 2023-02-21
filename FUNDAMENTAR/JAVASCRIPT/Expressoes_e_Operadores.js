/* Expressoes (qualquer linha de codigo que resolve alguma coisa) e Operadores

   -Expression (ex.: let Number = 1)
   -Operators
       binary (ex.: console.log(number + 1), chamdo operator binary porque `e preciso de dois valores para que o operador esteja entre eles, ou seja, o sinal de mais/+)
       unary (ex.: console.log(++number), quando so ha um valor e `e usado um operador junto.)
       ternary (s`o ha um caso de ternary (ex.: console.log(true ? 'alo' : 'nada')/traduzindo...:Se for verdade, eu quero 'alo', se for falso quero 'nada'/)
*/
// VEREMOS VARIOS TIPOS DE OPERADORES E EXPRESSOES AGORA..




/* Expression NEW
 
   * left-hand-side expression
   * Criar um novo objeto
   
*/ 
let name = new String('nath')
name.surName = "mendonca" 
let age = new Number(22)
console.log(name,age)


/*  Operadores UNARIOS
   
     typeof (serve para mostrar o tipo da variável ) //console.log(typeof "Nath")//
     delete (serve para deletar alguma propriedade )
*/
 
const person = {
    name: 'nath',
    age: 22,
}
delete person.age
console.log(person)




// Operadores ARITIMETICOS (calculos matematicos)

//multiplicacao.:  *
//console.log(3.2 * 4.6)

//divisao.:  /
//console.log(12 / 2)

//soma.:  +
//console.log(43 + 20)

//subtracao.:  -
//console.log(90 - 45)


//resto da divisao.:  %    (remainder significa 'restante'/ o operador %, serve para mostrar quanto sobra depois de dividir/da divisao dos dois numeros, qual o resto dessa divisao.)
/* let remainder 
    remainder = 11 % 10
    console.log(remainder) */

//incremento.:  ++     (o increment/++ `e sempre mais 1, entao no exemplo seria 0 + 1 / 0 ++)(posso incrementar(significa adicionar mais 1) quantas vezes eu quiser)
/* let increment = 0
   increment++
   increment++
   console.log(increment)
(`E possivel incrementar o valor antes ou depois dentro do console.)
 ex. de antes: 
 console.log(++increment)
 ex. de depois:
 console.log(increment++)
 */

//decremento.:   --     (o decrement/-- , serve para subtrair 1)
/* let decrement = 0
   console.log(--decrement)*/

//exponencial.:   **.   (No exemplo seria 3 elevado a 3, no qual o resultado `e 27.)
//console.log(3 ** 3)



// Grouping OPERATOR ( ).   (`E um operador que agrupar expressoes/ serve para trocar a ordem que o computador vai resolver uma expressao. Faz mais sentido quando usado para calculos matematicos)
let total = 2 + 3 * 5
console.log(total)
// comeca pela multiplicacao, resultado: 17

let total = (2 + 3) * 5
// comeca pelos parenteses, resultado 25


  