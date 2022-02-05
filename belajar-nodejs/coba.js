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

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;