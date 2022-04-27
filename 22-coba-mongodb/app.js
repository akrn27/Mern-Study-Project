const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'akrn';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi gagal!');
    }

    // pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Erik',
    //         email: 'erik@gmail.com'
    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // )

    // Menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Erik',
    //             email: 'erik@yahoo.com'
    //         },
    //         {
    //             nama: 'Avip',
    //             email: 'avip@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('data gagal ditambahkan!');
    //         }

    //         console.log(result);
    //     }
    // )

    // Menampilkan semua data yang ada di collection 'mahasiswa'
    console.log(db.collection('mahasiswa').find().toArray((error, result) => {
        console.log(result);
    }));

})