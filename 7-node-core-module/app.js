// Core Module
// File System
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch(e) {
//     console.log(e)
// }


// menuliskan string ke file (asynchronous)
fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
    console.log(e);
})