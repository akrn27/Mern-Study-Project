const express = require("express");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

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
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
