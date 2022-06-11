let detranParangaba = [
    {nome: 'Dayane', idade: 31, aprovado: true, categoria: 'A'},
    {nome: 'Amanda', idade: 17, aprovado: false, categoria: 'A'},
    {nome: 'João', idade: 50, aprovado: true, categoria: 'A'},
]

let detranBezerra = [
    {nome: 'Dayane', idade: 31, aprovado: true, categoria: 'A'},
    {nome: 'Amanda', idade: 17, aprovado: true, categoria: 'A'},
    {nome: 'João', idade: 50, aprovado: true, categoria: 'B'},
]

function exibirAprovado (lista, categoria) {
    let contadorDeAprovado = 0
    for (let i = 0; i < lista.length; i++) {
        let candidato = lista[i];

        if(candidato.aprovado && candidato.idade >= 18 && candidato.categoria === categoria){
            console.log(candidato.nome)
            contadorDeAprovado++
        }
    }
    console.log(`Foram aprovados ${contadorDeAprovado} candidatos para a categoria ${categoria}`)
    return 1
}
 exibirAprovado(detranBezerra, 'B')
 exibirAprovado(detranParangaba, 'A')