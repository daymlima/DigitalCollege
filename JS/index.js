// let firstName = "Dayane";
// let LastName = "Mendonça";
// let fullName = firstName + ' '+ LastName;
// let idade = 31;
// let cidade = "Fortaleza";

//let presentation = `Meu nome é ${firstName} tenho ${idade}anos moro em ${cidade}`;
//console.log (presentation);


//alan.indexOf("x") -> O indexOf vai procurar em uma string e mostrar no indice de onde ela etá = -1 (o x não existe no nome)
//let a = 'alabama'.split('a') -> A split vai retirar o que vc selecionou e retornar um array de strings = ["","l","b","m",""]

let nome = "Dayane Mendonça"
let firstIncitinal = nome[0]
let secondIndex = nome.indexOf(' ') + 1
let secondInitial = nome[secondIndex]
let secondName = nome.split(' ')[1][0]

let resultado = `${secondIndex} ${secondName}`
console.log (resultado)