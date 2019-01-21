export default class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `pessoa: ${this.nome}`
    }
}
