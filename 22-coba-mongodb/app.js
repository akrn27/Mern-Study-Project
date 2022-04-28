const { ObjectID } = require('bson');
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

    // // Menampilkan semua data yang ada di collection 'mahasiswa'
    // console.log(db.collection('mahasiswa').find().toArray((error, result) => {
    //     console.log(result);
    // }));

    // Menampilkan data berdasarkan kriteria yang ada di collection 'mahasiswa'
    // console.log(db.collection('mahasiswa').find({ _id: ObjectID('62693aa5321b9e9c9a7913a9')}).toArray((error, result) => {
    //     console.log(result);
    // }));

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('62693aa5321b9e9c9a7913a9'),
    //     },
    //     {
    //         $set: {
    //             email: 'avip@yahoo.com',
    //         }
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // Mengubah data lebih dari 1, berdasarkan kriteria
    
})