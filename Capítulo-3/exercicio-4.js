function validaParenteses(str) {
    let balanceado = true;

    const resultado = str.split('').reduce((acc, char) => {
        if (char === '(') {
            return acc + 1;
        } else if (char === ')') {
            if (acc === 0) {
                balanceado = false;
                return acc;
            }
            return acc - 1;
        }
        return acc;
    }, 0);

    return balanceado && resultado === 0;
}

console.log(validaParenteses(')((()()())))'));
console.log(validaParenteses('()()()'));      
console.log(validaParenteses(')('));          