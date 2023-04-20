/* Faça um algoritmo que receba uma nota de 0 a 10 e que retorne se o aluno foi aprovado ou nao . A média é maior ou igual a 7 */


function Resultado (nota) {
    if (nota >= 0 && nota < 7) {
        return 'Reprovado'
    } 
    if (nota >= 7 && nota <= 10) {
        return 'Aprovado'
    }
    if (nota < 0 || nota > 10) {
        return 'Resultado inválido'
    }
}

Resultado(8)