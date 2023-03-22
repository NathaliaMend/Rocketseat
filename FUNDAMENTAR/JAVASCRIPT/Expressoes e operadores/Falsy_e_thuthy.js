/*
 Type conversion (type casting) (quando eu converto um dado) vs Type coersion (quando o javascript converte um dado) */

 console.log(Number('9') + 5)



/*
   tipo FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false
0
-0
""
null
undefined
NaN

(document.all) [1]
*/
console.log(null ? 'verdadeiro' : 'falso') // imprimirá falsy

/* 
   TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicional e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
infinity
-infinity
*/

console.log(Infinity ? 'verdadeiro' : 'falso')







