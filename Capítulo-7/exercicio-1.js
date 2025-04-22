function removeDuplicatas(numeros) {
    return Array.from(new Set(numeros));
}

console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicatas([5, 3, 5, 7, 3, 9]));