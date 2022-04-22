const express = require("express");
const expressLayouts = require('express-ejs-layouts');
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

app.use((req, res, next) => {
  console.log('ini middleware ke-2');
  next();
})

app.get("/contact", (req, res) => {
  res.render("contact", { 
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
