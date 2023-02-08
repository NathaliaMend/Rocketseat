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
