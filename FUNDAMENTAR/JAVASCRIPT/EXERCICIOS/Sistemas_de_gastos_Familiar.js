/* ### Sistema de gastos familiar

    Crie um objeto que possuirá duas propriedades, ambas do tipo array:
            * receitas []
            * despesas []
    Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo */


let contas = {
   receitas: [
        {
                salario: 5000,
                casaALuguel: 1000,
                negocioProprio: 500
                
        }
   ],
   despesas: [
        {
                mercado: 1200,
                cursos: 50,
                carro: 600,
                IPU: 150,
                farmacia: 70,
                lazer: 1000

        }
   ]
}

function calculo (receitas, despesas) {
   for ( let contas of property) {
       

   }     
}

/////////////////////////////////////////////////////////////////////////////////


let contas = {
        receitas:[
                2000,
                1400
        ],
        despesas:[
                590,
                350.10
        ]
}

function financas (contas) {
        let despesas = contas.despesas
        let receitas = contas.receitas
        let totaldespesas = 0
        let totalreceitas = 0

        for ( let valor of despesas ) {
                totaldespesas += valor
        }
        console.log(totaldespesas)

        for ( let valor of receitas ) {
                totalreceitas += valor
        }
        console.log(totalreceitas)
        console.log(totalreceitas - totaldespesas)
        if (totaldespesas - totalreceitas > 0
        ) { return 'Saldo negativo'} 
        if (totaldespesas - totalreceitas < 0 ) {
                return 'Saldo positivo'
        } else { return 'Saldo zerado'}
}

