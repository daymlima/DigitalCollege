// o objeto contem chave/key: valor/value,
let obj = {
    nome: "Dayane",
    idade: 31,
    casado: true,
    experiencias: ["Semace", "tapanocorte"],
    contatos:{
        telefones: [85996568595,8596563256,323265983],
        email:"daymlima@gmail",
        linkedin: "daymlima"
    },
    endereço:{
        rua:"rua rondonia",
        bairro:"Pan-americano",
        cep: 60441680,

    },
}
console.log(obj.nome)
console.log(obj.experiencias[0])
console.log(obj.contatos)

let o = {
    x:{
        y:[1,4,{z:10}],
        z:{h:"ok"},
    },
}

let a = o.x.y[2].z

console.log(a)

let pessoa = {
    nome:"Wesley",
    idade:"31",
    conhecimentos:[{thech:'php', tempo:3}, 'js','react'],
    contatos:{
        telefones: [85996568595,8596563256,323265983],
        email:"wesmlima@gmail",
        linkedin: "wesmlima"
    },
}
function criarApresentacao(){
    console.log(`Meu nome é ${pessoa.nome} e tenho ${pessoa.idade}, meus contatos são ${pessoa.contatos.telefones[0]} e ${pessoa.contatos.telefones[2]}`)
    
}

criarApresentacao();

// Variáveis internas a função não são visível fora dela
//variáveis fora da função são visíveis dentro da função
//conflito de nome entre uma variável externa e um parâmetro, somente o parâmetro é considerado dentro da função.


let obj1 = {
    nome: 'carlos',
    idade: 31,
    apresentar: function(){
        let apresentacao = `Meu nome é ${nome} tenho ${idade}`
        return apresentacao
    }
}

obj1.apresentar()