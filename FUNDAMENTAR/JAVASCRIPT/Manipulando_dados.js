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



// Manipulando Strings

// Verificar se o texto contem a palavra amor
 let phrase = "Eu quero viver !"
 console.log(phrase.includes("Amor"))




 // Manipulando Arrays

 // Criando Array :
 let myArray = ['a', 'b', 'c']
 console.log(myArray)
 // Criando Array com construtor:
 let myArray = new Array('a', 'b', 'c') //cada argumento virara um elemento
 // Posso criar um array com posicoes vazias ex:
 let myArray = new Array(10)

 // Contar os elementos de um array:
 console.log(["a", "b", "c"])
// Cada elemento no array pode ser um tipo de dado diferente, incluse um funcao. ex.:
console.log([ "a", 
              {type: "array"},
              function() { return "alo"} 
].length) // .length para contar os elementos;  [2] para acessar algum elemento que esteja na posicao 2, na mesma linha usar: "()" se eu quiser chamar a funcao no caso de existir uma funcao na posicao 2.


// Transformar uma cadeia de caracteres em elementos de um array
let word = "Manipulacao"
console.log(Array.from(word))


// Manipulando arrays
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar um item no comeco
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do comeco
techs.shift()

//pegar somente alguns elementos do array
///console.log(techs.slice(1,3))

// remover 1 ou mais itens em qualquer posicao do array
//techs.splice(1,2)     // o primeiro elemento antes da virgula remove o item que esta naquela posicao. o segundo elemento depois da virgula remove itens depois do item que foi removido.

// encontrar a posicao de um elemento no array
let index = techs.indexOf('html')
techs.splice(index,1) // quero remover o item que esta na posicao index e a quantidade de elementos que quero remover `e 1.


console.log(techs)
