function clonaObjeto(obj) {
    const clone = {};
    const propriedades = Object.getOwnPropertyNames(obj);

    propriedades.forEach(function(prop) {
        clone[prop] = obj[prop];
    });

    return clone;
}

const original = {
    nome: 'Dolly',
    especie: 'Ovelha',
    idade: 5
};

const copia = clonaObjeto(original);
console.log(copia);