/* Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numérico para sitema de notas em caracteres tipo A B C

* De 90 para cima- A
* De 80 a 89  -    B
* De 70 a 79  -    C
* De 60 a 69  -    D
* Menor que 60 -   F

*/

let nota = 85

if (nota >= 90 && nota <= 100) {
    console.log('A')
 }
if (nota >= 80 && nota <= 89 ) {
    console.log('B') 
}
if (nota >= 70 && nota <= 79) {
    console.log('C')
}
if (nota >= 60 && nota <= 69) {
    console.log('D')
}
if (nota >= 0 && nota <60) {
    console.log('F')
}
//////////////////////////////////////////////OU MELHOR:
function traduzirNota (nota) {
    if (nota >= 90 && nota <= 100) {
        console.log('A')
     }
    if (nota >= 80 && nota <= 89) {
        console.log('B') 
    }
    if (nota >= 70 && nota <= 79) {
        console.log('C')
    }
    if (nota >= 60 && nota <= 69) {
        console.log('D')
    }
    if (nota >= 0 && nota < 60) {
        console.log('F')
    } 
    if (nota < 0 || nota > 100) {
        return 'A nota só pode variar de 0 a 100'
        //console.log('A nota só pode variar de 0 a 100')
    }
}