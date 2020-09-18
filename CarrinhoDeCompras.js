class CarrinhoDeCompras {

	constructor(produtos) {
		this.produtos = produtos;
	}

	calcularFrete(endereco) {
		return 5;
	}

	fecharPedido(endereco) {
		let precoFinal = 0;
		
		this.produtos.forEach(produto => {
			precoFinal += produto.preco;
		});

		let precoFrete = this.calcularFrete(endereco);
		precoFinal += precoFrete;

		return precoFinal;
	}
}

module.exports = CarrinhoDeCompras;