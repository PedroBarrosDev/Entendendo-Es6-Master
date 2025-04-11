function deletaAmigos(amigos, exAmigos) {
    for (const nome of exAmigos) {
        if (amigos.has(nome)) {
            amigos.delete(nome);
            console.log(`${nome} foi deletado!`);
        } else {
            console.log(`${nome} não é seu amigo!`);
        }
    }
}

const amigos = new Map();
amigos.set('João Silva', { idade: 23, sexo: 'masculino' });
amigos.set('Luisa Pimenta', { idade: 18, sexo: 'feminino' });
amigos.set('Julio Marinho', { idade: 52, sexo: 'masculino' });
amigos.set('Marcela Mel', { idade: 27, sexo: 'feminino' });

const exAmigos = ['Luisa Pimenta', 'Marcela Mel', 'Carlos Daniel'];

deletaAmigos(amigos, exAmigos);