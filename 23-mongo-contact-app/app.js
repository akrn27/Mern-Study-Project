const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Halaman Home
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
      layout: "layouts/main-layout",
      nama: "Muhammad Andika",
      mahasiswa,
      title: "Halaman Home",
    });
    console.log('ini halaman home');
  });

  // Halaman About
  app.get("/about", (req, res) => {
    res.render("about", {
      title: "Halaman About",
      layout: "layouts/main-layout",
    });
  });

app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`);
})