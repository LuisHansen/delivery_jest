const CarrinhoDeCompras = require('./CarrinhoDeCompras.js');

describe('roda a aplicação', function() {

  it('calcula preço final com 5 reais de frete e sem cupom', function() {

    const produto = {nome: "foo", preco: 10, cupom: null}

    const carrinho = new CarrinhoDeCompras([produto]);

    const results = carrinho.fecharPedido("Rua 1");

    expect(results).toEqual(15);

  });

  it('calcula preço final com 5 reais de frete e com cupom de 5 reais', function() {

    const produto = {nome: "bar", preco: 10, cupom: "5REAIS"}

    const carrinho = new CarrinhoDeCompras([produto]);

    const results = carrinho.fecharPedido("Rua 1");

    expect(results).toEqual(10);

  });

});