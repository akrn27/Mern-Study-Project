const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/akrn', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Doddy Ferdiansyah',
//     nohp: '0818877665',
//     email: 'doddy@gmail.com',
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));