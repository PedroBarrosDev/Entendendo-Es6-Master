function possuiProduto(produtos, produtoDesejado) {
    return produtos.has(produtoDesejado);
}

var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

console.log(possuiProduto(produtos, 'Feijão'));
console.log(possuiProduto(produtos, 'Sorvete'));
