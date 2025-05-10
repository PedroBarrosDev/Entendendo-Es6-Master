import { nome, chave, url as link } from './src/config.js';

import { Telefone } from './src/classe.js';

import { printNoConsole } from './src/printer.js';

console.log('Nome:', nome);
console.log('Chave:', chave);
console.log('Link:', link);

const meuTelefone = new Telefone('iPhone', '99999-8888');
console.log('Telefone:', meuTelefone);

printNoConsole('Modularização feita com sucesso!');