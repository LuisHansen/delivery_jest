const CarrinhoDeCompras = require('./CarrinhoDeCompras.js');

describe('roda o app', function() {

  it('calcula preço final com 5 reais de frete', function() {
    var produto = {nome: "foo", preco: 10, cupom: "5REAIS"}
    var shoppingCart = new CarrinhoDeCompras([produto]);
    var results = shoppingCart.fecharPedido("Rua 1");

    expect(results).toEqual(15);
  });

});