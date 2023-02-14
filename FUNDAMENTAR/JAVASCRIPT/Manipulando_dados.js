/*
     Prototype (traducao: prototipo/ aquilo que veio antes)

     * prototype-based language
     * prototype chain (cadeia de prototipos)
     * __proto__
*/
//Abra algo no navegador e clique usando o botao direito, va em 'inspecionar'. 
// Clique em 'console' e o limpe - ctrl+l.
//exemplo do que digitar: (false.__proto__)




/* 
   - Type conversion ou typecasting (capacidade nossa de causar a conversao)
           vs
   - Type coersion (capacidade do JavaScript de forcar uma troca)

    * Alteracao de um tipo de dado para outro tipo.
*/

console.log('9' + 5)  //O JavaScript ira imprimir "95" usando o TYPE COERSION
// mas podemos usar o TYPE CONVERSION/manualmente para que a string vire um numero e imprima "14".

console.log(number('9') + 5) //Foi usado, de maneira manual, uma funcao que converte a string em number para que a impressao seja "14". Entretanto, o JavaScript tambem pode usar esse typecasting em alguns momentos.




// Manipulando strings e numeros

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero.

let word = "paralelepipedo"
console.log(word.length)


let number = 1234
console.log(string(number).length)


// Transformar um numero quebrado com 2 casas decimais 

let number = 343.434322
console.log(number.toFixed(2))   // O toFixed `e uma funcao que esta atrelada ao objeto 'number'. Quando uma funcao `e atrelada a um objeto, nos chamamos tambem de "metodo"/'method'. Servira para mostrar o numero de casas decimais que eu gostaria de ver. Ex: (2) . Quando se coloca o toFixed ira retornar uma string e com isso `e possivel trocar um ponto por virgula, o que nao acontece se eu quiser transformar essa string em numero.

//TROCAR PONTO POR VIRGULA / '.replace("" , "")'
// `E possivel atrelar duas funcoes ao mesmo tempo usando um ponto
console.log(number.toFixed(2).replace("." , ","))





// Transformar letras maiusculas em minusculas e o contrario tambem

let word = "Programar e muito bacana!"
console.log(word.toUppenCase())
//o contrario `e:
console.log(word.toLowerCase())



// MANIPULADO STRINGS E ARRAYS


// Separe um texto que contem espacos, em um novo array onde cada texto `e uma posicao do array. 

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") //o split serve para indicar o que eu quero separar no texto
console.log(myArray)

//Depois disso, transforme o array em um texto e onde eram espacos, coloque _
let phraseWithUnderScore = myArray.join("_") // o metodo 'join' serve para indicar com o que voce quer juntar o texto.
console.log(phraseWithUnderScore) // posso ainda acrescentar o que aprendi a cima. Ex:
console.log(phraseWithUnderScore.toLowerCase())