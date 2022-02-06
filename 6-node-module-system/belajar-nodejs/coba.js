function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Andika Kurnia',
    umur: 21,
    cetakMhs() {
        return `Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`;
    }
}

class Orang {
    constructor() {
        console.log('Object Orang telah dibuat!!!');
    }
}


// Type exports 1
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// Type exports 2
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// }

// Type exports 3 with ES6 Notation
module.exports = { cetakNama, PI, mahasiswa, Orang }