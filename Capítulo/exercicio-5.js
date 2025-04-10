function percorreRuas(ruas, ruaPerigosa) {
    for (const rua of ruas) {
        if (rua === ruaPerigosa) {
            continue;
        }
        console.log(rua);
    }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');