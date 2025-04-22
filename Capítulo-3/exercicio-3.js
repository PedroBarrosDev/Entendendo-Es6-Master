function caps(array) {
    return array.map(function(str) {
        return str.toUpperCase();
    });
}

console.log(caps(['oi', 'tudo', 'bem?']));