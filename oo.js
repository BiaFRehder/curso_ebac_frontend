function Client(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
}

function Servico(nome, telefone, tipo, valor) {
    Client.call(this, nome, telefone);

    let _tipo = tipo;
    this.getTipo = function() {
        return _tipo;
    }
    this.setTipo = function(tipoMassagem) {
        _tipo = tipoMassagem;
    }

    let _valor = valor;
    this.getValor = function() {
        return _valor;
    }
    this.setValor = function(preco) {
        _valor = preco;
    }

    this.marcarHora = function() {
        return `\n${this.nome} quer marcar um horário para ${this.getTipo()}. \nSegue abaixo as informações: `
    }
}

function clienteShiatsu(nome, telefone, tipo, valor) {
    Servico.call(this, nome, telefone, "Shiatsu", "R$500,00");

}

function clienteDrenagem(nome, telefone, tipo, valor) {
    Servico.call(this, nome, telefone, "Drenagem", "R$350,00");
}

const clienteJoao = new clienteShiatsu("João", "9999-9999");
console.log(clienteJoao.marcarHora());
console.log(clienteJoao.nome);
console.log(clienteJoao.telefone);
console.log(clienteJoao.getTipo());
console.log(clienteJoao.getValor());


const clienteMaria = new clienteDrenagem("Maria", "9999-9998");
console.log(clienteMaria.marcarHora());
console.log(clienteMaria.nome);
console.log(clienteMaria.telefone);
console.log(clienteMaria.getTipo());
console.log(clienteMaria.getValor());

const clientePaulo = new clienteShiatsu("Paulo", "9999-9988");
console.log(clientePaulo.marcarHora());
console.log(clientePaulo.nome);
console.log(clientePaulo.telefone);
console.log(clientePaulo.getTipo());
console.log(clientePaulo.getValor());