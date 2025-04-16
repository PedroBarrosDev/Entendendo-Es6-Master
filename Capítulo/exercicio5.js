class Compras {
    constructor(itens, valorAPagar, valorPago) {
      this.itens = itens;
      this.valorAPagar = valorAPagar;
      this.valorPago = valorPago;
    }
  }
  
  const compraOriginal = new Compras(['arroz', 'feijão'], 100, 0);
  
  const compraProxy = new Proxy(compraOriginal, {
    set(target, prop, value) {
      if (prop === 'valorPago') {
        if (value < target.valorAPagar) {
          throw new Error('Valor insuficiente para pagar!');
        }
      }
  
      target[prop] = value;
      return true;
    }
  });
  
  compraProxy.valorPago = 150;
  console.log(`Valor pago: ${compraProxy.valorPago}`);
  

  try {
    compraProxy.valorPago = 50;
  } catch (erro) {
    console.error(erro.message);
  }
  