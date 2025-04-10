function percorreRuas(ruas, ruaParada) {
    for (const rua of ruas) {
        console.log(rua);
        if (rua === ruaParada) {
            break;
        }
    }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');