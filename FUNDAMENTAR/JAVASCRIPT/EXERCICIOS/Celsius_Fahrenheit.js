/* 
   ###  Celsius em Fahrenheit
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
C = (F - 32) * 5/9 
F = C * 9/5 + 32    

*/


function FahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9 
    return `${celsius.toFixed(1)}°C`
}

function CelsiusParaFahrenheit(celsius) {
    const fahrenheit = celsius * 9/5 + 32
   return `${fahrenheit.toFixed(1)}°F`
}


