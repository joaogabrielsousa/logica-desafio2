class hero {
  constructor(name,tipo, idade){
    this.name = name
    this.idade = idade
    this.tipo = tipo
  }
  atacar(){
    if(this.tipo == "mago"){
      this.ataque = "magia"
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    } else if(this.tipo == "guerreiro"){
      this.ataque = "espada"
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    } else if(this.tipo == "monge"){
      this.ataque = "artes marciais"
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    } else if(this.tipo == "ninja"){
      this.ataque = "shuriken"
      console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
  }
}
// variaveis
let nome = ""
let idade = 0
let tipo = ""

let newHero = new hero(nome, tipo, idade)
newHero.atacar()