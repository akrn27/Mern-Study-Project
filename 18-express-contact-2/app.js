const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Muhammad Andika K",
      email: "muhammadandikak@gmail.com",
    },
    {
      nama: "kurnia",
      email: "kurnia@gmail.com",
    },
    {
      nama: "Muhammad",
      email: "muhammad@gmail.com",
    },
  ];

  res.render("index", { 
    nama: "Muhammad Andika", 
    title: "Halaman Home",
    mahasiswa,
    layout: 'layouts/main-layout',
  });
});

app.get("/about", (req, res) => {
  res.render("about", { 
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", { 
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
  });
});

// halaman form tambah data contact
app.get('/contact/add', (req,res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout',
  })
});

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", { 
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
