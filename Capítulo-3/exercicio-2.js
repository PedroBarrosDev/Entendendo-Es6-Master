function dobrar(array) {
    return array.map(function(numero) {
        return numero * 2;
    });
}

console.log(dobrar([1, 2, 3]));