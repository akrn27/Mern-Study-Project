const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail('akurnia755@gmail.com'));
// console.log(validator.isMobilePhone('081387719307', 'id-ID'));
// console.log(validator.isNumeric('93081238103', 'no_symbols'));

// console.log(chalk.green('Hello World!'));
// console.log(chalk.italic.bgBlue.black('Hello World!'));
const pesan = chalk`Lorem, ipsum dolor {bgBlue sit amet} consectetur {bgGreen.italic.black adipiscing} elit. Ab, rem`;
console.log(pesan);
