// If ... Else    (Se ... Se não) (Muda o fluxo da aplicação)

/*
let temperature = 36.5

if (temperature >= 37) {
    console.log('Febre')
}  else {
   console.log('Saudável') 
} 
 */

let temperature = 38

if (temperature >= 37.5) {
    console.log('Febre')
}  else if (temperature < 37.5 && temperature >= 37) {
   console.log('Febre Moderada') 
}  else {
    console.log('Saudável')
}