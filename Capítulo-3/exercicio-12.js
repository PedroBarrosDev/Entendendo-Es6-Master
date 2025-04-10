function existeProdutosDatados(produtos, dataReferencia) {
    const dataRef = dataReferencia 
        ? new Date(dataReferencia) 
        : new Date();

    return produtos.some(function(produto) {
        const [dia, mes, ano] = produto.dataValidade.split('/');
        const dataValidade = new Date(`${ano}-${mes}-${dia}`);
        return dataValidade < dataRef;
    });
}

var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
  ];
  
  console.log(existeProdutosDatados(produtos, '2017-03-01'));
  console.log(existeProdutosDatados(produtos, '2016-01-01'));
  