let obj = {a:1,b:10}
let soma = obj.a + obj.b

// ou

let{a,b} = obj
let soma2 = a + b

let aluno = {
    nome:'Dayane',
    matricula:'10000111',
    notas:[10,5,2],
}

//os valores de notas serão atribuídos por n1,n2,n3
let [n1,n2,n3] = aluno.notas
let media = (n1+n2+n3)/3

//para renomear uma chave do objeto
let {notas:notasAluno} = aluno
//let [n1,n2,n3] = notasAluno