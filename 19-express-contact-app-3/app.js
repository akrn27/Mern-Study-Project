const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact, addContact, cekDuplikat, deleteContact } = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static("public"));

// Built-in middleware to encode url
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: {maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(flash());

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
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
    msg: req.flash('msg'),
  });
});

// halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// proses data contact
app.post(
  "/contact",
  [
    body('nama').custom((value) => {
      const duplikat = cekDuplikat(value);
      if(duplikat) {
        throw new Error('Nama contact sudah digunakan!');
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(), 
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout',
        errors: errors.array(),
      })
    } else {
      addContact(req.body);
      // kirimkan flash message
      req.flash('msg', 'Data contact berhasil ditambahkan!');
      res.redirect('/contact');
    }
  }
);

// Proses delete contact
app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama);

  // jika contact tidak ada
  if(!contact) {
    res.status(404);
    res.send('<h1>404</h1>');
  } else {
    deleteContact(req.params.nama);
    req.flash('msg', 'Data contact berhasil dihapus!');
    res.redirect('/contact');
  }
})

// Halaman form ubah data contact
app.get('/contact/edit/:nama', (req, res) => {
  res.render('edit-contact', {
    title: 'Form Ubah Data Contact',
    layout: 'layout/main-layout'
  });
});

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
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
