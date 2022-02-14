const validator = require('validator');

// console.log(validator.isEmail('akurnia755@gmail.com'));

console.log(validator.isMobilePhone('081387719307', 'id-ID'));

console.log(validator.isNumeric('11a', 'no_symbols'))