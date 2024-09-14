const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    Idade: 25
};

function Criar(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = Criar('Luiz', 'Miranda', 25);
const pessoa2 = Criar('Jean', 'Carlo', 25);
const pessoa3 = Criar('Maria', 'Olivia', 25);
const pessoa4 = Criar('Lucia', 'Maria', 25);
const pessoa5 = Criar('Davi', 'Luca', 25);

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)

const pesso = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    Idade: 25,

    fala() { console.log(`Olá ${this.nome} a fatal Orange Agradece o Contato.`) }
};

pesso.fala();