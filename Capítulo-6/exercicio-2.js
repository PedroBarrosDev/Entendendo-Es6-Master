function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {

    const totalProdutos = produtos.reduce((total, produto) => {
        return total + (caixa.has(produto) ? caixa.get(produto) : 0);
    }, 0);


    const frete = fretes.has(cidade) ? fretes.get(cidade) : fretes.get('Outros');


    return +(totalProdutos + frete).toFixed(2);
}

const caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

const fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);

console.log(calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes));
console.log(calculaValorTotalDaCompra(['Feijão', 'Refrigerante'], 'Rio de Janeiro', caixa, fretes));
console.log(calculaValorTotalDaCompra(['Macarrão'], 'Curitiba', caixa, fretes));