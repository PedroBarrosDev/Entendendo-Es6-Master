function anunciaBolasSorteadas(...bolas) {
    bolas.forEach(bola => {
      console.log(`A bola escolhida foi: ${bola}`);
    });
  }

anunciaBolasSorteadas(1, 2, 3);